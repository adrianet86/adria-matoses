
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/personalInfo";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="navy-bg">
      <div className="section-container">
        <h2 className="section-title">{t.experience.title}</h2>
        
        <div className="mt-10">
          <div className="relative border-l-2 border-muted ml-3 pl-8 space-y-10">
            {personalInfo.experience.map((job, index) => (
              <div key={index} className="relative">
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
                  
                  <p className="text-teal mb-4">{job.title}</p>
                  
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
