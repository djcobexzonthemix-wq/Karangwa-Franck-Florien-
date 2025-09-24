
import React from 'react';
import { Screen } from '../App';

interface HomeScreenProps {
  navigateTo: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigateTo }) => {
  return (
    <div className="p-6 h-full flex flex-col justify-center text-center bg-white">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-lg">
          A
        </div>
      </div>
      <h1 className="text-3xl font-bold text-gray-900">Meet AI Specialist</h1>
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
        <ActionButton
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
          label="Browse Services"
          onClick={() => navigateTo({ name: 'services' })}
        />
        <ActionButton
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
          label="Book Face-to-Face ($10)"
          onClick={() => navigateTo({ name: 'booking' })}
        />
        <ActionButton
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
          label="Contact Me"
          onClick={() => navigateTo({ name: 'contact' })}
        />
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

export default HomeScreen;
