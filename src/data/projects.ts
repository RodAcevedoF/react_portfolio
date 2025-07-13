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
    description: "projects.getdone.description",
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
    description: "projects.todo_api.description",
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
    description: "project.fender.description",
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
    description: "project.angrboda.description",
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
    description: "project.contacts_xml.description",
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
    description: "project.pinterest.description",
    tech: [
      { name: "html", icon: hoverHtml },
      { name: "css", icon: hoverCss },
      { name: "js", icon: hoverJs }
    ]
  }
];
