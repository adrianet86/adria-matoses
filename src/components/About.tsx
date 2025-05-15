
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Laptop } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo } from "@/data/personalInfo";

const About = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="about" className="navy-light-bg">
      <div className="section-container">
        <h2 className="section-title">{t.about.title}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-10">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg">
              {t.about.intro}
            </p>
            
            <p>
              {t.about.journey}
            </p>
            
            <p>
              {t.about.current}
            </p>
            
            <p>
              {t.about.technologies}
            </p>
            
            <div className="flex flex-wrap gap-2 py-3">
              {personalInfo.skills.map(skill => (
                <Badge key={skill} variant="outline" className="bg-card border-teal/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border border-muted shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-teal/5">
                <div className="bg-teal/10 p-3 rounded-full w-fit mb-3">
                  <Code className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.about.backend}</h3>
                <p className="text-muted-foreground text-sm">
                  {t.about.backendDesc}
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-muted shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-teal/5">
                <div className="bg-teal/10 p-3 rounded-full w-fit mb-3">
                  <Database className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.about.devops}</h3>
                <p className="text-muted-foreground text-sm">
                  {t.about.devopsDesc}
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-muted shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-teal/5">
                <div className="bg-teal/10 p-3 rounded-full w-fit mb-3">
                  <Laptop className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">DDD / CQRS</h3>
                <p className="text-muted-foreground text-sm">
                  {t.about.architectureDesc}
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-muted shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-teal/5">
                <div className="bg-teal/10 p-3 rounded-full w-fit mb-3">
                  <Globe className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t.about.databases}</h3>
                <p className="text-muted-foreground text-sm">
                  {t.about.databasesDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
