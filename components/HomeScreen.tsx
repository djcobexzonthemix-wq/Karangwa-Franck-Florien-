import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HomeScreenProps {
  onStart: () => void;
  onAskQuestion: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onStart, onAskQuestion }) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col h-full bg-white text-gray-800">
      <main className="flex-grow flex flex-col items-center justify-start pt-12 p-8 text-center">
        
        <div className="w-28 h-28 mb-10 rounded-full bg-blue-100 flex flex-col items-center justify-center font-bold text-blue-600 leading-tight text-center shadow-md">
          <span className="text-xl font-black">IWACU</span>
          <span className="text-2xl font-bold">APP</span>
        </div>

        <div className="max-w-xs">
          <p className="mb-8 text-lg text-blue-900">
            {t('welcome_message')}
          </p>
          <button
            onClick={onStart}
            className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {t('start_self_check')}
          </button>
          <button
            onClick={onAskQuestion}
            className="w-full mt-4 bg-white text-blue-600 border-2 border-blue-600 font-bold py-4 px-6 rounded-full text-lg shadow-lg hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {t('ask_a_question')}
          </button>
        </div>
      </main>
      <footer className="p-4 text-center text-gray-500 text-sm">
        <p>{t('privacy_footer')}</p>
      </footer>
    </div>
  );
};

export default HomeScreen;