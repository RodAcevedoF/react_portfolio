import {
  angrbodaBg,
  angrbodaLogo,
  fenderBackBg,
  fenderBg,
  fenderLogo,
  pinterestBg,
  pinterestLogo,
  hoverHtml,
  hoverCss,
  hoverJs,
  getDoneLogo,
  getDoneBg,
  getDoneBackBg,
  todoApiLogo,
  todoApiBg,
  todoApiBackBg,
  angrbodaBackBg,
  contactBackBg,
  contactBack,
  contactLogo,
  pinterestBackBg,
  hoverJava,
  thymeLeaf,
  hoverSpring,
  hoverNode,
  hoverBootstrap,
  hoverDocker,
  hoverExpress
} from "../assets";

export const projects = [
  {
    name: "getdone",
    logo: getDoneLogo,
    bgImage: getDoneBg,
    color: "#38761d",
    url: "https://github.com/RodAcevedoF/project5",
    deploy: "https://getdone.vercel.app",
    backImg: getDoneBackBg,
    description:
      "GetDone is a productivity web app combining a todo list with book and video management, user profiles, weather updates, and authentication. It features a custom mini-router and a global state management system, both developed from scratch.",
    tech: [
      { name: "html", icon: hoverHtml },
      { name: "css", icon: hoverCss },
      { name: "js", icon: hoverJs }
    ]
  },
  {
    name: "todo_api",
    logo: todoApiLogo,
    bgImage: todoApiBg,
    color: "#edbc27",
    url: "https://github.com/RodAcevedoF/todo_api",
    deploy: "https://getdone.vercel.app",
    backImg: todoApiBackBg,
    description:
      "A RESTful API built with Express and PostgreSQL, allowing users to authenticate and manage tasks, books, and videos. Includes JWT authentication with refresh tokens, file uploads (Multer), Swagger documentation, and is Docker-ready",
    tech: [
      { name: "node", icon: hoverNode },
      { name: "express", icon: hoverExpress },
      { name: "docker", icon: hoverDocker }
    ]
  },
  {
    name: "fender",
    logo: fenderLogo,
    bgImage: fenderBg,
    color: "#af0c00",
    url: "https://github.com/RodAcevedoF/proyecto1",
    deploy: "https://proyecto1-peach-theta.vercel.app/",
    backImg: fenderBackBg,
    description:
      "Visually engaging landing page concept for Fender, crafted solely with HTML, CSS and JS. It emphasizes structured layout — using flex and grid systems and typography hierarchy to evoke the brand’s iconic rock identity.",
    tech: [
      { name: "html", icon: hoverHtml },
      { name: "css", icon: hoverCss },
      { name: "js", icon: hoverJs }
    ]
  },
  {
    name: "angrboda",
    logo: angrbodaLogo,
    bgImage: angrbodaBg,
    color: "#009fb0",
    url: "https://github.com/RodAcevedoF/entrega_practica_DOM",
    deploy: "https://dom-practice-blue.vercel.app/",
    backImg: angrbodaBackBg,
    description:
      "Angrboda is an e-commerce UI prototype built with HTML, CSS, and JavaScript, focused on DOM manipulation. It features interactive product listings and smooth UI transitions — all achieved without external frameworks",
    tech: [
      { name: "html", icon: hoverHtml },
      { name: "css", icon: hoverCss },
      { name: "js", icon: hoverJs }
    ]
  },
  {
    name: "contacts_xml",
    logo: contactLogo,
    bgImage: contactBack,
    color: "#5a409d",
    url: "https:github.com/RodAcevedoF/ContactsXML",
    deploy: "https://github.com/RodAcevedoF/ContactsXML",
    backImg: contactBackBg,
    description:
      "This is a modern web app built with Spring Boot, Thymeleaf, and Bootstrap for managing contacts. It supports XML import/export and integrates Jakarta EE standards for robust backend architecture.",
    tech: [
      { name: "spring", icon: hoverSpring },
      { name: "thymeleaf", icon: thymeLeaf },
      { name: "java", icon: hoverJava },
      { name: "html", icon: hoverHtml },
      { name: "bootstrapp", icon: hoverBootstrap }
    ]
  },
  {
    name: "pinterest",
    logo: pinterestLogo,
    bgImage: pinterestBg,
    color: "#da9393",
    url: "https://github.com/RodAcevedoF/proyecto3",
    deploy: "https://proyecto3-pinterest.vercel.app/",
    backImg: pinterestBackBg,
    description:
      "This is a dynamic image gallery web app inspired by Pinterest, built with HTML, CSS, and JavaScript. It focuses on API consumption to fetch media content and implements client-side pagination for seamless browsing",
    tech: [
      { name: "html", icon: hoverHtml },
      { name: "css", icon: hoverCss },
      { name: "js", icon: hoverJs }
    ]
  }
];
