
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/personalInfo";
import { School, Calendar } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Education = () => {
  const { t, language } = useLanguage();
  // Track which cards are visible for animations
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  
  // Refs to observe the cards
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Setup intersection observer for animation
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    // Configure the observer for each card
    cardRefs.current.forEach((card, index) => {
      if (card) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add a small delay based on index for cascading effect
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
              observer.unobserve(card);
            }
          });
        }, { threshold: 0.2 });
        
        observer.observe(card);
        observers.push(observer);
      }
    });
    
    // Cleanup observers
    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  // Helper function to get animation classes
  const getCardAnimationClass = (index: number) => {
    return visibleCards.includes(index) 
      ? "opacity-100 translate-y-0 transition-all duration-700 ease-out" 
      : "opacity-0 translate-y-8 transition-all duration-700 ease-out";
  };

  return (
    <section id="education" className="navy-light-bg">
      <div className="section-container">
        <h2 className="section-title">{t.education.title}</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalInfo.education.map((edu, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`bg-card border border-muted rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col ${getCardAnimationClass(index)}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal/10 rounded-full">
                  <School className="h-5 w-5 text-teal" />
                </div>
                <span className="text-sm flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" /> {edu.period}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground">{edu.institution}</h3>
              <p className="text-teal mt-2">{edu.degree[language]}</p>
              {edu.location && (
                <p className="text-sm text-muted-foreground mt-2">{edu.location}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
