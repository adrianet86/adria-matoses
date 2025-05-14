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
  gitlab: string;
  linkedin: string;
  skills: string[];
  experiences: {
    company: string;
    position: {
      [key in Language]: string;
    };
    period: string;
    technologies: string[];
    categories: string[];
    description: {
      [key in Language]: string[];
    };
  }[];
  education: {
    institution: string;
    degree: {
      [key in Language]: string;
    };
    period: string;
    location?: string;
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
  gitlab: "gitlab.com/adrianet86",
  linkedin: "linkedin.com/in/adriàmatoses-73b47146",
  skills: [
    "PHP", "TypeScript", "Symfony", "Golang", 
    "Kubernetes", "AWS", "MySQL", "Laravel",
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
      technologies: ["PHP", "TypeScript", "Kubernetes", "AWS", "CQRS"],
      categories: ["Backend", "DevOps"],
      description: {
        en: [
          "Development and maintenance of scalable backend services for one of Europe's leading e-commerce platforms.",
          "Implementation of solutions based on PHP, TypeScript and Kubernetes, ensuring quality, scalability, and performance.",
          "Mentoring team members through software design workshops and practical Kubernetes sessions, promoting best practices and continuous learning.",
          "Active participation in architecture definition and adoption of patterns like CQRS and event-driven design."
        ],
        es: [
          "Desarrollo y mantenimiento de servicios backend escalables para una de las plataformas e-commerce líderes en Europa.",
          "Implementación de soluciones basadas en PHP, TypeScript y Kubernetes, asegurando calidad, escalabilidad y rendimiento.",
          "Mentoring a compañeros del equipo mediante workshops de diseño de software y talleres prácticos sobre Kubernetes, promoviendo las buenas prácticas y el aprendizaje continuo.",
          "Participación activa en la definición de arquitectura y adopción de patrones como CQRS y event-driven design."
        ],
        ca: [
          "Desenvolupament i manteniment de serveis backend escalables per a una de les plataformes e-commerce líders a Europa.",
          "Implementació de solucions basades en PHP, TypeScript i Kubernetes, assegurant qualitat, escalabilitat i rendiment.",
          "Mentoring a companys de l'equip mitjançant tallers de disseny de software i sessions pràctiques sobre Kubernetes, promovent les bones pràctiques i l'aprenentatge continu.",
          "Participació activa en la definició d'arquitectura i adopció de patrons com CQRS i event-driven design."
        ]
      }
    },
    {
      company: "PromoFarma.com",
      position: {
        en: "Senior Software Engineer",
        es: "Ingeniero de Software Senior",
        ca: "Enginyer de Software Sènior"
      },
      period: "November 2020 - April 2022",
      technologies: ["Node.js", "PHP", "TypeScript", "Kubernetes", "GraphQL", "Golang"],
      categories: ["Backend", "DevOps"],
      description: {
        en: [
          "Designed and implemented backend services with Node.js, PHP, and TypeScript.",
          "Used Kubernetes to deploy and scale applications in cloud environments.",
          "Worked with GraphQL and Golang to optimize communication between services."
        ],
        es: [
          "Diseñé e implementé servicios backend con Node.js, PHP y TypeScript.",
          "Utilicé Kubernetes para desplegar y escalar aplicaciones en entornos cloud.",
          "Trabajé con GraphQL y Golang para optimizar la comunicación entre servicios."
        ],
        ca: [
          "Vaig dissenyar i implementar serveis backend amb Node.js, PHP i TypeScript.",
          "Vaig utilitzar Kubernetes per desplegar i escalar aplicacions en entorns cloud.",
          "Vaig treballar amb GraphQL i Golang per optimitzar la comunicació entre serveis."
        ]
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
      technologies: ["PHP", "Symfony", "AWS", "Kubernetes", "DDD"],
      categories: ["Backend", "DevOps"],
      description: {
        en: [
          "Development of microservices in Symfony and deployment on AWS with Kubernetes.",
          "Application of advanced patterns such as DDD and event sourcing.",
          "Improved system stability and scalability."
        ],
        es: [
          "Desarrollo de microservicios en Symfony y despliegue en AWS con Kubernetes.",
          "Aplicación de patrones avanzados como DDD y event sourcing.",
          "Mejora de la estabilidad y escalabilidad del sistema."
        ],
        ca: [
          "Desenvolupament de microserveis en Symfony i desplegament en AWS amb Kubernetes.",
          "Aplicació de patrons avançats com DDD i event sourcing.",
          "Millora de l'estabilitat i escalabilitat del sistema."
        ]
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
      technologies: ["PHP", "Symfony", "Kubernetes", "AWS", "CQRS", "CI/CD"],
      categories: ["Backend", "DevOps"],
      description: {
        en: [
          "Creation of backend services with Symfony and adoption of CQRS to improve separation of responsibilities.",
          "Configuration of CI/CD pipelines and deployments with Kubernetes and AWS.",
          "Collaboration in improving infrastructure and automation of DevOps processes."
        ],
        es: [
          "Creación de servicios backend con Symfony y adopción de CQRS para mejorar la separación de responsabilidades.",
          "Configuración de pipelines de CI/CD y despliegues con Kubernetes y AWS.",
          "Colaboración en la mejora de la infraestructura y la automatización de procesos DevOps."
        ],
        ca: [
          "Creació de serveis backend amb Symfony i adopció de CQRS per millorar la separació de responsabilitats.",
          "Configuració de pipelines de CI/CD i desplegaments amb Kubernetes i AWS.",
          "Col·laboració en la millora de la infraestructura i l'automatització de processos DevOps."
        ]
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
      technologies: ["PHP", "Laravel", "MySQL", "Redis", "Elasticsearch", "TDD"],
      categories: ["Backend"],
      description: {
        en: [
          "Development of RESTful APIs using Laravel and TDD to ensure code quality.",
          "Database optimization with MySQL, Redis, and Elasticsearch.",
          "Implementation of advanced tools like Xdebug for debugging and performance analysis."
        ],
        es: [
          "Desarrollo de APIs RESTful utilizando Laravel y TDD para garantizar la calidad del código.",
          "Optimización de bases de datos con MySQL, Redis y Elasticsearch.",
          "Implementación de herramientas avanzadas como Xdebug para depuración y análisis de rendimiento."
        ],
        ca: [
          "Desenvolupament d'APIs RESTful utilizando Laravel i TDD per garantir la qualitat del codi.",
          "Optimització de bases de dades amb MySQL, Redis i Elasticsearch.",
          "Implementació d'eines avançades com Xdebug per a depuració i anàlisi de rendiment."
        ]
      }
    },
    {
      company: "GlobeID LTD",
      position: {
        en: "Software Developer",
        es: "Software Developer",
        ca: "Software Developer"
      },
      period: "September 2013 - September 2016",
      technologies: ["PHP", "Yii", "MySQL", "Android"],
      categories: ["Backend", "Frontend"],
      description: {
        en: [
          "Development of web applications with PHP (Yii Framework) and MySQL database design.",
          "Creation of Android applications and OCX components for Windows.",
          "Management of development projects from analysis phase to implementation."
        ],
        es: [
          "Desarrollo de aplicaciones web con PHP (Yii Framework) y diseño de bases de datos en MySQL.",
          "Creación de aplicaciones Android y componentes OCX para Windows.",
          "Gestión de proyectos de desarrollo desde la fase de análisis hasta la implementación."
        ],
        ca: [
          "Desenvolupament d'aplicacions web amb PHP (Yii Framework) i disseny de bases de dades en MySQL.",
          "Creació d'aplicacions Android i components OCX per a Windows.",
          "Gestió de projectes de desenvolupament des de la fase d'anàlisi fins a la implementació."
        ]
      }
    },
    {
      company: "Passportscan Ltd.",
      position: {
        en: "Technical Support and Developer",
        es: "Soporte Técnico y Desarrollador",
        ca: "Suport Tècnic i Desenvolupador"
      },
      period: "March 2012 - September 2016",
      technologies: ["PHP", "Yii", "MySQL"],
      categories: ["Backend"],
      description: {
        en: [
          "Implementation and technical support of Passportscan software.",
          "Development of web applications using PHP (Yii Framework) and MySQL databases."
        ],
        es: [
          "Implementación y soporte técnico del software Passportscan.",
          "Desarrollo de aplicaciones web utilizando PHP (Yii Framework) y bases de datos en MySQL."
        ],
        ca: [
          "Implementació i suport tècnic del programari Passportscan.",
          "Desenvolupament d'aplicacions web utilitzant PHP (Yii Framework) i bases de dades en MySQL."
        ]
      }
    }
  ],
  education: [
    {
      institution: "Universitat Politècnica de València (UPV)",
      degree: {
        en: "Technical Engineer in Computer Management",
        es: "Ingeniero Técnico en Informática de Gestión",
        ca: "Enginyer Tècnic en Informàtica de Gestió"
      },
      period: "2008 - 2013"
    },
    {
      institution: "Tongji University",
      degree: {
        en: "Software Engineering, Computer Science",
        es: "Ingeniería de Software, Ciencias de la Computación",
        ca: "Enginyeria de Software, Ciències de la Computació"
      },
      period: "2013"
    },
    {
      institution: "B2 English Certificate",
      degree: {
        en: "B2, English",
        es: "B2, Inglés",
        ca: "B2, Anglès"
      },
      period: "2011 - 2012"
    },
    {
      institution: "Politechnika Wrocławska / Wroclaw University of Technology",
      degree: {
        en: "Exchange Program",
        es: "Programa de intercambio",
        ca: "Programa d'intercanvi"
      },
      period: "2010 - 2011"
    },
    {
      institution: "IES Jaume II el Just",
      degree: {
        en: "Higher Technical Certificate in Computer Applications Development",
        es: "Técnico Superior en Desarrollo de Aplicaciones Informáticas",
        ca: "Tècnic Superior en Desenvolupament d'Aplicacions Informàtiques"
      },
      period: "2006 - 2008"
    }
  ]
};
