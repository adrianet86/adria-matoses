import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/personalInfo";
import { Briefcase, Calendar } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const { t, language } = useLanguage();
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <section id="experience" className="bg-navy">
      <div className="section-container">
        <h2 className="section-title">{t.experience.title}</h2>

        <div className="mt-10 space-y-6">
          {/* Current work - full width */}
          {personalInfo.experiences.length > 0 && (
            <div 
              key={0} 
              className={`bg-navy-light border border-muted rounded-lg p-6 transition-all duration-300 ${
                expandedItem === 0 ? "shadow-xl shadow-teal/5" : "hover:shadow-lg"
              }`}
            >
              <div 
                className="flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                onClick={() => toggleExpand(0)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">{personalInfo.experiences[0].company}</h3>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Current
                    </Badge>
                  </div>
                  <p className="text-teal font-medium mt-1">{personalInfo.experiences[0].position[language]}</p>
                  
                  {/* Technologies */}
                  {personalInfo.experiences[0].technologies && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {personalInfo.experiences[0].technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-2 md:mt-0 flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{personalInfo.experiences[0].period}</span>
                </div>
              </div>

              <div className={`mt-4 transition-all duration-300 overflow-hidden ${
                expandedItem === 0 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="pt-4 border-t border-muted">
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                    {t.experience.responsibilities}
                  </h4>
                  <ul className="space-y-2">
                    {personalInfo.experiences[0].description[language].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teal mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Previous experiences - two per row */}
          {personalInfo.experiences.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalInfo.experiences.slice(1).map((exp, index) => (
                <div 
                  key={index + 1} 
                  className={`bg-navy-light border border-muted rounded-lg p-6 transition-all duration-300 ${
                    expandedItem === index + 1 ? "shadow-xl shadow-teal/5" : "hover:shadow-lg"
                  }`}
                >
                  <div 
                    className="flex flex-col md:flex-row md:items-center justify-between cursor-pointer"
                    onClick={() => toggleExpand(index + 1)}
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-teal font-medium mt-1">{exp.position[language]}</p>
                      
                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <div className={`mt-4 transition-all duration-300 overflow-hidden ${
                    expandedItem === index + 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="pt-4 border-t border-muted">
                      <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
                        {t.experience.responsibilities}
                      </h4>
                      <ul className="space-y-2">
                        {exp.description[language].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-teal mr-2 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
