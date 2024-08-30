export interface IProject {
  name: string;
  image: string;
  repository: string;
  deploy: string;
  description: string;
  stack: string[];
  status: "Activo" | "En Pausa" | "Finalizado";
}

export const projects: IProject[] = [
  {
    name: "Quiz de Fútbol",
    image: "nextjs-zustand-quiz.png",
    repository: "https://github.com/dejeloper/nextjs-zustand-quiz",
    deploy: "https://nextjs-zustand-quiz.vercel.app",
    description:
      "Juego de preguntas y respuestas sobre fútbol en el que los usuarios pueden poner a prueba sus conocimientos futbolísticos.",
    stack: ["HTML", "TailwindCSS", "Typescript", "Next Js", "Zustand"],
    status: "Finalizado",
  },
  {
    name: "Búsqueda de Películas",
    image: "busqueda-peliculas.png",
    repository: "busqueda-peliculas",
    deploy: "https://busqueda-peliculas.vercel.app",
    description:
      "Aplicación para buscar y explorar películas utilizando una API pública. Permite a los usuarios buscar títulos, obtener detalles de películas y ver sus imágenes promocionales.",
    stack: ["HTML", "CSS", "Javascript", "React Js", "Vite"],
    status: "Finalizado",
  },
  {
    name: "Paycommerce",
    image: "paycommerce.png",
    repository: "https://github.com/dejeloper/paycommerce",
    deploy: "https://paycommerce.vercel.app/products",
    description:
      "Plataforma de comercio electrónico que facilita la gestión de productos y pagos en línea. Integrada con Stripe para procesar pagos de manera segura.",
    stack: ["HTML", "TailwindCSS", "TypeScript", "Angular", "Stripe"],
    status: "Finalizado",
  },
  {
    name: "Ziel",
    image: "ziel-mvp.png",
    repository: "https://github.com/dejeloper/ziel-mvp",
    deploy: "https://ziel-mvp.vercel.app/home",
    description:
      "Aplicación orientada a la gestión de metas y objetivos. Permite a los usuarios definir, seguir y completar objetivos a través de un panel de control sencillo e intuitivo.",
    stack: ["HTML", "TailwindCSS", "Typescript", "Next Js"],
    status: "En Pausa",
  },
  {
    name: "Opplanner",
    image: "opplanner.png",
    repository: "opplanner",
    deploy: "https://opplanner-dejeloper.vercel.app",
    description:
      "Herramienta de planificación y organización de tareas que permite a los usuarios crear, editar y gestionar sus planes diarios o de proyectos de manera efectiva.",
    stack: ["HTML", "TailwindCSS", "TypeScript", "React Js", "Vite", "Zustand"],
    status: "En Pausa",
  },
  {
    name: "POS General",
    image: "POS.png",
    repository: "https://github.com/dejeloper/POS",
    deploy: "https://pos-general.vercel.app/home",
    description:
      "Sistema de punto de venta (POS) diseñado para pequeñas y medianas empresas que facilita la gestión de ventas, inventarios y clientes.",
    stack: ["HTML", "TailwindCSS", "Typescript", "Next Js", "Zustand"],
    status: "Activo",
  },
];
