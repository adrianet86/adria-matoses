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
    <section id="experience" className="navy-bg">
      <div className="section-container">
        <h2 className="section-title">{t.experience.title}</h2>
        
        <div className="mt-10">
          {/* Current job - full width */}
          <div className="mb-10">
            <div className="relative border-l-2 border-muted ml-3 pl-8">
              <div className="relative">
                <div className="absolute -left-[41px] bg-background border-4 border-teal rounded-full p-1">
                  <Briefcase className="h-4 w-4 text-teal" />
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
            </div>
          </div>

          {/* Other jobs - two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherJobs.map((job, index) => (
              <div key={index} className="relative">
                <div className="relative border-l-2 border-muted ml-3 pl-8">
                  <div className="absolute -left-[41px] bg-background border-4 border-teal rounded-full p-1">
                    <Briefcase className="h-4 w-4 text-teal" />
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
