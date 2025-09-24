
import React from 'react';
import { Screen } from '../App';
import { ServiceCategory } from '../types';
import { t } from '../contexts/LanguageContext';

interface ServiceDetailScreenProps {
  category: ServiceCategory;
  navigateTo: (screen: Screen) => void;
}

const ServiceDetailScreen: React.FC<ServiceDetailScreenProps> = ({ category, navigateTo }) => {
  return (
    <div className="p-6 bg-white h-full">
      <div className="flex items-center mb-6">
        <div className="text-blue-600 mr-4">{React.cloneElement(category.icon, {className: "h-12 w-12"})}</div>
        <div>
            <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
            <p className="text-gray-500">{category.description}</p>
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        {category.services.map((service, index) => (
          <div key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-gray-800">{service.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigateTo({ name: 'chat' })}
        className="w-full flex items-center justify-center p-4 rounded-lg font-semibold text-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
      >
        {t('service_detail_hire_button')}
      </button>
    </div>
  );
};

export default ServiceDetailScreen;
