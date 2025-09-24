
import React from 'react';
import { CONTACT_PHONE, CONTACT_EMAIL, CONTACT_WHATSAPP, SOCIAL_LINKS } from '../constants';

const ContactScreen: React.FC = () => {
  return (
    <div className="p-6 bg-white h-full">
      <div className="space-y-6">
        <ContactButton
          href={`tel:${CONTACT_PHONE}`}
          label="Call Me"
          value={CONTACT_PHONE}
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
        />
        <ContactButton
          href={`mailto:${CONTACT_EMAIL}`}
          label="Email Me"
          value={CONTACT_EMAIL}
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
        />
        <ContactButton
          href={CONTACT_WHATSAPP}
          label="WhatsApp"
          value="Chat with me directly"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.502 1.905 6.371l-1.192 4.354 4.463-1.181z" /></svg>}
          isPrimary
        />
      </div>
      <div className="mt-10 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-center text-gray-700 mb-4">Find Me Online</h3>
        <div className="flex justify-center space-x-6">
            <SocialIcon href={SOCIAL_LINKS.LINKEDIN} label="LinkedIn" />
            <SocialIcon href={SOCIAL_LINKS.YOUTUBE} label="YouTube" />
        </div>
      </div>
    </div>
  );
};

interface ContactButtonProps {
    href: string;
    label: string;
    value: string;
    icon: React.ReactNode;
    isPrimary?: boolean;
}

const ContactButton: React.FC<ContactButtonProps> = ({ href, label, value, icon, isPrimary }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`p-4 rounded-lg flex items-center transition-all duration-200 shadow-sm hover:shadow-md ${isPrimary ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
        <div className="mr-4">{icon}</div>
        <div>
            <div className="font-bold">{label}</div>
            <div className="text-sm">{value}</div>
        </div>
    </a>
)

const SocialIcon: React.FC<{href: string, label: string}> = ({ href, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label={label}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
           {label === 'LinkedIn' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
           {label === 'YouTube' && <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>}
           {label === 'Website' && <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-1.33c0-.851.353-1.637 1-2.197v-1.473c-1.479-.623-2.5-2.34-2.5-4.5 0-2.583 1.945-4.667 4.5-4.667s4.5 2.084 4.5 4.667c0 2.16-1.021 3.877-2.5 4.5v1.473c.647.56 1 1.346 1 2.197v1.33h-6z"/>}
        </svg>
    </a>
)

export default ContactScreen;