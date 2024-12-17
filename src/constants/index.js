import {
  mobile,
  backend,
  creator,
  web,
  html,
  javascript,
  health,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  nextjs,
  php,
  sql,
  python,
  c,
  threejs,
  meta,
  starbucks,
  tesla,
  shopify,
  eshop,
  spotifyClone,
  Apollo11,
  trust,
  chatgpt,
  fcbani,
  flapi,
  todo,
  bible,
  h2o,
  kiko,
  kemax,
  srdcomitelom,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About me",
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UX/UI Designer",
    icon: creator,
  },
  {
    title: "Web analyst",
    icon: mobile,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  { name: "next js", icon: nextjs },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  { name: "php", icon: php },
  { name: "python", icon: python },
  { name: "c", icon: c },
  { name: "sql", icon: sql },

  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Srdcom i telom",
    description:
      "Slovak e-shop offering stylish and functional t-shirts with Christian and fitness motifs. Combining faith and fitness, our designs allow you to express your values ​​while embracing an active lifestyle - Where the heart and body come together as one.",
    tags: [
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: srdcomitelom,
    source_website: ["srdcomitelom.store"],
    for: "company",
  },

  {
    name: "Trust",
    description:
      "A website called Trust will help you build trust in friends, family, in yourself and most importantly in God. Being able to pray, read plans or communicate with people will get you on the right path.",
    tags: [
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: trust,
    source_code_link: "https://github.com/YaroSK26/trust",
    source_website: ["trust-god.vercel.app"],
    for: "myself",
  },
  {
    name: "Apollo 11",
    description:
      "This page is dedicated to the Apollo 11 mission, the first successful human landing on the Moon.  it  is an excellent resource for space enthusiasts and history aficionados alike.",
    tags: [
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: Apollo11,
    source_code_link: "https://github.com/YaroSK26/Apollo11",
    source_website: ["mission-apollo11.vercel.app"],
    for: "myself",
  },
  {
    name: "E-commerce",
    description:
      "This page is an imitation of e-commerce where customers can add products to their cart, add product to their wishlist, etc. All functions are controlled from the admin dashboard and can be changed easily.",
    tags: [
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: eshop,
    source_code_link:
      "https://github.com/YaroSK26/eshop-nextjs-tailwind-mongoDB-react-front",
    source_website: ["eshop-front-jaxo.vercel.app"],
    for: "myself",
  },
  {
    name: "Spotify-clone",
    description:
      "Add songs to this website and enjoy listening to your own  tracks or songs that have been added by other people. You can change the volume of songs, change song to next or stop them completely.",
    tags: [
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: spotifyClone,
    source_code_link: "https://github.com/YaroSK26/spotify-clone",
    source_website: ["spotify-clone-jaxo.vercel.app"],
    for: "myself",
  },
  {
    name: "Kemax",
    description:
      "page for the company kemax. A company with more than 20 years of tradition in the production of sheet metal products. The company specializes in the production of high-quality sheet metal components for various industries.",
    tags: [
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: kemax,
    source_code_link: "https://github.com/YaroSK26/kemax",
    source_website: ["kemax.sk"],
    for: "company",
  },
  {
    name: "H2o Systems",
    description:
      "Website for a company engaged in the production, sale and service of water treatment systems of the highest quality.   They place great emphasis on expertise and the quality of their supplied equipment.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: h2o,
    source_code_link: "https://github.com/YaroSK26/h2o-systems",
    source_website: ["h2osystems.tech"],
    for: "company",
  },
  {
    name: "Bible Story",
    description:
      "Bible Story: Journey of Faith is an platform that explores the key events and figures of the Bible. From the creation of the world to the life of Jesus Christ. Perfect for learning, inspiration, and deepening faith.",
    tags: [
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: bible,
    source_code_link:
      "https://github.com/YaroSK26/Bible-Story-Journey-of-Faith",
    source_website: ["bible-story.vercel.app"],
    for: "myself",
  },
  {
    name: "Felix Gray portfolio",
    description:
      "Creation of a website – portfolio for a young writer and photographer. On the site, you will find his work, a gallery of his photos, and probably also some inspiration for your daily life.",
    tags: [
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: kiko,
    source_website: ["felixgray.eu"],
    for: "company",
  },

  {
    name: "Healthity",
    description:
      "App that will make you fit. Bmi, water checker or food tracker will convince you of the power of web technologies! Record your data and track your progress.Discover the power of Healthity. ",
    tags: [
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: health,
    source_code_link: "https://github.com/YaroSK26/Healthity",
    source_website: ["healthity.vercel.app"],
    for: "myself",
  },

  // {
  //   name: "AI Platform",
  //   description:
  //     "On this  beatiful AI page you can generate text, images, videos, music and code! There are 5 free generations waiting for you  but  also you can pay for an upgrade for unlimited generations. ",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "prisma",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: chatgpt,
  //   source_code_link: "https://github.com/YaroSK26/AI-Platform-Next",
  //   source_website: ["ai-platform-jaxo.vercel.app"],
  // },
  {
    name: "FC Bäni",
    description:
      "FC Bäni's imaginary football page can enchant you and bring you back to your passion for football. Rich history, experienced players and a huge community of fans will literally make you happier.",
    tags: [
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: fcbani,
    source_code_link: "https://github.com/YaroSK26/FC-Bani-Next",
    source_website: ["fcbani.eu"],
    for: "myself",
  },

  {
    name: "Flappi",
    description:
      "This game called Flappi is a funny imitation of the famous Flappy bird game. Game also has a Hungarian version and many other features! To play, download the dist folder from the link or run the flappi.py file.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: flapi,
    source_code_link: "https://github.com/YaroSK26/Flappy-Bird-UDP",
    source_website: ["bit.ly/3tCnXoS"],
    for: "myself",
  },
  {
    name: "Student Management",
    description:
      "This project is a basic to-do website developed using the Java framework Spring Boot, with data stored in an SQL database. To run the application, start both the frontend and backend projects.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "spring_boot",
        color: "green-text-gradient",
      },
      {
        name: "mySQL",
        color: "orange-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/YaroSK26/springBoot-react-todo",
    source_website: ["bit.ly/3WzkD8x"],
    for: "myself",  
  },
];

export { services, technologies, experiences, testimonials, projects };
