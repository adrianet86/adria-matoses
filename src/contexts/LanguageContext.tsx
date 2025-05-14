
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { languages, Language, TranslationKeys } from '../languages';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const defaultLanguage: Language = 'en';

const LanguageContext = createContext<LanguageContextProps>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: languages[defaultLanguage]
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get the language from localStorage first
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedLanguage && Object.keys(languages).includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Try to detect browser language
    const browserLanguage = navigator.language.split('-')[0] as Language;
    if (Object.keys(languages).includes(browserLanguage)) {
      return browserLanguage;
    }
    
    return defaultLanguage;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value = {
    language,
    setLanguage,
    t: languages[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
