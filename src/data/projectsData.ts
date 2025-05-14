
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
  githubUrl: string;
  demoUrl: string;
  reverse?: boolean;
}

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: {
      en: "E-commerce Platform",
      es: "Plataforma E-commerce",
      ca: "Plataforma E-commerce"
    },
    description: {
      en: "A full-featured e-commerce platform with user authentication, product catalog, shopping cart, payment processing, and order management.",
      es: "Una plataforma de comercio electrónico completa con autenticación de usuarios, catálogo de productos, carrito de compras, procesamiento de pagos y gestión de pedidos.",
      ca: "Una plataforma de comerç electrònic completa amb autenticació d'usuaris, catàleg de productes, carret de compres, processament de pagaments i gestió de comandes."
    },
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com"
  },
  {
    id: "taskmanager",
    title: {
      en: "Task Management System",
      es: "Sistema de Gestión de Tareas",
      ca: "Sistema de Gestió de Tasques"
    },
    description: {
      en: "A collaborative project management tool featuring drag-and-drop task boards, real-time updates, user roles, and detailed analytics.",
      es: "Una herramienta colaborativa de gestión de proyectos con tableros de tareas arrastrables, actualizaciones en tiempo real, roles de usuario y análisis detallados.",
      ca: "Una eina col·laborativa de gestió de projectes amb taulers de tasques arrossegables, actualitzacions en temps real, rols d'usuari i anàlisis detallades."
    },
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind", "Socket.io"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    reverse: true
  },
  {
    id: "finance",
    title: {
      en: "Finance Dashboard",
      es: "Dashboard Financiero",
      ca: "Dashboard Financer"
    },
    description: {
      en: "Interactive financial data visualization dashboard with real-time market data, customizable widgets, and predictive analytics.",
      es: "Dashboard interactivo de visualización de datos financieros con datos de mercado en tiempo real, widgets personalizables y análisis predictivo.",
      ca: "Dashboard interactiu de visualització de dades financeres amb dades de mercat en temps real, widgets personalitzables i anàlisi predictiu."
    },
    tags: ["React", "D3.js", "Express", "GraphQL", "AWS"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com"
  }
];
