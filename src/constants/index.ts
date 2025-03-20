import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    andela,
    free,
    web_,
    ecomm,
    app_
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer & React Native Developer",
      company_name: "Andela",
      icon: andela,
      iconBg: "#383E56",
      date: "July 2024 - December 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Developed mobile applications using React Native.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "Self Employed",
      icon: free,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Worked with clients to develop web applications using React.js and other related technologies.",
        "Helped clients design UI and develop mobile applications using React Native.",
        "Collaborated with clients to create high-quality products and ensure cross-browser compatibility.",
        "Provided constructive feedback to clients on code reviews and ensured best practices were followed.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "./assets/Images/AdobeStock_285983137_Preview.jpeg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "./assets/Images/AdobeStock_376478182_Preview.jpeg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "./assets/Images/AdobeStock_290888731_Preview.jpeg",
    },
  ];
  
  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "A feature-rich e-commerce web application that allows users to browse products, manage their shopping cart, and complete secure transactions. The platform includes admin dashboard to manage inventory, orders and customer data, built using modern technologies for smooth user experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: ecomm,
      source_code_link: "https://github.com/",
    },
    {
      name: "Pulse Web",
      description:
        "Pulse is a platform designed to handle ratings for companies in the Ed-tech industry, with its first paying customer being Andela. The web part of the platform is under development using modern technologies that prioritize speed and security, with ReactJS used for building the frontend.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Web Development",
          color: "pink-text-gradient",
        },
      ],
      image: web_,
      source_code_link: "https://github.com/",
    },
    {
      name: "ATLP Pulse Mobile Application",
      description:
        "Pulse is a platform designed to handle ratings for trainees in companies with various programs. The mobile version is currently under development, using React Native to create cross-platform mobile applications that prioritize speed, security, and a seamless user experience.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Mobile Development",
          color: "green-text-gradient",
        },
        {
          name: "Cross-Platform",
          color: "pink-text-gradient",
        },
      ],
      image: app_,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };