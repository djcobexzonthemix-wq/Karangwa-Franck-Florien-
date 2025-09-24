
import React from 'react';
import { Screen } from '../App';
import { BookingDetails } from '../types';
import { t } from '../contexts/LanguageContext';
import { CONTACT_PHONE, CONTACT_WHATSAPP, CONTACT_EMAIL } from '../constants';

interface BookingConfirmationScreenProps {
  details: BookingDetails;
  navigateTo: (screen: Screen) => void;
}

const BookingConfirmationScreen: React.FC<BookingConfirmationScreenProps> = ({ details }) => {
  const formattedDate = details.dateTime.toLocaleString([], {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  return (
    <div className="p-6 h-full flex flex-col justify-center items-center text-center bg-white">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{t('booking_confirmation_title')}</h2>
      <p className="mt-2 text-gray-600">
        {t('booking_confirmation_message')} <br />
        <span className="font-semibold text-gray-900">{formattedDate}</span>
      </p>
      <p className="text-sm text-gray-500 mt-1">{t('booking_confirmation_paid')}</p>
      
      <div className="mt-8 pt-6 border-t border-gray-200 w-full max-w-xs">
         <p className="text-gray-600 mb-4">{t('booking_confirmation_contact_prompt')}</p>
         <div className="space-y-3">
            <a href={`tel:${CONTACT_PHONE}`} className="w-full flex items-center justify-center py-3 px-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                {t('booking_confirmation_call_button')}
            </a>
            <a href={CONTACT_WHATSAPP} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center py-3 px-4 rounded-lg font-semibold bg-green-500 text-white hover:bg-green-600 transition-colors">
                {t('booking_confirmation_whatsapp_button')}
            </a>
             <a href={`mailto:${CONTACT_EMAIL}`} className="w-full flex items-center justify-center py-3 px-4 rounded-lg font-semibold bg-gray-600 text-white hover:bg-gray-700 transition-colors">
                {t('booking_confirmation_email_button')}
            </a>
         </div>
      </div>
    </div>
  );
};

export default BookingConfirmationScreen;
