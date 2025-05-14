import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Language } from '@/languages';
import { useState, useRef, useEffect } from 'react';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languageOptions: { code: Language; name: string }[] = [
    { code: 'en', name: 'ENG' },
    { code: 'es', name: 'ESP' },
    { code: 'ca', name: 'CAT' }
  ];

  const currentLanguage = languageOptions.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        size="sm"
        variant="ghost"
        className="h-8 px-2 text-xs gap-1.5 text-white hover:bg-white/10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{currentLanguage?.name}</span>
        <ChevronDown className="h-3 w-3" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-20 bg-navy-dark border border-gray-600 rounded-md shadow-xl z-50">
          {languageOptions.map((lang) => (
            <button
              key={lang.code}
              className={`w-full px-3 py-2 text-xs text-center text-white hover:bg-white/10 first:rounded-t-md last:rounded-b-md transition-colors ${
                language === lang.code ? 'bg-white/10' : ''
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
