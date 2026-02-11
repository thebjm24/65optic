
import { Language, Translations } from './types';

// Using literal emojis directly is the most reliable method for modern browsers.
// These will be correctly percent-encoded by encodeURIComponent.
const EMOJIS = {
  WAVE: '👋',
  USER: '👤',
  CAKE: '🎂',
  CALENDAR: '📅',
  CLOCK: '⏰',
  PRAY: '🙏',
  EYE: '👁️'
};

// Official WhatsApp link format should not include '+' or leading zeros.
// Ensure this matches the recipient's phone number exactly.
export const WHATSAPP_NUMBER = '212600000000'; 
export const INSTAGRAM_URL = 'https://www.instagram.com/_65optic/';

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    welcome: 'Welcome to 65 Optic',
    priority: `Your Vision, Our Priority ${EMOJIS.EYE}`,
    selectLanguage: 'Please select your language',
    firstName: 'First Name',
    lastName: 'Last Name',
    age: 'Age',
    preferredDate: 'Preferred Date',
    preferredTime: 'Preferred Time',
    confirmButton: 'Confirm Appointment via WhatsApp',
    redirecting: 'Redirecting you to WhatsApp...',
    thankYou: 'Thank you for choosing 65 Optic!',
    instagram: 'Follow us on Instagram',
    formSubtitle: 'Fill in your details to schedule your eye exam',
    requiredError: 'Please fill in all fields'
  },
  fr: {
    welcome: 'Bienvenue chez 65 Optic',
    priority: `Votre vision, notre priorité ${EMOJIS.EYE}`,
    selectLanguage: 'Veuillez choisir votre langue',
    firstName: 'Prénom',
    lastName: 'Nom',
    age: 'Âge',
    preferredDate: 'Date souhaitée',
    preferredTime: 'Heure souhaitée',
    confirmButton: 'Confirmer le RDV via WhatsApp',
    redirecting: 'Redirection vers WhatsApp...',
    thankYou: 'Merci d\'avoir choisi 65 Optic !',
    instagram: 'Suivez-nous sur Instagram',
    formSubtitle: 'Saisissez vos informations pour planifier votre examen',
    requiredError: 'Veuillez remplir tous les champs'
  },
  ar: {
    welcome: 'مرحباً بكم في 65 Optic',
    priority: `رؤيتكم، أولويتنا ${EMOJIS.EYE}`,
    selectLanguage: 'يرجى اختيار اللغة',
    firstName: 'الاسم الشخصي',
    lastName: 'الاسم العائلي',
    age: 'العمر',
    preferredDate: 'التاريخ المفضل',
    preferredTime: 'الوقت المفضل',
    confirmButton: 'تأكيد الموعد عبر واتساب',
    redirecting: 'جاري تحويلك إلى واتساب...',
    thankYou: 'شكراً لاختياركم 65 Optic!',
    instagram: 'تابعونا على إنستغرام',
    formSubtitle: 'أدخل معلوماتك لحجز موعد فحص النظر',
    requiredError: 'يرجى ملء جميع الخانات'
  }
};

export const getWhatsAppMessage = (lang: Language, data: any) => {
  const { firstName, lastName, age, date, time } = data;
  
  if (lang === 'ar') {
    return `مرحباً 65 Optic ${EMOJIS.WAVE}\n\nأرغب في حجز موعد لفحص النظر.\n\n${EMOJIS.USER} الاسم: ${firstName} ${lastName}\n${EMOJIS.CAKE} العمر: ${age}\n${EMOJIS.CALENDAR} التاريخ المفضل: ${date}\n${EMOJIS.CLOCK} الوقت المفضل: ${time}\n\nشكراً لكم ${EMOJIS.PRAY}`;
  }
  
  if (lang === 'fr') {
    return `Bonjour 65 Optic ${EMOJIS.WAVE}\n\nJe souhaite prendre un rendez-vous pour un examen de la vue.\n\n${EMOJIS.USER} Nom: ${firstName} ${lastName}\n${EMOJIS.CAKE} Âge: ${age}\n${EMOJIS.CALENDAR} Date souhaitée: ${date}\n${EMOJIS.CLOCK} Heure souhaitée: ${time}\n\nMerci ${EMOJIS.PRAY}`;
  }
  
  return `Hello 65 Optic ${EMOJIS.WAVE}\n\nI would like to book an eye appointment.\n\n${EMOJ