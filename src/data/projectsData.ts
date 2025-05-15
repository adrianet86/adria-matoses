import { Language } from '../languages';

interface Project {
  id: string;
  title: {
    [key in Language]: string;
  };
  description: {
    [key in Language]: string;
  };
  tags: string[];
  image: string;
  demoUrl: string;
  hideDemoLink?: boolean;
}

export const projects: Project[] = [
  {
    id: "eezeh",
    title: {
      en: "eezeh",
      es: "eezeh",
      ca: "eezeh"
    },
    description: {
      en: "Staff management application and scheduler designed for event organization companies or those requiring personnel organization in production lines.",
      es: "Aplicación de gestión de personal y planificador de horarios, diseñada para empresas de organización de eventos o aquellas que requieren organizar personal en líneas de producción.",
      ca: "Aplicació de gestió de personal i planificador d'horaris, dissenyada per a empreses d'organització d'esdeveniments o aquelles que requereixen organizer personal en línies de producció."
    },
    tags: ["TypeScript", "NestJS", "SvelteKit", "AWS Fargate", "GitLab", "MongoDB"],
    image: "/img/eezeh-blur.png",
    demoUrl: "https://eezeh.xyz",
    hideDemoLink: true
  },
  {
    id: "mazafatas",
    title: {
      en: "mazafatas.com",
      es: "mazafatas.com",
      ca: "mazafatas.com"
    },
    description: {
      en: "Corporate website for a hostess company, written in Hugo Server. Excellent organic search engine rankings thanks to technical and content optimization. Lightweight and fast design focused on user experience.",
      es: "Página web corporativa para una empresa de azafatas, escrita en Hugo Server. Excelente posicionamiento orgánico en motores de búsqueda gracias a una optimización técnica y de contenido. Diseño ligero y rápido, enfocado en la experiencia del usuario.",
      ca: "Pàgina web corporativa per a una empresa d'hostesses, escrita en Hugo Server. Excel·lent posicionament orgànic en motors de cerca gràcies a una optimització tècnica i de contingut. Disseny lleuger i ràpid, enfocat en l'experiència de l'usuari."
    },
    tags: ["Hugo", "SEO", "Static Site", "Performance"],
    image: "/img/mazafatas.png",
    demoUrl: "https://www.mazafatas.com"
  },
  {
    id: "articrefrigeracio",
    title: {
      en: "articrefrigeracio.es",
      es: "articrefrigeracio.es",
      ca: "articrefrigeracio.es"
    },
    description: {
      en: "Corporate website for a refrigeration company, developed with Hugo Server. Fast and mobile-optimized website with a professional interface tailored to the client's needs.",
      es: "Web corporativa para una empresa de refrigeración, desarrollada con Hugo Server. Página web rápida y optimizada para dispositivos móviles con una interfaz profesional y adaptada a las necesidades del cliente.",
      ca: "Web corporativa per a una empresa de refrigeració, desenvolupada amb Hugo Server. Pàgina web ràpida i optimitzada per a dispositius mòbils amb una interfície professional i adaptada a les necessitats del client."
    },
    tags: ["Hugo", "Responsive Design", "Web Design"],
    image: "/img/artic.png",
    demoUrl: "https://articrefrigeracio.es"
  },
  {
    id: "festivalguitarra",
    title: {
      en: "Gandia International Guitar Festival",
      es: "Festival Internacional de Guitarra de Gandía",
      ca: "Festival Internacional de Guitarra de Gandia"
    },
    description: {
      en: "Official website of the festival, designed to promote cultural events and facilitate registration and information consultation.",
      es: "Página web oficial del festival, diseñada para promocionar eventos culturales y facilitar la inscripción y consulta de información.",
      ca: "Pàgina web oficial del festival, dissenyada per promocionar esdeveniments culturals i facilitar la inscripció i consulta d'informació."
    },
    tags: ["Web Development", "Events", "Culture"],
    image: "/img/festival.png",
    demoUrl: "https://www.festivalguitarragandia.com"
  }
];
