import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/projectsData";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  reverse?: boolean;
  hideDemoLink?: boolean;
}

const Project = ({ title, description, tags, image, demoUrl, reverse, hideDemoLink }: ProjectProps) => {
  const { t } = useLanguage();
  
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center ${reverse ? 'lg:direction-rtl' : ''}`}>
      <div className={`lg:col-span-7 ${reverse ? 'lg:order-last' : ''}`}>
        <div className="group relative overflow-hidden rounded-xl border border-muted bg-navy shadow-xl transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <img 
            src={image} 
            alt={title} 
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ height: "350px", objectPosition: "top" }}
          />
        </div>
      </div>
      
      <div className={`lg:col-span-5 ${reverse ? 'lg:text-right' : ''}`}>
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <div className="bg-navy p-6 rounded-lg border border-muted shadow-lg mb-4">
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
        
        <div className={`flex flex-wrap gap-2 mb-4 ${reverse ? 'lg:justify-end' : ''}`}>
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-navy border-teal/20">
              {tag}
            </Badge>
          ))}
        </div>
        
        { !hideDemoLink && (
          <div className={`flex gap-3 ${reverse ? 'lg:justify-end' : ''}`}>
            <Button variant="default" size="sm" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                {t.projects.liveDemo}
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="projects" className="bg-navy">
      <div className="section-container">
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          {t.projects.description}
        </p>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <Project 
              key={project.id}
              title={project.title[language]}
              description={project.description[language]}
              tags={project.tags}
              image={project.image}
              demoUrl={project.demoUrl}
              reverse={index % 2 !== 0}
              hideDemoLink={project.hideDemoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
