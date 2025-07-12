import {
  css,
  hmfm,
  hoverCss,
  hoverHtml,
  hoverJava,
  hoverJs,
  hoverNode,
  hoverSpring,
  html,
  java,
  js,
  node,
  react,
  reactLogo,
  thePower,
  ufr,
  vite,
  viteLogo,
  spring,
  mongo,
  hoverMongo,
  postgre,
  hoverPostgre,
  mysql,
  hoverMysql,
  git,
  hoverGit,
  angular,
  hoverAngular,
  tailwind,
  hoverTailwind,
  bootstrap,
  hoverBootstrap,
  docker,
  hoverDocker,
  express,
  hoverExpress,
  go,
  hoverGo,
  jenkins,
  hoverJenkins,
  linux,
  hoverLinux,
  figma,
  ts,
  hoverts,
  bfit,
  tc,
  reutlingen,
  villingen,
  overleaf,
  freelance,
  jira,
  postman,
  vscode,
  docs,
  sheets,
  slides,
  classroom,
  sibelius,
  musescore,
  dropbox,
  jupyter,
  pandas,
  numpy,
  zoom,
  sap,
  salesforce,
  puc
} from "../assets";

export const data = {
  name: "Rod Acevedo",
  address: "Löhrrstrasse 16, Villingen-Schwenningen DE",
  email: "raacevedof@gmail.com",
  avatar: "/images/portrait.png",
  aboutMe:
    "Hi! I'm Rodrigo, originally from Chile and educated in Germany, I got a strong background in music, physics, and philosophy with a new focus on web development. Former orchestral musician and research associate at the University of Freiburg, I bring into my work a mix of creativity, discipline, and analytical thinking. I enjoy classical music, reading and I'm always in for something sweet :D",
  education: [
    {
      degree: "Full-stack Master Program",
      university: "thePower - Prometeo School",
      startDate: "2024-09-01",
      endDate: "2026-05-01",
      honors: "",
      score: "",
      web: "https://www.google.com",
      img: thePower,
      relevantCourses: [
        {
          name: "Full-Stack Architecture",
          description:
            "Covers frontend-backend integration using modern JavaScript frameworks and APIs."
        },
        {
          name: "Modern Frontend Development",
          description:
            "Advanced component-based UI using React, Angular, and state management tools like Redux or Signals."
        },
        {
          name: "Advanced Back-End with Node.js",
          description:
            "Builds scalable APIs using Node.js, Express, MongoDB, authentication, authorization, and serverless functions."
        }
      ],
      skills: [
        "React",
        "Next.js",
        "Angular",
        "Node.js",
        "Express.js",
        "MongoDB",
        "NestJS",
        "TailwindCSS",
        "TypeScript",
        "REST APIs",
        "JWT Authentication",
        "Modern Deployment (Vercel/Render)"
      ]
    },
    {
      degree: "Web Development degree",
      university: "thePower - Prometeo School",
      startDate: "2024-09-01",
      endDate: "2026-05-01",
      honors: "",
      score: "",
      web: "https://www.google.com",
      img: thePower,
      relevantCourses: [
        {
          name: "Client-Server Web Architecture",
          description:
            "Introduction to HTTP, web servers, request/response lifecycle, and client-side rendering."
        },
        {
          name: "Databases and SQL",
          description:
            "Relational database concepts, schema design, and CRUD operations using SQL."
        },
        {
          name: "Programming Fundamentals",
          description:
            "Covers algorithmic logic, data structures, object-oriented programming, and PHP basics."
        },
        {
          name: "UML & Software Design",
          description:
            "Diagramming techniques for software planning: class diagrams, use cases, and sequence diagrams."
        }
      ],
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "PHP",
        "SQL",
        "MySQL",
        "OOP",
        "UML",
        "Client-Server Architecture",
        "Basic Git",
        "Responsive Design",
        "Linux/Command Line"
      ]
    },
    {
      degree: "Master-of-Science (M.Sc.) Physics",
      university: "Freiburg Universität",
      startDate: "2012-09-01",
      endDate: "2014-06-01",
      honors: "mit Auszeichnung",
      score: "1 (Highest grade)",
      web: "https://www.google.com",
      img: ufr,
      relevantCourses: [
        {
          name: "Quantum Mechanics II",
          description:
            "Advanced principles of wavefunctions, quantum states, and perturbation theory."
        },
        {
          name: "Computational Physics",
          description:
            "Focuses on numerical modeling, simulation algorithms, and data visualization."
        },
        {
          name: "Optoelectronics",
          description:
            "Applications of semiconductor physics in photonic devices."
        }
      ],
      skills: [
        "Scientific Computing",
        "MATLAB",
        "Python",
        "Numerical Methods",
        "Simulation Tools",
        "Data Analysis",
        "Technical Writing",
        "Experimental Design"
      ]
    },
    {
      degree: "Bachelor-of-Science (B.Sc.) Physik",
      university: "Freiburg Universität",
      startDate: "2008-09-01",
      endDate: "2012-06-01",
      honors: "mit Auszeichnung",
      score: "1 (Highest grade)",
      web: "https://www.google.com",
      img: ufr,
      relevantCourses: [
        {
          name: "Thermodynamics",
          description: "Studies heat, work, and laws of energy transformation."
        },
        {
          name: "Electrodynamics",
          description:
            "Electric and magnetic field theory and Maxwell’s equations."
        },
        {
          name: "Experimental Physics",
          description:
            "In-lab experience in measurements, uncertainty, and hypothesis testing."
        }
      ],
      skills: [
        "Classical Mechanics",
        "Electromagnetism",
        "Thermodynamics",
        "LaTeX",
        "Python (Basics)",
        "C/C++",
        "Data Acquisition",
        "Lab Equipment Handling"
      ]
    },
    {
      degree: "Bachelor-of-Music (B.Sc.) Musik",
      university: "Musikhochschule Freiburg",
      startDate: "2008-01-01",
      endDate: "2010-06-01",
      honors: "mit Auszeichnung",
      score: "1 (Highest grade)",
      web: "https://www.google.com",
      img: hmfm,
      relevantCourses: [
        {
          name: "Counterpoint and Harmony",
          description:
            "Deep dive into voice leading and harmonic progression techniques."
        },
        {
          name: "Conducting & Ensemble Leadership",
          description:
            "Practical experience with ensemble rehearsal and cueing."
        },
        {
          name: "Performance Practice",
          description:
            "Focus on historical context and interpretation for solo and group music."
        }
      ],
      skills: [
        "Music Composition",
        "Score Reading",
        "Ensemble Performance",
        "Aural Skills",
        "Notation Software (Sibelius, Finale)",
        "Music Analysis",
        "Orchestration"
      ]
    },
    {
      degree: "Bachelor of music",
      university: "U. Católica de Chile",
      startDate: "2005-03-01",
      endDate: "2007-12-20",
      honors: "Matrícula",
      score: "7 (Highest grade)",
      web: "https://www.google.com",
      img: puc,
      relevantCourses: [
        {
          name: "Fundamentals of Music Theory",
          description: "Introduction to scales, intervals, chords, and rhythm."
        },
        {
          name: "Western Music History",
          description:
            "Survey of major styles, composers, and movements from antiquity to the 20th century."
        },
        {
          name: "Orchestral Training",
          description:
            "Participation in ensemble work and development of group performance skills."
        }
      ],
      skills: [
        "Sight Reading",
        "Music Theory",
        "Solfege",
        "Harmony",
        "Musical Interpretation",
        "Instrument Technique",
        "Group Performance"
      ]
    }
  ],
  workExperience: [
    {
      organization: {
        title: "Self-employed",
        website: "https://google.com",
        image: freelance
      },
      position: "Freelance Web Developer",
      startDate: "2023",
      endDate: "present",
      location: "Remote",
      description:
        "As a freelance web developer, I work on custom web solutions for clients ranging from individuals to small businesses. I specialize in building scalable back-end systems and creating intuitive front-end user interfaces.",
      workPlaceMode: "Remote",
      responsabilities: [
        "Analyze client requirements and provide tailored technical solutions",
        "Develop scalable RESTful APIs and backend services",
        "Design responsive and accessible front-end interfaces",
        "Integrate third-party services and manage deployments"
      ],
      skills: ["CI/CD", "REST APIs", "SOLID", "Agile Development"],
      tools: [
        { name: "Figma", img: figma },
        { name: "VSCode", img: vscode },
        { name: "Postman", img: postman },
        { name: "Jira", img: jira }
      ]
    },
    {
      organization: {
        title: "Basic-Fit",
        website: "https://google.com",
        image: bfit
      },
      position: "Host",
      startDate: "2022",
      endDate: "present",
      location: "Jerez, ES",
      description:
        "As a gym host at Basic-Fit, I provide customer support, maintain a welcoming environment, and assist with operational needs, ensuring a high-quality fitness experience for all members.",
      workPlaceMode: "On-site",
      responsabilities: [
        "Greet members and provide information about services and memberships",
        "Provide clients with personalized training programs",
        "Assist with equipment maintenance and troubleshooting",
        "Manage client check-ins and handle feedback or issues"
      ],
      skills: [
        "Customer Service",
        "Teamwork",
        "Problem Solving",
        "Time Management",
        "Responsibility"
      ],
      tools: [
        { name: "Docs", img: docs },
        { name: "Sheets", img: sheets },
        { name: "SAP", img: sap },
        { name: "Salesforce", img: salesforce }
      ]
    },
    {
      organization: {
        title: "Tusclasesparticulares",
        website: "https://google.com",
        image: tc
      },
      position: "English/German Teacher",
      startDate: "2018",
      endDate: "2024",
      location: "Remote",
      description:
        "As a language tutor, I developed personalized lesson plans and provided one-on-one online instruction in English and German. I coached students towards specific exams preparation.",
      workPlaceMode: "Remote",
      responsabilities: [
        "Create custom lesson plans tailored according levels and goals",
        "Deliver engaging virtual lessons and language exercises",
        "Monitor student progress and adapt methods accordingly",
        "Prepare students for certifications and interviews"
      ],
      skills: [
        "Lesson Planning",
        "Online Teaching",
        "Communication",
        "Patience",
        "Adaptability"
      ],
      tools: [
        { name: "Classroom", img: classroom },
        { name: "Zoom", img: zoom },
        { name: "Docs", img: docs },
        { name: "Slides", img: slides }
      ]
    },
    {
      organization: {
        title: "Freiburg University",
        website: "https://google.com",
        image: ufr
      },
      position: "Associate Researcher",
      startDate: "2017",
      endDate: "2018",
      location: "Freiburg, DE",
      description:
        "I collaborated on an interdisciplinary academic project, focusing on data analysis, publication writing, and software tools for experimental research working closely with a team of professors and researchers.",
      workPlaceMode: "On-site",
      responsabilities: [
        "Assist in the design and execution of research experiments",
        "Collect, clean, and analyze data using statistical tools",
        "Collaborate in the writing and editing of scientific papers",
        "Develop and maintain internal research tools and scripts"
      ],
      skills: [
        "Data Analysis",
        "Python",
        "Scientific Research",
        "Problem Solving"
      ],
      tools: [
        { name: "Jupyter", img: jupyter },
        { name: "Pandas", img: pandas },
        { name: "Overleaf", img: overleaf },
        { name: "Numpy", img: numpy }
      ]
    },
    {
      organization: {
        title: "Reutlingen Orchester",
        website: "https://google.com",
        image: reutlingen
      },
      position: "Orchestra Member",
      startDate: "2014",
      endDate: "2017",
      location: "Reutlingen, DE",
      description:
        "As a member of the Reutlingen Orchestra, I participated in national and international performances, collaborating with conductors and fellow musicians to interpret classical and contemporary compositions.",
      workPlaceMode: "On-site",
      responsabilities: [
        "Participate in rehearsals and live performances",
        "Collaborate closely with section members and conductor",
        "Maintain high technical performance standards",
        "Study and prepare new scores independently"
      ],
      skills: [
        "Team Collaboration",
        "Musical Interpretation",
        "Discipline",
        "Sight Reading"
      ],
      tools: [
        { name: "Sibelius", img: sibelius },
        { name: "MuseScore", img: musescore },
        { name: "Docs", img: docs },
        { name: "Dropbox", img: dropbox }
      ]
    },
    {
      organization: {
        title: "Akademie Villingen",
        website: "https://google.com",
        image: villingen
      },
      position: "Music Teacher",
      startDate: "2011",
      endDate: "2018",
      location: "Villingen, DE",
      description:
        "As a music teacher, I provided individual and group lessons in classical instruments, focusing on both technical development and musical expression. I also prepared students for performances and exams.",
      workPlaceMode: "On-site",
      responsabilities: [
        "Plan and deliver structured lessons to students of all ages",
        "Adapt teaching methods to individual learning styles",
        "Prepare students for recitals, exams, and competitions",
        "Evaluate student progress and provide feedback"
      ],
      skills: [
        "Teaching",
        "Music Theory",
        "Instrumental Technique",
        "Patience",
        "Mentoring"
      ],
      tools: [
        { name: "Sibelius", img: sibelius },
        { name: "Classroom", img: classroom },
        { name: "Docs", img: docs },
        { name: "Slides", img: slides }
      ]
    }
  ],
  tech: [
    {
      name: "HTML5",
      img: html,
      hoverImg: hoverHtml,
      learning: false
    },
    {
      name: "CSS3",
      img: css,
      hoverImg: hoverCss,
      learning: false
    },
    {
      name: "JavaScript",
      img: js,
      hoverImg: hoverJs,
      learning: false
    },
    {
      name: "React",
      img: react,
      hoverImg: reactLogo,
      learning: false
    },
    {
      name: "TypeScript",
      img: ts,
      hoverImg: hoverts,
      learning: false
    },
    {
      name: "Java",
      img: java,
      hoverImg: hoverJava,
      learning: false
    },
    {
      name: "Spring",
      img: spring,
      hoverImg: hoverSpring,
      learning: false
    },
    {
      name: "Node",
      img: node,
      hoverImg: hoverNode,
      learning: false
    },
    {
      name: "Vite",
      img: vite,
      hoverImg: viteLogo,
      learning: false
    },
    {
      name: "MongoDB",
      img: mongo,
      hoverImg: hoverMongo,
      learning: false
    },
    {
      name: "Postgre",
      img: postgre,
      hoverImg: hoverPostgre,
      learning: false
    },
    {
      name: "MySql",
      img: mysql,
      hoverImg: hoverMysql,
      learning: false
    },
    {
      name: "Git",
      img: git,
      hoverImg: hoverGit,
      learning: false
    },
    {
      name: "Tailwind",
      img: tailwind,
      hoverImg: hoverTailwind,
      learning: false
    },
    {
      name: "Angular",
      img: angular,
      hoverImg: hoverAngular,
      learning: true
    },
    {
      name: "Bootstrap",
      img: bootstrap,
      hoverImg: hoverBootstrap,
      learning: true
    },
    {
      name: "Go",
      img: go,
      hoverImg: hoverGo,
      learning: true
    },
    {
      name: "Jenkins",
      img: jenkins,
      hoverImg: hoverJenkins,
      learning: true
    },
    {
      name: "Docker",
      img: docker,
      hoverImg: hoverDocker,
      learning: false
    },
    {
      name: "express",
      img: express,
      hoverImg: hoverExpress,
      learning: false
    },
    {
      name: "Linux",
      img: linux,
      hoverImg: hoverLinux,
      learning: false
    }
  ],
  langs: ["English", "German", "French", "Japanese", "Spanish"]
};
