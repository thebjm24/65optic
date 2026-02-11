
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface ConfirmationProps {
  lang: Language;
}

const Confirmation: React.FC<ConfirmationProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const isRTL = lang === 'ar';

  return (
    <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center p-6 z-50 ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-sm flex flex-col items-center text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-green-100 rounded-full scale-150 animate-ping opacity-25"></div>
          <CheckCircle2 size={80} className="text-[#25D366] relative z-10" />
        </div>
        
        <h2 className="text-2xl font-bold text-[#002B5B] mb-4">
          {t.redirecting}
        </h2>
        
        <div className="flex items-center gap-3 text-slate-400 font-medium">
          <Loader2 className="animate-spin" size={20} />
          <span>Opening WhatsApp...</span>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
