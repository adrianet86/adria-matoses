
import { en } from './en';
import { es } from './es';
import { ca } from './ca';

export const languages = {
  en,
  es,
  ca
};

export type Language = 'en' | 'es' | 'ca';
export type TranslationKeys = typeof en;
