import React from 'react';
import { Screen } from '../App';

interface HomeScreenProps {
  navigateTo: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigateTo }) => {
  return (
    <div className="p-6 h-full flex flex-col justify-center text-center bg-white">
      <h1 className="text-3xl font-bold text-gray-900">Meet AI Specialist Karangwa</h1>
      <p className="mt-2 text-md text-gray-500">
        Your Freelance AI Partner – Smarter, Faster, Better.
      </p>

      <div className="mt-12 space-y-4">
        <ActionButton
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
          label="Chat with Me"
          onClick={() => navigateTo({ name: 'chat' })}
          primary
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <SecondaryButton label="Browse Services" onClick={() => navigateTo({ name: 'services' })} />
        <SecondaryButton label="FAQ" onClick={() => navigateTo({ name: 'faq' })} />
        <div className="col-span-2">
            <SecondaryButton label="Contact Me" onClick={() => navigateTo({ name: 'contact' })} />
        </div>
      </div>

      <div className="mt-8">
        <button onClick={() => navigateTo({ name: 'booking' })} className="text-blue-600 hover:underline font-semibold transition-colors">
          Book Face-to-Face Meeting
        </button>
      </div>
      
      <div className="mt-auto pt-4 pb-2">
         <button onClick={() => navigateTo({ name: 'privacy' })} className="text-xs text-gray-400 hover:text-gray-600 hover:underline">
          Privacy Policy
        </button>
      </div>
    </div>
  );
};

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    primary?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick, primary = false }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center justify-center p-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-sm hover:shadow-md ${
            primary 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
        }`}
    >
        <span className="mr-3">{icon}</span>
        {label}
    </button>
);

const SecondaryButton: React.FC<{label: string, onClick: () => void}> = ({ label, onClick }) => (
    <button
        onClick={onClick}
        className="w-full p-3 bg-gray-50 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 border border-gray-200 transition-all duration-200"
    >
        {label}
    </button>
);


export default HomeScreen;