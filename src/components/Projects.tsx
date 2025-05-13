
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  reverse?: boolean;
}

const Project = ({ title, description, tags, image, githubUrl, demoUrl, reverse }: ProjectProps) => {
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
        
        <div className={`flex gap-3 ${reverse ? 'lg:justify-end' : ''}`}>
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
          <Button variant="default" size="sm" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product catalog, shopping cart, payment processing, and order management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
    },
    {
      title: "Task Management System",
      description: "A collaborative project management tool featuring drag-and-drop task boards, real-time updates, user roles, and detailed analytics.",
      tags: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind", "Socket.io"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
      reverse: true
    },
    {
      title: "Finance Dashboard",
      description: "Interactive financial data visualization dashboard with real-time market data, customizable widgets, and predictive analytics.",
      tags: ["React", "D3.js", "Express", "GraphQL", "AWS"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
    }
  ];
  
  return (
    <section id="projects" className="bg-navy">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Check out some of my recent work. Each project presented unique challenges and opportunities to learn new technologies.
        </p>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">Interested in seeing more of my work?</p>
          <Button asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
