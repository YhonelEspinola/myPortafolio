import { desc } from "framer-motion/client";
import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Rss,
  Computer,
  Speech,
  Github,
  Instagram,
  Facebook,
  Play,
  Gamepad,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/osmer-yhonel-b70819184/",
  },
  {
    id: 2,
    logo: <Rss size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 3,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/YhonelEspinola",
  },
  {
    id: 4,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/yhonelespinola/",
  },
  {
    id: 5,
    logo: <Facebook size={30} strokeWidth={1} />,
    src: "https://www.facebook.com/YhonelEspinola",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Game",
    icon: <Gamepad size={25} color="#fff" strokeWidth={1} />,
    link: "/game",
  },
  {
    id: 2,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/intro",
  },
  {
    id: 3,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 4,
    title: "Book",
    icon: <Computer size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 5,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 6,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/contactame",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title:
      "Participé en mi primer concurso relacionado con aplicaciones móviles.",
    subtitle: "Empresa NTT Data",
    description:
      "Comparti una experiencia unica en esta empresa ya que nos pidieron proponer un prototipo de aplicacion movil para resolver una problematica de mi ciudad, fue una gran oportunidad ya que pude compartir con demas alumnos de otras universides e institos lo que me permitió enriquecer mis conocimientos, intercambiar ideas y fortalecer mis habilidades blandas.",
    date: "Nov 2024",
    imageUrl: "/certi.png",
  },
  {
    id: 2,
    title: "Descrubro el mundo maravilloso del desarrolo movil, android.",
    subtitle: "Curso de desarrollo de aplicaciones móviles en Android Studio",
    description:
      "Aprendi a desarrollar aplicaciones móviles nativas para Android utilizando Kotlin, Firebase y Android Studio. Fue un curso muy bonito en el cual aprendi todo lo necesario para empezar a desarrollar aplicaciones moviles, las habilidades que gane las puse en practica en diferentes proyectos.",
    date: "Mar 2024",
    imageUrl: "/go.png",
  },
  {
    id: 3,
    title: "Descubro el mundo de los microservicios",
    subtitle: "Curso de microservicios en Java Spring Boot",
    description:
      "Aprendi a desarrollar aplicaciones escalables y fáciles de mantener utilizando microservicios en Java Spring Boot.",
    date: "sept 2023",
    imageUrl: "/ww.png",
  },
  {
    id: 4,
    title: "Empiezo mi carrera profesional",
    subtitle: "Computacion e informatica",
    description:
      "Descubro el mundo maravilloso de la tecnologia y la informatica, desde que lo descubri me apasiono la programacion y el desarrollo web, por eso decido estudiar la carrera tecnica.",
    date: "Mar 2022",
    imageUrl: "/compu.png",
  },
];

export const serviceData = [
  {
    image: "/ko.png",
    title: "Kotlin",
    description:
      "Desarrollo de aplicaciones móviles nativas para Android utilizando Kotlin.",
  },
  {
    image: "/icon-spring-boot.svg",
    title: "Spring Boot",
    description:
      "Desarrollo de APIs y microservicios utilizando Java Spring Boot.",
  },
  {
    image: "/icon-java.svg",
    title: "Java",
    description:
      "Desarrollo de aplicaciones de escritorio y web utilizando Java.",
  },

  {
    image: "/icon-sql-server.svg",
    title: "SQL Server",
    description:
      "Diseño y administración de bases de datos utilizando SQL Server.",
  },
  {
    image: "/icon-my-sql.svg",
    title: "MySql",
    description: "Diseño y administración de bases de datos utilizando MySql.",
  },
  {
    image: "/mongodb.png",
    title: "MongoDB",
    description:
      "Diseño y administración de bases de datos utilizando MongoDB.",
  },
  {
    image: "/icon-react.svg",
    title: "React",
    description:
      " Desarrollo de aplicaciones web utilizando React, Next.js y Tailwind CSS.",
  },
  {
    image: "/icon-postman.svg",
    title: "Postman",
    description:
      "Pruebas de integración y documentación de APIs utilizando Postman.",
  },

  {
    image: "/icon-git.svg",
    title: "Git",
    description:
      "Control de versiones y colaboración en proyectos utilizando Git.",
  },
  {
    image: "/icon-github.svg",
    title: "GitHub",
    description:
      "Gestión de repositorios y colaboración en proyectos utilizando GitHub.",
  },
  {
    image: "/icon-html.svg",
    title: "Html",
    description: "Desarrollo de sitios web utilizando HTML.",
  },
  {
    image: "/icon-css.svg",
    title: "Css",
    description: " Diseño y estilización de sitios web utilizando CSS.",
  },
  {
    image: "/icon-javascript.svg",
    title: "JavaScript",
    description:
      "Desarrollo de aplicaciones web interactivas utilizando JavaScript.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Aplicación móvil para Comercial Zabaleta",
    description:
      "Aplicación móvil para Android, desarrollada en equipo como proyecto académico para la tienda Comercial Zavaleta",
    image: "/inicioApp.jpg",
    urlGithub: "https://github.com/YhonelEspinola/appmobile",
  },
  {
    id: 2,
    title: "Aplicación móvil de recetas de cocina",
    description:
      "Aplicación móvil para Android, el cual permite a los usuarios buscar recetas de cocina y guardar sus favoritas. Ademas de publicar sus propias recetas.",
    image: "/appRecetas.jpg",
    urlGithub: "https://github.com/YhonelEspinola/recetasApp",
  },
  {
    id: 3,
    title: "Aplicación móvil de Eventos para Cibertec",
    description:
      "Aplicación móvil para Android, desarrollada en equipo como proyecto académico para el instito Cibertec",
    image: "/eventosApp.jpg",
    urlGithub: "https://github.com/YhonelEspinola/eventosApp",
  },
  {
    id: 4,
    title: "Aplicación móvil TodoList",
    description:
      "Aplicación móvil para Android, desarrollada en equipo como proyecto académico, la aplicacion permite a los usuarios registrar un proyecto y asignar tareas a los miembros invitados por medio de un correo ",
    image: "/appTodoList.jpg",
    urlGithub: "https://github.com/YhonelEspinola/appTodoList_",
  },
  {
    id: 5,
    title: "Aplicación móvil de NotiFlash",
    description:
      "Aplicación móvil para Android, esta app permite a los usuarios registrar noticias al instante y compartirlas con todos los usuarios de la app",
    image: "/notiFlash.jpg",
    urlGithub: "https://github.com/YhonelEspinola/eventosApp",
  },
];

export const dataPerfil = [
  {
    id: 1,
    name: "Osmer Yhonel Espinola Narcizo",
    description:
      "Actualmente, estoy en búsqueda de oportunidades laborales. Si consideras que mis habilidades y experiencia pueden aportar valor a tu equipo, estaré encantado de sumarte a tu equipo de trabajo. No dudes en contactarme.",
    imageUrl: "/perfilY.png",
    correo: "osmeryhonel890@gmail.com",
    UrlCv: "CV Espinola Narcizo.pdf",
  },
];
