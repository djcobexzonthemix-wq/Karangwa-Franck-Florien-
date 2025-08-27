import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { EMERGENCY_PHONE } from '../constants';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-white p-4 text-center text-blue-700 text-sm flex-shrink-0 border-t border-gray-200 font-bold">
      <p>
        Iwacu Recovery Centre • <a href="http://www.iwacurecoverycentre.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 transition-colors">
           www.iwacurecoverycentre.com
        </a>
      </p>
      <p className="mt-1">
        {t('emergency_call_prompt')}{' '}
        <a href={`tel:${EMERGENCY_PHONE}`} className="underline hover:text-blue-900 transition-colors">
          {EMERGENCY_PHONE}
        </a>
      </p>
    </footer>
  );
};

export default Footer;