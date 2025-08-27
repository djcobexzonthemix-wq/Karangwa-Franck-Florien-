import React from 'react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  showBackButton: boolean;
  onBack: () => void;
  titleKey: string;
}

const Header: React.FC<HeaderProps> = ({ showBackButton, onBack, titleKey }) => {
  const { t } = useLanguage();
  return (
    <header className="relative h-20 px-4 text-blue-700 bg-white flex items-center justify-center flex-shrink-0 border-b border-gray-200 z-10">
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        {showBackButton && (
          <button onClick={onBack} className="p-2 rounded-full hover:bg-blue-50 transition-colors" aria-label={t('back')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
      </div>
      
      <h1 className="text-xl font-bold text-center truncate px-20">{t(titleKey)}</h1>

      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;