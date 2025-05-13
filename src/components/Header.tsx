
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <a href="#home" className="gradient-text">Dev.Name</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <button onClick={() => scrollToSection("home")} className="nav-link">Home</button>
          <button onClick={() => scrollToSection("about")} className="nav-link">About</button>
          <button onClick={() => scrollToSection("projects")} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">Contact</button>
          <div className="ml-4 flex items-center space-x-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Button size="icon" variant="ghost">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="#contact">
              <Button className="gap-2">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-dark shadow-xl animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <button onClick={() => scrollToSection("home")} className="nav-link text-left py-3">Home</button>
            <button onClick={() => scrollToSection("about")} className="nav-link text-left py-3">About</button>
            <button onClick={() => scrollToSection("projects")} className="nav-link text-left py-3">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="nav-link text-left py-3">Contact</button>
            <div className="flex items-center pt-2 space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Button size="icon" variant="ghost">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <Button className="gap-2" onClick={() => scrollToSection("contact")}>
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
