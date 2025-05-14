
import { Language } from '../languages';

interface PersonalInfo {
  name: string;
  title: {
    [key in Language]: string;
  };
  email: string;
  location: {
    [key in Language]: string;
  };
  github: string;
  linkedin: string;
  skills: string[];
  experiences: {
    company: string;
    position: {
      [key in Language]: string;
    };
    period: string;
    description: {
      [key in Language]: string;
    };
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "John Developer",
  title: {
    en: "Full Stack Engineer",
    es: "Ingeniero Full Stack",
    ca: "Enginyer Full Stack"
  },
  email: "hello@johndeveloper.com",
  location: {
    en: "San Francisco, CA",
    es: "San Francisco, CA",
    ca: "San Francisco, CA"
  },
  github: "github.com/johndeveloper",
  linkedin: "linkedin.com/in/johndeveloper",
  skills: [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Express", "GraphQL", "MongoDB", 
    "PostgreSQL", "AWS", "Docker", "Git", 
    "CI/CD", "TDD", "Agile", "REST API"
  ],
  experiences: [
    {
      company: "Company XYZ",
      position: {
        en: "Senior Software Engineer",
        es: "Ingeniero de Software Senior",
        ca: "Enginyer de Software Sènior"
      },
      period: "2022 - Present",
      description: {
        en: "Leading development of scalable web applications using React and Node.js. Implementing CI/CD pipelines and mentoring junior developers.",
        es: "Liderando el desarrollo de aplicaciones web escalables usando React y Node.js. Implementando pipelines CI/CD y mentorando a desarrolladores junior.",
        ca: "Liderant el desenvolupament d'aplicacions web escalables utilitzant React i Node.js. Implementant pipelines CI/CD i mentoritzant a desenvolupadors junior."
      }
    },
    {
      company: "Startup Inc.",
      position: {
        en: "Full Stack Developer",
        es: "Desarrollador Full Stack",
        ca: "Desenvolupador Full Stack"
      },
      period: "2020 - 2022",
      description: {
        en: "Built and maintained multiple client-facing applications. Collaborated in an agile environment with daily standups and sprint planning.",
        es: "Construí y mantuve múltiples aplicaciones orientadas al cliente. Colaboré en un entorno ágil con reuniones diarias y planificación de sprints.",
        ca: "Vaig construir i mantenir múltiples aplicacions orientades al client. Vaig col·laborar en un entorn àgil amb reunions diàries i planificació de sprints."
      }
    },
    {
      company: "Agency Co.",
      position: {
        en: "Frontend Developer",
        es: "Desarrollador Frontend",
        ca: "Desenvolupador Frontend"
      },
      period: "2018 - 2020",
      description: {
        en: "Developed responsive web designs and implemented interactive user interfaces for various client websites.",
        es: "Desarrollé diseños web responsivos e implementé interfaces de usuario interactivas para varios sitios web de clientes.",
        ca: "Vaig desenvolupar dissenys web responsives i vaig implementar interfícies d'usuari interactives per a diversos llocs web de clients."
      }
    }
  ]
};
