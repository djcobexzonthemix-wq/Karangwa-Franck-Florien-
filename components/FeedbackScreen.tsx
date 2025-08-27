
import React, { useState, useEffect } from 'react';
import { type Answer } from '../types';
import { getFeedback } from '../services/geminiService';
import LoadingSpinner from './LoadingSpinner';
import { useLanguage } from '../contexts/LanguageContext';

interface FeedbackScreenProps {
  serviceName: string;
  answers: Answer[];
  onRestart: () => void;
}

interface Feedback {
    advice: string;
    score: number;
}

const FeedbackScreen: React.FC<FeedbackScreenProps> = ({ serviceName, answers, onRestart }) => {
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await getFeedback(serviceName, answers, language);
        setFeedback(result);
      } catch (err) {
        setError(t('api_error'));
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceName, answers, language, t]);

  const getScoreColor = (score: number) => {
    if (score <= 33) return 'text-red-400';
    if (score <= 66) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <main className="flex-grow flex flex-col p-6 overflow-y-auto text-gray-800">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-4">{t('summary_title')}</h2>
        {isLoading && (
          <div className="flex flex-col items-center justify-center flex-grow">
            <LoadingSpinner />
            <p className="mt-4 text-lg text-blue-800">{t('analyzing_responses')}</p>
          </div>
        )}
        {error && <p className="text-center text-red-700 bg-red-100 p-4 rounded-lg">{error}</p>}
        {feedback && !isLoading && (
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <h3 className="text-lg font-semibold text-blue-700">{t('wellness_score')}</h3>
              <p className={`text-6xl font-bold ${getScoreColor(feedback.score)}`}>{feedback.score}%</p>
              <p className="text-sm text-blue-600 mt-2">{t('score_explanation')}</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl">
               <h3 className="text-lg font-semibold text-blue-700 mb-2">{t('personalized_advice')}</h3>
              <p className="text-base font-light whitespace-pre-wrap text-gray-700">{feedback.advice}</p>
            </div>
          </div>
        )}
      </main>
      <div className="p-6 mt-auto">
        <button
          onClick={onRestart}
          className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg hover:bg-green-600 transition-colors duration-300"
        >
          {t('start_over')}
        </button>
      </div>
    </div>
  );
};

export default FeedbackScreen;
