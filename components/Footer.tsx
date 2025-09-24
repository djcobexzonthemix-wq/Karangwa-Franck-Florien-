import React from 'react';
import { Screen } from '../App';
import { CONTACT_PHONE, CONTACT_WHATSAPP, CONTACT_EMAIL } from '../constants';

interface BookingScreenProps {
    navigateTo: (screen: Screen) => void;
}

const BookingScreen: React.FC<BookingScreenProps> = () => {
  return (
    <div className="p-6 bg-white h-full text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🤝 Book Face-to-Face Meeting</h2>
      <p className="text-gray-600 mb-6">Face-to-face meeting with Karangwa.</p>

      <div className="text-left w-full max-w-sm mx-auto bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="text-gray-600">Consultation Fee:</span>
          <span className="font-semibold text-gray-800">10,000 RWF</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="text-gray-600">Transport Fee:</span>
          <span className="font-semibold text-gray-800">5,000 RWF</span>
        </div>
        <div className="flex justify-between pt-3 font-bold text-lg text-gray-900">
          <span>Total:</span>
          <span>15,000 RWF</span>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="font-semibold text-gray-700 mb-2">Availability</h3>
        <p className="text-gray-600">✅ Monday Afternoon</p>
        <p className="text-gray-600">✅ Saturday</p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-700 mb-4">To schedule your meeting, please contact me directly:</h3>
        <div className="space-y-3 max-w-sm mx-auto">
          <ContactLink href={`tel:${CONTACT_PHONE}`} label="Call" value={CONTACT_PHONE} />
          <ContactLink href={CONTACT_WHATSAPP} label="WhatsApp" value="Chat with me directly" isPrimary />
          <ContactLink href={`mailto:${CONTACT_EMAIL}`} label="Email" value={CONTACT_EMAIL} />
        </div>
      </div>
    </div>
  );
};

interface ContactLinkProps {
    href: string;
    label: string;
    value: string;
    isPrimary?: boolean;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, label, value, isPrimary }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`p-4 rounded-lg flex items-center transition-all duration-200 shadow-sm hover:shadow-md w-full text-left ${isPrimary ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
        <div>
            <div className="font-bold">{label}</div>
            <div className="text-sm">{value}</div>
        </div>
    </a>
)

export default BookingScreen;
