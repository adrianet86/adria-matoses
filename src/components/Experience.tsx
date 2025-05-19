
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/personalInfo";
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";

const Experience = () => {
  const { t, language } = useLanguage();
  // Track which job descriptions are expanded (for all screen sizes)
  const [expandedJobs, setExpandedJobs] = useState<number[]>([]);
  // Track which cards are visible for animations
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  
  // Refs to observe the cards
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Get the first (current) job and the rest of the jobs
  const currentJob = personalInfo.experiences[0];
  const otherJobs = personalInfo.experiences.slice(1);
  
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
              }, index * 100);
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
  
  // Toggle expanded state for a job
  const toggleJobExpanded = (index: number) => {
    setExpandedJobs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  // Check if a job is expanded
  const isExpanded = (index: number) => expandedJobs.includes(index);

  // Define the view/hide details text here instead of using translations that don't exist
  const viewDetailsText = language === 'en' ? 'View Details' : (language === 'es' ? 'Ver Detalles' : 'Veure Detalls');
  const hideDetailsText = language === 'en' ? 'Hide Details' : (language === 'es' ? 'Ocultar Detalles' : 'Amagar Detalls');

  // Helper function to get animation classes
  const getCardAnimationClass = (index: number) => {
    return visibleCards.includes(index) 
      ? "opacity-100 translate-y-0 transition-all duration-700 ease-out" 
      : "opacity-0 translate-y-8 transition-all duration-700 ease-out";
  };

  return (
    <section id="experience" className="navy-bg relative">
      <div className="section-container">
        <h2 className="section-title">{t.experience.title}</h2>
        
        <div className="mt-10 relative">
          {/* The flowing river path - connecting briefcase icons */}
          <div className="absolute hidden md:block w-full h-full top-0 left-0 pointer-events-none" aria-hidden="true">
            <svg className="absolute w-full h-full" viewBox="0 0 1200 2000" preserveAspectRatio="none">
              <defs>
                <linearGradient id="riverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#0f766e" />
                </linearGradient>
              </defs>
              
              {/* Main flowing path - modified to connect briefcase icons */}
              <path 
                d="M600,100 C600,100 800,400 400,800 C200,1200 600,1600 600,1600"
                fill="none" 
                stroke="url(#riverGradient)" 
                strokeWidth="8"
                strokeLinecap="round"
                className="opacity-70"
              />
              
              {/* Additional decorative ripples along the river */}
              <path 
                d="M600,100 C600,100 790,410 390,810 C190,1210 590,1610 590,1610" 
                fill="none" 
                stroke="url(#riverGradient)" 
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="10,15"
                className="opacity-40" 
              />
              
              <path 
                d="M600,100 C600,100 810,390 410,790 C210,1190 610,1590 610,1590" 
                fill="none" 
                stroke="url(#riverGradient)" 
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="5,20"
                className="opacity-30" 
              />
            </svg>
          </div>
          
          {/* Current job - full width */}
          <div className="mb-20">
            <div className="relative flex justify-center">
              <div className="z-30 bg-background border-4 border-teal rounded-full p-2 shadow-lg mb-6">
                <Briefcase className="h-6 w-6 text-teal" />
              </div>
            </div>
            
            {/* Expandable Card with Animation */}
            <div 
              ref={el => cardRefs.current[0] = el}
              className={`z-20 relative bg-card border border-muted rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${getCardAnimationClass(0)}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{currentJob.company}</h3>
                <div className="flex items-center text-muted-foreground text-sm mt-1 sm:mt-0">
                  <Calendar className="h-4 w-4 mr-1" />
                  {currentJob.period}
                </div>
              </div>
              
              <p className="text-teal mb-4">{currentJob.position[language]}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {currentJob.technologies?.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="bg-secondary/60">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              {/* Expand on click for all devices */}
              <button 
                onClick={() => toggleJobExpanded(0)}
                className="w-full py-2 px-4 bg-teal/10 text-teal rounded-lg hover:bg-teal/20 transition-colors flex items-center justify-center"
              >
                <span>{isExpanded(0) ? hideDetailsText : viewDetailsText}</span>
                {isExpanded(0) ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </button>
              
              {isExpanded(0) && (
                <div className="mt-4 animate-accordion-down">
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {currentJob.description[language].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Other jobs - two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-20">
            {otherJobs.map((job, index) => (
              <div key={index} className="relative">
                {/* Position the circles along the river path */}
                <div className="flex justify-center">
                  <div className="z-30 bg-background border-4 border-teal rounded-full p-2 shadow-lg mb-6">
                    <Briefcase className="h-6 w-6 text-teal" />
                  </div>
                </div>
                
                <div 
                  ref={el => cardRefs.current[index + 1] = el}
                  className={`bg-card border border-muted rounded-lg p-6 hover:shadow-lg transition-all duration-300 ${getCardAnimationClass(index + 1)}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
                    <div className="flex items-center text-muted-foreground text-sm mt-1 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {job.period}
                    </div>
                  </div>
                  
                  <p className="text-teal mb-4">{job.position[language]}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.technologies?.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/60">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Expand on click for all devices */}
                  <button 
                    onClick={() => toggleJobExpanded(index + 1)}
                    className="w-full py-2 px-4 bg-teal/10 text-teal rounded-lg hover:bg-teal/20 transition-colors flex items-center justify-center"
                  >
                    <span>{isExpanded(index + 1) ? hideDetailsText : viewDetailsText}</span>
                    {isExpanded(index + 1) ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </button>
                  
                  {isExpanded(index + 1) && (
                    <div className="mt-4 animate-accordion-down">
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {job.description[language].map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
