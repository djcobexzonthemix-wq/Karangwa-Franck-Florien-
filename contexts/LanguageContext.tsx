
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { translations } from '../translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = useCallback((key: string, params: Record<string, string | number> = {}) => {
    const langMap = (translations as any)[language] || translations.en;
    const fallbackMap = translations.en;
    let text = langMap[key] || fallbackMap[key] || key;
    
    Object.keys(params).forEach(pKey => {
      const regex = new RegExp(`{${pKey}}`, 'g');
      text = text.replace(regex, String(params[pKey]));
    });
    return text;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
