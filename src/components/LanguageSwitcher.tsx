
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { languages, Language } from '@/languages';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const languageOptions: { code: Language; name: string }[] = [
    { code: 'en', name: languages.en.general.languageName },
    { code: 'es', name: languages.es.general.languageName },
    { code: 'ca', name: languages.ca.general.languageName }
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex space-x-1">
        {languageOptions.map((lang) => (
          <Button
            key={lang.code}
            size="sm"
            variant={language === lang.code ? "default" : "ghost"}
            className={`px-2.5 py-1 h-auto text-xs ${
              language === lang.code ? '' : 'text-muted-foreground'
            }`}
            onClick={() => setLanguage(lang.code)}
          >
            {lang.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
