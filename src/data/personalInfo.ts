
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
  name: "Adrià Matoses",
  title: {
    en: "Senior Software Engineer",
    es: "Ingeniero de Software Senior",
    ca: "Enginyer de Software Sènior"
  },
  email: "adria.matoses@gmail.com",
  location: {
    en: "Barcelona, Catalonia, Spain",
    es: "Barcelona, Cataluña, España",
    ca: "Barcelona, Catalunya, Espanya"
  },
  github: "github.com/adrianet86",
  linkedin: "linkedin.com/in/adriàmatoses-73b47146",
  skills: [
    "PHP", "TypeScript", "Node.js", "Symfony", 
    "Laravel", "Kubernetes", "AWS", "MySQL", 
    "Redis", "Elasticsearch", "MongoDB", "DDD", 
    "CQRS", "TDD", "CI/CD", "DevOps"
  ],
  experiences: [
    {
      company: "Kaufland e-commerce",
      position: {
        en: "Senior Software Engineer",
        es: "Ingeniero de Software Senior",
        ca: "Enginyer de Software Sènior"
      },
      period: "April 2022 - Present",
      description: {
        en: "Development and maintenance of scalable backend services for one of Europe's leading e-commerce platforms. Implementation of solutions based on PHP, TypeScript and Kubernetes, ensuring quality, scalability, and performance.",
        es: "Desarrollo y mantenimiento de servicios backend escalables para una de las plataformas e-commerce líderes en Europa. Implementación de soluciones basadas en PHP, TypeScript y Kubernetes, asegurando calidad, escalabilidad y rendimiento.",
        ca: "Desenvolupament i manteniment de serveis backend escalables per a una de les plataformes e-commerce líders a Europa. Implementació de solucions basades en PHP, TypeScript i Kubernetes, assegurant qualitat, escalabilitat i rendiment."
      }
    },
    {
      company: "PromoFarma.com",
      position: {
        en: "Backend Engineer",
        es: "Ingeniero Backend",
        ca: "Enginyer Backend"
      },
      period: "November 2020 - April 2022",
      description: {
        en: "Designed and implemented backend services with Node.js, PHP, and TypeScript. Used Kubernetes to deploy and scale applications in cloud environments. Worked with GraphQL and Golang to optimize communication between services.",
        es: "Diseñé e implementé servicios backend con Node.js, PHP y TypeScript. Utilicé Kubernetes para desplegar y escalar aplicaciones en entornos cloud. Trabajé con GraphQL y Golang para optimizar la comunicación entre servicios.",
        ca: "Vaig dissenyar i implementar serveis backend amb Node.js, PHP i TypeScript. Vaig utilitzar Kubernetes per desplegar i escalar aplicacions en entorns cloud. Vaig treballar amb GraphQL i Golang per optimitzar la comunicació entre serveis."
      }
    },
    {
      company: "letgo",
      position: {
        en: "PHP Developer",
        es: "Desarrollador PHP",
        ca: "Desenvolupador PHP"
      },
      period: "July 2019 - October 2020",
      description: {
        en: "Development of microservices in Symfony and deployment on AWS with Kubernetes. Application of advanced patterns such as DDD and event sourcing. Improved system stability and scalability.",
        es: "Desarrollo de microservicios en Symfony y despliegue en AWS con Kubernetes. Aplicación de patrones avanzados como DDD y event sourcing. Mejora de la estabilidad y escalabilidad del sistema.",
        ca: "Desenvolupament de microserveis en Symfony i desplegament en AWS amb Kubernetes. Aplicació de patrons avançats com DDD i event sourcing. Millora de l'estabilitat i escalabilitat del sistema."
      }
    },
    {
      company: "GINDUMAC",
      position: {
        en: "Backend PHP Developer & DevOps",
        es: "Desarrollador Backend PHP y DevOps",
        ca: "Desenvolupador Backend PHP i DevOps"
      },
      period: "May 2018 - June 2019",
      description: {
        en: "Creation of backend services with Symfony and adoption of CQRS to improve separation of responsibilities. Configuration of CI/CD pipelines and deployments with Kubernetes and AWS. Collaboration in improving infrastructure and automation of DevOps processes.",
        es: "Creación de servicios backend con Symfony y adopción de CQRS para mejorar la separación de responsabilidades. Configuración de pipelines de CI/CD y despliegues con Kubernetes y AWS. Colaboración en la mejora de la infraestructura y la automatización de procesos DevOps.",
        ca: "Creació de serveis backend amb Symfony i adopció de CQRS per millorar la separació de responsabilitats. Configuració de pipelines de CI/CD i desplegaments amb Kubernetes i AWS. Col·laboració en la millora de la infraestructura i l'automatització de processos DevOps."
      }
    },
    {
      company: "CrediMarket.com",
      position: {
        en: "PHP Developer",
        es: "Desarrollador PHP",
        ca: "Desenvolupador PHP"
      },
      period: "September 2016 - May 2018",
      description: {
        en: "Development of RESTful APIs using Laravel and TDD to ensure code quality. Database optimization with MySQL, Redis, and Elasticsearch. Implementation of advanced tools like Xdebug for debugging and performance analysis.",
        es: "Desarrollo de APIs RESTful utilizando Laravel y TDD para garantizar la calidad del código. Optimización de bases de datos con MySQL, Redis y Elasticsearch. Implementación de herramientas avanzadas como Xdebug para depuración y análisis de rendimiento.",
        ca: "Desenvolupament d'APIs RESTful utilitzant Laravel i TDD per garantir la qualitat del codi. Optimització de bases de dades amb MySQL, Redis i Elasticsearch. Implementació d'eines avançades com Xdebug per a depuració i anàlisi de rendiment."
      }
    }
  ]
};
