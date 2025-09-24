
import React from 'react';

interface HeaderProps {
  title: string;
  showBackButton: boolean;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton, onBack }) => {
  return (
    <header className="relative h-20 px-4 text-gray-800 bg-white flex items-center justify-between flex-shrink-0 border-b border-gray-200 z-10">
      <div className="w-12 h-12">
        {showBackButton && (
          <button 
            onClick={onBack} 
            className="w-full h-full flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Go back"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
        )}
      </div>
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-xl font-bold text-center truncate text-gray-900">{title}</h1>
      </div>
      <div className="w-12 h-12 flex items-center justify-center">
         {/* Logo Placeholder */}
         <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
           A
         </div>
      </div>
    </header>
  );
};

export default Header;
