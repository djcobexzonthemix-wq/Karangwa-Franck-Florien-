
import React from 'react';
import { portfolioItems } from '../constants';
import { t } from '../contexts/LanguageContext';

const PortfolioScreen: React.FC = () => {
  return (
    <div className="p-4 bg-white h-full">
      <div className="space-y-6">
        {portfolioItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
              >
                {t('portfolio_view_project')} &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioScreen;
