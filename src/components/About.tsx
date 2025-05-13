
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Laptop } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Express", "GraphQL", "MongoDB", 
    "PostgreSQL", "AWS", "Docker", "Git", 
    "CI/CD", "TDD", "Agile", "REST API"
  ];
  
  return (
    <section id="about" className="bg-navy-light">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-10">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg">
              Hello! I'm John, a passionate software engineer with over 5 years 
              of experience building web applications. I enjoy creating things 
              that live on the internet, whether that be websites, applications, 
              or anything in between.
            </p>
            
            <p>
              My journey in web development started back in 2018 when I decided to try 
              customizing a WordPress theme — turns out hacking together a custom theme 
              taught me a lot about HTML & CSS! Fast-forward to today, and I've had the 
              privilege of working at <span className="text-teal">an advertising agency</span>, 
              <span className="text-teal"> a start-up</span>, and <span className="text-teal">a large corporation</span>.
            </p>
            
            <p>
              My main focus these days is building accessible, inclusive products and digital 
              experiences at <span className="text-teal">Company XYZ</span> for a variety of clients.
            </p>
            
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="flex flex-wrap gap-2 py-3">
              {skills.map(skill => (
                <Badge key={skill} variant="outline" className="bg-navy border-teal/20">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-navy p-6 rounded-lg border border-muted shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-teal/5">
                <div className="bg-teal/10 p-3 rounded-full w-fit mb-3">
                  <Code className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                <p className="text-muted-foreground text-sm">
                  Creating intuitive UIs with React, responsive designs with Tailwind, and type-safe code with TypeScript.
                </p>
              </div>
              
              <div className="bg-navy p-6 rounded-lg border border-muted shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-teal/5">
                <div className="bg-teal/10 p-3 rounded-full w-fit mb-3">
                  <Database className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Backend</h3>
                <p className="text-muted-foreground text-sm">
                  Building robust APIs with Node.js, Express, and various databases like MongoDB and PostgreSQL.
                </p>
              </div>
              
              <div className="bg-navy p-6 rounded-lg border border-muted shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-teal/5">
                <div className="bg-teal/10 p-3 rounded-full w-fit mb-3">
                  <Laptop className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">DevOps</h3>
                <p className="text-muted-foreground text-sm">
                  Automating deployment pipelines with CI/CD, containerization with Docker, and cloud infrastructure with AWS.
                </p>
              </div>
              
              <div className="bg-navy p-6 rounded-lg border border-muted shadow-lg transform transition-all hover:-translate-y-1 hover:shadow-teal/5">
                <div className="bg-teal/10 p-3 rounded-full w-fit mb-3">
                  <Globe className="h-6 w-6 text-teal" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Web Performance</h3>
                <p className="text-muted-foreground text-sm">
                  Optimizing applications for speed and scalability with a focus on user experience and accessibility.
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
