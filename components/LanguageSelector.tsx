
import React from 'react';
import { Language } from '../types';
import { Instagram, Eye } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

interface LanguageSelectorProps {
  onSelect: (lang: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white animate-fade-in">
      <div className="w-20 h-20 bg-[#002B5B] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
        <Eye className="text-white w-10 h-10" />
      </div>
      
      <h1 className="text-3xl font-bold text-[#002B5B] mb-2 tracking-tight">65 OPTIC</h1>
      <p className="text-slate-500 text-center mb-12 max-w-[280px] font-medium">
        Your Vision, Our Priority 👁️
      </p>

      <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
        <button
          onClick={() => onSelect('ar')}
          className="group flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#002B5B] hover:bg-slate-100 transition-all duration-300 font-arabic text-right shadow-sm hover:shadow-md"
        >
          <span className="text-xl">🇲🇦</span>
          <span className="text-lg font-bold text-[#002B5B] flex-1 mr-4">العربية</span>
        </button>

        <button
          onClick={() => onSelect('fr')}
          className="group flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#002B5B] hover:bg-slate-100 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <span className="text-xl">🇫🇷</span>
          <span className="text-lg font-semibold text-[#002B5B] flex-1 ml-4 text-left">Français</span>
        </button>

        <button
          onClick={() => onSelect('en')}
          className="group flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#002B5B] hover:bg-slate-100 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <span className="text-xl">🇬🇧</span>
          <span className="text-lg font-semibold text-[#002B5B] flex-1 ml-4 text-left">English</span>
        </button>
      </div>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-16 flex items-center gap-2 text-slate-400 hover:text-[#002B5B] transition-colors"
      >
        <Instagram size={24} />
      </a>
    </div>
  );
};

export default LanguageSelector;
