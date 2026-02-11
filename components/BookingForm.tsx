
import React, { useState } from 'react';
import { Language, BookingFormData } from '../types';
import { TRANSLATIONS, getWhatsAppMessage, WHATSAPP_NUMBER } from '../constants';
import { User, Calendar, Clock, MessageCircle, ArrowLeft, Cake } from 'lucide-react';

interface BookingFormProps {
  lang: Language;
  onBack: () => void;
  onSuccess: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ lang, onBack, onSuccess }) => {
  const t = TRANSLATIONS[lang];
  const isRTL = lang === 'ar';

  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    age: '',
    date: '',
    time: '',
  });

  const [errors, setErrors] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Fix: Cast Object.values to string array to ensure 'val' is recognized as a string with the 'trim' method.
    const isFormValid = (Object.values(formData) as string[]).every((val) => val.trim() !== '');
    
    if (!isFormValid) {
      setErrors(true);
      return;
    }

    const message = getWhatsAppMessage(lang, formData);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    onSuccess();
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 2000);
  };

  return (
    <div className={`min-h-screen bg-slate-50 p-6 flex flex-col items-center ${isRTL ? 'font-arabic' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="w-full max-w-md flex items-center justify-between mb-8">
        <button 
          onClick={onBack}
          className="p-2 rounded-full bg-white shadow-sm text-slate-400 hover:text-[#002B5B] transition-colors"
        >
          <ArrowLeft size={20} className={isRTL ? 'rotate-180' : ''} />
        </button>
        <div className="text-[#002B5B] font-bold text-lg">65 OPTIC</div>
        <div className="w-9" /> {/* Spacer */}
      </header>

      <div className="w-full max-w-md bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 animate-slide-up">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#002B5B] mb-2">{t.welcome}</h2>
          <p className="text-slate-500">{t.formSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#002B5B] flex items-center gap-1.5">
                <User size={14} className="text-cyan-500" />
                {t.firstName}
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#002B5B]/5 focus:border-[#002B5B] outline-none transition-all placeholder:text-slate-300"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#002B5B] flex items-center gap-1.5">
                <User size={14} className="text-cyan-500" />
                {t.lastName}
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#002B5B]/5 focus:border-[#002B5B] outline-none transition-all placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#002B5B] flex items-center gap-1.5">
              <Cake size={14} className="text-cyan-500" />
              {t.age}
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Ex: 25"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#002B5B]/5 focus:border-[#002B5B] outline-none transition-all placeholder:text-slate-300"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#002B5B] flex items-center gap-1.5">
              <Calendar size={14} className="text-cyan-500" />
              {t.preferredDate}
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#002B5B]/5 focus:border-[#002B5B] outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#002B5B] flex items-center gap-1.5">
              <Clock size={14} className="text-cyan-500" />
              {t.preferredTime}
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#002B5B]/5 focus:border-[#002B5B] outline-none transition-all"
            />
          </div>

          {errors && (
            <p className="text-red-500 text-sm font-medium animate-pulse">{t.requiredError}</p>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-[#25D366] text-white font-bold rounded-2xl shadow-lg shadow-green-200 hover:shadow-green-300 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4"
          >
            <MessageCircle size={22} fill="white" />
            <span>{t.confirmButton}</span>
          </button>
        </form>
      </div>

      <p className="mt-8 text-slate-400 text-sm font-medium">© 2024 65 OPTIC</p>
    </div>
  );
};

export default BookingForm;
