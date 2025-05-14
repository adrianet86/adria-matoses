
import { Github, Gitlab, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/personalInfo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy-dark py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {personalInfo.name}. {t.footer.rights}
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={`https://${personalInfo.github}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-teal transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={`https://${personalInfo.gitlab}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-teal transition-colors"
              aria-label="GitLab"
            >
              <Gitlab className="h-5 w-5" />
            </a>
            <a 
              href={`https://${personalInfo.linkedin}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground hover:text-teal transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {t.footer.builtWith} <span className="text-red-400">❤️</span> by {personalInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
