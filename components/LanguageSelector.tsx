import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { languages } from '../translations';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectLanguage = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getFlagEmoji = (langCode: string) => {
    const flags: { [key: string]: string } = {
      en: '🌐',
      fr: '🇫🇷',
      rw: '🇷🇼',
      es: '🇪🇸',
      ar: '🇸🇦',
    };
    return flags[langCode] || '🏳️';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center p-2 rounded-full hover:bg-blue-50 transition-colors"
        aria-label="Select language"
      >
        <span className="text-2xl">{getFlagEmoji(language)}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 text-gray-800">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectLanguage(lang.code);
                  }}
                  className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <span className="mr-3 text-lg">{getFlagEmoji(lang.code)}</span>
                  {lang.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;