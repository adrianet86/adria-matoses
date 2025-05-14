
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/personalInfo";
import { School, Calendar } from "lucide-react";

const Education = () => {
  const { t, language } = useLanguage();

  return (
    <section id="education" className="bg-navy-light">
      <div className="section-container">
        <h2 className="section-title">{t.education.title}</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalInfo.education.map((edu, index) => (
            <div 
              key={index}
              className="bg-navy border border-muted rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal/10 rounded-full">
                  <School className="h-5 w-5 text-teal" />
                </div>
                <span className="text-sm flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" /> {edu.period}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
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
