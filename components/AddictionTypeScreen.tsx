
import React from 'react';
import { type Service, AddictionType } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface AddictionTypeScreenProps {
  service: Service;
  onSelectAddictionType: (type: AddictionType) => void;
}

const AddictionTypeScreen: React.FC<AddictionTypeScreenProps> = ({ service, onSelectAddictionType }) => {
  const { t } = useLanguage();
  const addictionTypes = service.addictionTypes ? Object.keys(service.addictionTypes) as AddictionType[] : [];

  return (
    <div className="flex flex-col h-full bg-white">
      <main className="flex-grow flex flex-col p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">{t('select_addiction_type')}</h2>
        <div className="space-y-3">
          {addictionTypes.map((type) => (
            <button
              key={type}
              onClick={() => onSelectAddictionType(type)}
              className="w-full bg-white text-blue-700 font-semibold py-4 px-5 rounded-xl text-left shadow-md border border-blue-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-200 transform hover:scale-[1.02]"
            >
              {t(service.addictionTypes![type]!.nameKey)}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AddictionTypeScreen;
