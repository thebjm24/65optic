
export type Language = 'en' | 'fr' | 'ar';

export interface BookingFormData {
  firstName: string;
  lastName: string;
  age: string;
  date: string;
  time: string;
}

export interface Translations {
  welcome: string;
  priority: string;
  selectLanguage: string;
  firstName: string;
  lastName: string;
  age: string;
  preferredDate: string;
  preferredTime: string;
  confirmButton: string;
  redirecting: string;
  thankYou: string;
  instagram: string;
  formSubtitle: string;
  requiredError: string;
}

export type ViewState = 'language' | 'form' | 'success';
