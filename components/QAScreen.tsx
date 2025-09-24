
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { type ChatMessage } from '../types';
import { getChatResponse } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';
import { t } from '../contexts/LanguageContext';
import { Screen } from '../App';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface ChatScreenProps {
    navigateTo: (screen: Screen) => void;
}

const ChatScreen: React.FC<ChatScreenProps> = () => {
    const getInitialMessage = useCallback(() => {
        return { sender: 'ai' as const, text: t('chat_initial_greeting') };
    }, []);

    const [messages, setMessages] = useState<ChatMessage[]>([getInitialMessage()]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    
    const recognitionRef = useRef<any>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        setMessages([getInitialMessage()]);
    }, [getInitialMessage]);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.lang = 'en-US';
            recognitionRef.current.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                setInputValue(transcript);
                handleSendMessage(transcript);
            };
            recognitionRef.current.onerror = (event: any) => {
                console.error('Speech recognition error', event.error);
                setIsListening(false);
            };
            recognitionRef.current.onend = () => setIsListening(false);
        }
    }, []);

    const handleSendMessage = async (text?: string) => {
        const trimmedInput = (text || inputValue).trim();
        if (!trimmedInput || isLoading) return;

        const newUserMessage: ChatMessage = { sender: 'user', text: trimmedInput };
        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);
        setInputValue('');
        setIsLoading(true);

        try {
            const aiResponse = await getChatResponse(updatedMessages);
            const newAiMessage: ChatMessage = { sender: 'ai', text: aiResponse };
            setMessages(prev => [...prev, newAiMessage]);
        } catch (error) {
            const errorMessage: ChatMessage = { sender: 'ai', text: t('api_error') };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleMicClick = () => {
        if (!recognitionRef.current) return;
        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
            setIsListening(true);
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-100">
            <div className="flex-grow p-4 space-y-4 overflow-y-auto pb-24">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.sender === 'ai' && <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">A</div>}
                        <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl shadow-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none'}`}>
                            <p className="text-base whitespace-pre-wrap">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-end gap-2 justify-start">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">A</div>
                        <div className="px-4 py-3 rounded-2xl bg-white rounded-bl-none"><LoadingSpinner /></div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-2 bg-white border-t border-gray-200">
                <div className="flex items-center space-x-2 p-2">
                    <input
                        type="text"
                        value={isListening ? t('chat_listening') : inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder={t('chat_placeholder')}
                        className="flex-grow border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
                        disabled={isLoading || isListening}
                    />
                    <button onClick={handleMicClick} className={`p-3 rounded-full transition-colors flex-shrink-0 ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`} disabled={isLoading}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                    </button>
                    <button onClick={() => handleSendMessage()} className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors flex-shrink-0" disabled={isLoading || !inputValue.trim()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatScreen;
