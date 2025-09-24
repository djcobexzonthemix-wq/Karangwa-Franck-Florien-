import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/QAScreen';
import ServicesScreen from './components/ServiceSelectionScreen';
import ServiceDetailScreen from './components/ScrollButton';
import BookingScreen from './components/Footer';
import ContactScreen from './components/QuestionScreen';
import FaqScreen from './components/FeedbackScreen';
import Header from './components/Header';
import PrivacyPolicyScreen from './components/PrivacyPolicyScreen';
import OfflineNotice from './components/OfflineNotice';

import { type ServiceCategory } from './types';
import { serviceCategories } from './constants';

export type Screen = 
  | { name: 'home' }
  | { name: 'chat' }
  | { name: 'services' }
  | { name: 'service-detail', category: ServiceCategory }
  | { name: 'booking' }
  | { name: 'contact' }
  | { name: 'faq' }
  | { name: 'privacy' };

const App: React.FC = () => {
  const [screenStack, setScreenStack] = useState<Screen[]>([{ name: 'home' }]);
  
  const currentScreen = screenStack[screenStack.length - 1];

  const navigateTo = (screen: Screen) => {
    setScreenStack(prevStack => [...prevStack, screen]);
  };

  const handleBack = () => {
    if (screenStack.length > 1) {
      setScreenStack(prevStack => prevStack.slice(0, -1));
    }
  };

  const renderScreen = () => {
    switch (currentScreen.name) {
      case 'home':
        return <HomeScreen navigateTo={navigateTo} />;
      case 'chat':
        return <ChatScreen navigateTo={navigateTo} />;
      case 'services':
        return <ServicesScreen navigateTo={navigateTo} serviceCategories={serviceCategories} />;
      case 'service-detail':
        return <ServiceDetailScreen category={currentScreen.category} navigateTo={navigateTo} />;
      case 'booking':
        return <BookingScreen navigateTo={navigateTo} />;
      case 'contact':
        return <ContactScreen />;
      case 'faq':
        return <FaqScreen />;
      case 'privacy':
        return <PrivacyPolicyScreen />;
      default:
        return <HomeScreen navigateTo={navigateTo} />;
    }
  };

  const getTitleForScreen = (screen: Screen): string => {
      switch (screen.name) {
          case 'home': return 'Meet AI Specialist Karangwa';
          case 'chat': return 'AI Assistant';
          case 'services': return 'My Services';
          case 'service-detail': return screen.category.title;
          case 'booking': return 'Book Face-to-Face';
          case 'contact': return 'Contact Me';
          case 'faq': return 'FAQ';
          case 'privacy': return 'Privacy Policy';
          default: return 'Meet AI Specialist Karangwa';
      }
  };

  return (
    <div className="bg-gray-100 font-sans flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-md h-screen md:h-[800px] md:max-h-[90vh] bg-white shadow-2xl md:rounded-3xl overflow-hidden flex flex-col">
        <OfflineNotice />
        <Header 
          title={getTitleForScreen(currentScreen)}
          showBackButton={screenStack.length > 1} 
          onBack={handleBack} 
        />
        <main className="flex-grow overflow-y-auto bg-gray-50">
          {renderScreen()}
        </main>
      </div>
    </div>
  );
};

export default App;