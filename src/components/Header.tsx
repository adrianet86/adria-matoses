import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/personalInfo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Track scroll position for styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation click for smooth scrolling
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="#home" className="gradient-text">{personalInfo.name}</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <button onClick={() => scrollToSection("home")} className="nav-link">{t.header.home}</button>
          <button onClick={() => scrollToSection("about")} className="nav-link">{t.header.about}</button>
          <button onClick={() => scrollToSection("experience")} className="nav-link">{t.header.experience}</button>
          <button onClick={() => scrollToSection("education")} className="nav-link">{t.header.education}</button>
          <button onClick={() => scrollToSection("projects")} className="nav-link">{t.header.projects}</button>
          <a href="#contact">
            <Button className="gap-2 ml-4">
              <Mail className="h-4 w-4" />
              {t.header.contactMe}
            </Button>
          </a>
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher />
          <button 
            className="text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-dark shadow-xl animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <button onClick={() => scrollToSection("home")} className="nav-link text-left py-3">{t.header.home}</button>
            <button onClick={() => scrollToSection("about")} className="nav-link text-left py-3">{t.header.about}</button>
            <button onClick={() => scrollToSection("experience")} className="nav-link text-left py-3">{t.header.experience}</button>
            <button onClick={() => scrollToSection("education")} className="nav-link text-left py-3">{t.header.education}</button>
            <button onClick={() => scrollToSection("projects")} className="nav-link text-left py-3">{t.header.projects}</button>
            <div className="flex items-center pt-2">
              <Button className="gap-2" onClick={() => scrollToSection("contact")}>
                <Mail className="h-4 w-4" />
                {t.header.contactMe}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
