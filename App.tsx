
import React, { useState } from 'react';
import LanguageSelector from './components/LanguageSelector';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';
import { Language, ViewState } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language | null>(null);
  const [view, setView] = useState<ViewState>('language');

  const handleLanguageSelect = (selectedLang: Language) => {
    setLang(selectedLang);
    setView('form');
  };

  const handleBack = () => {
    setView('language');
  };

  const handleSuccess = () => {
    setView('success');
  };

  return (
    <div className="min-h-screen max-w-screen-md mx-auto relative overflow-x-hidden">
      {view === 'language' && (
        <LanguageSelector onSelect={handleLanguageSelect} />
      )}
      
      {view === 'form' && lang && (
        <BookingForm 
          lang={lang} 
          onBack={handleBack} 
          onSuccess={handleSuccess} 
        />
      )}

      {view === 'success' && lang && (
        <Confirmation lang={lang} />
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
