
import React from 'react';
import { type Service } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceSelectionScreenProps {
  services: Service[];
  onSelectService: (service: Service) => void;
}

const ServiceSelectionScreen: React.FC<ServiceSelectionScreenProps> = ({ services, onSelectService }) => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col h-full bg-white">
      <main className="flex-grow flex flex-col p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">{t('choose_category')}</h2>
        <div className="space-y-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onSelectService(service)}
              className="w-full bg-white text-blue-700 font-semibold py-4 px-5 rounded-xl text-left shadow-md border border-blue-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 transform hover:scale-[1.02]"
            >
              {t(service.nameKey)}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServiceSelectionScreen;
