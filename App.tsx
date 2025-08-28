import React, { useState, useCallback, useRef } from 'react';
import HomeScreen from './components/HomeScreen';
import ServiceSelectionScreen from './components/ServiceSelectionScreen';
import AddictionTypeScreen from './components/AddictionTypeScreen';
import QuestionScreen from './components/QuestionScreen';
import FeedbackScreen from './components/FeedbackScreen';
import Footer from './components/Footer';
import Header from './components/Header';
import QAScreen from './components/QAScreen';
import ScrollButton from './components/ScrollButton';
import { type Service, type Answer, type Question, AddictionType } from './types';
import { SERVICES } from './constants';
import { useLanguage } from './contexts/LanguageContext';

type Screen = 'home' | 'services' | 'addictionType' | 'questions' | 'feedback' | 'qa';

const App: React.FC = () => {
  const [screenHistory, setScreenHistory] = useState<Screen[]>(['home']);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedAddictionType, setSelectedAddictionType] = useState<AddictionType | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentScreen = screenHistory[screenHistory.length - 1];

  const navigateTo = useCallback((screen: Screen) => {
    setScreenHistory(prev => [...prev, screen]);
  }, []);

  const handleBack = useCallback(() => {
    if (screenHistory.length > 1) {
      if (currentScreen === 'questions' && selectedService?.id === 'addiction') {
         setScreenHistory(prev => prev.slice(0, -2)); // Go back two steps from questions to services
      } else {
         setScreenHistory(prev => prev.slice(0, -1));
      }
    }
  }, [screenHistory, currentScreen, selectedService]);

  const handleStart = useCallback(() => {
    navigateTo('services');
  }, [navigateTo]);
  
  const handleAskQuestion = useCallback(() => {
    navigateTo('qa');
  }, [navigateTo]);

  const handleSelectService = useCallback((service: Service) => {
    setSelectedService(service);
    if (service.id === 'addiction') {
      navigateTo('addictionType');
    } else {
      navigateTo('questions');
    }
  }, [navigateTo]);
  
  const handleSelectAddictionType = useCallback((type: AddictionType) => {
    setSelectedAddictionType(type);
    navigateTo('questions');
  }, [navigateTo]);

  const handleFinishQuestions = useCallback((newAnswers: Answer[]) => {
    setAnswers(newAnswers);
    navigateTo('feedback');
  }, [navigateTo]);

  const handleRestart = useCallback(() => {
    setSelectedService(null);
    setSelectedAddictionType(null);
    setAnswers([]);
    setScreenHistory(['home']);
  }, []);

  const getQuestions = (): Question[] => {
      if (!selectedService) return [];
      if (selectedService.id === 'addiction' && selectedAddictionType) {
          return selectedService.addictionTypes?.[selectedAddictionType]?.questions || [];
      }
      return selectedService.questions || [];
  };

  const getServiceName = (): string => {
    if (!selectedService) return '';
    const translatedServiceName = t(selectedService.nameKey);
    if (selectedService.id === 'addiction' && selectedAddictionType) {
        const translatedAddictionName = t(selectedService.addictionTypes![selectedAddictionType]!.nameKey);
        return `${translatedServiceName}: ${translatedAddictionName}`;
    }
    return translatedServiceName;
  }

  const getHeaderTitleKey = (): string => {
    // Per user request, the header title is now static.
    return 'app_title';
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onStart={handleStart} onAskQuestion={handleAskQuestion} />;
      case 'services':
        return <ServiceSelectionScreen services={SERVICES} onSelectService={handleSelectService} />;
      case 'addictionType':
        return <AddictionTypeScreen service={selectedService!} onSelectAddictionType={handleSelectAddictionType} />;
      case 'questions':
          const questions = getQuestions();
          if (selectedService && questions.length > 0) {
            return <QuestionScreen 
              serviceName={getServiceName()}
              questions={questions}
              onFinish={handleFinishQuestions} 
            />;
          }
          handleRestart();
          return null;
      case 'feedback':
        if (selectedService) {
          return <FeedbackScreen 
            serviceName={getServiceName()} 
            answers={answers} 
            onRestart={handleRestart} 
          />;
        }
        handleRestart();
        return null;
      case 'qa':
        return <QAScreen />;
      default:
        return <HomeScreen onStart={handleStart} onAskQuestion={handleAskQuestion} />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans flex items-center justify-center">
      <div className="relative w-full max-w-md h-[800px] max-h-[90vh] bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col">
        <Header 
            showBackButton={currentScreen !== 'home'} 
            onBack={handleBack}
            titleKey={getHeaderTitleKey()}
        />
        <div ref={scrollContainerRef} className="flex-grow flex flex-col overflow-y-auto">
           {renderScreen()}
        </div>
        <ScrollButton scrollContainerRef={scrollContainerRef} />
        <Footer />
      </div>
    </div>
  );
};

export default App;