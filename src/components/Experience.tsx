import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/personalInfo";
import { Briefcase, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const { t, language } = useLanguage();
  // Get the first (current) job and the rest of the jobs
  const currentJob = personalInfo.experiences[0];
  const otherJobs = personalInfo.experiences.slice(1);

  return (
    <section id="experience" className="navy-bg relative">
      <div className="section-container">
        <h2 className="section-title">{t.experience.title}</h2>
        
        <div className="mt-10 relative">
          {/* The flowing river path */}
          <div className="absolute hidden md:block" aria-hidden="true">
            <div className="h-full w-16 left-1/2 transform -translate-x-1/2 absolute">
              <div className="h-full w-2 bg-gradient-to-b from-teal to-teal-dark absolute left-1/2 transform -translate-x-1/2 rounded-full"></div>
            </div>
            
            {/* Wavy path effect */}
            <svg className="absolute left-1/2 transform -translate-x-1/2 top-0 w-16 h-full" width="100%" height="100%" viewBox="0 0 100 1000" preserveAspectRatio="none">
              <path 
                d="M50,0 Q70,200 30,400 Q10,600 50,800 Q90,1000 50,1200" 
                fill="none" 
                stroke="url(#riverGradient)" 
                strokeWidth="6"
                strokeLinecap="round"
                className="opacity-70" 
              />
              <defs>
                <linearGradient id="riverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#0f766e" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Current job - full width */}
          <div className="mb-20">
            <div className="relative flex justify-center">
              <div className="z-10 bg-background border-4 border-teal rounded-full p-2 shadow-lg mb-6">
                <Briefcase className="h-6 w-6 text-teal" />
              </div>
            </div>
            
            <div className="bg-card border border-muted rounded-lg p-6 hover:shadow-lg transition-all duration-300">
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
              
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {currentJob.description[language].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other jobs - two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-20">
            {otherJobs.map((job, index) => (
              <div key={index} className="relative">
                <div className="flex justify-center">
                  <div className="z-10 bg-background border-4 border-teal rounded-full p-2 shadow-lg mb-6">
                    <Briefcase className="h-6 w-6 text-teal" />
                  </div>
                </div>
                
                <div className="bg-card border border-muted rounded-lg p-6 hover:shadow-lg transition-all duration-300">
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
                  
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {job.description[language].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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
