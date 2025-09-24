
import React from 'react';
import { Screen } from '../App';
import { ServiceCategory } from '../types';

interface ServicesScreenProps {
  navigateTo: (screen: Screen) => void;
  serviceCategories: ServiceCategory[];
}

const ServicesScreen: React.FC<ServicesScreenProps> = ({ navigateTo, serviceCategories }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
        {serviceCategories.map(category => (
          <div
            key={category.id}
            onClick={() => navigateTo({ name: 'service-detail', category })}
            className="bg-white p-5 rounded-xl shadow-md border border-gray-100 cursor-pointer hover:shadow-lg hover:border-blue-400 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="text-blue-600 mb-3">
              {category.icon}
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-1">{category.title}</h3>
            <p className="text-sm text-gray-500 leading-tight">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesScreen;
