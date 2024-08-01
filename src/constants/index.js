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
  prisma,
  python,
  supabase,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UX/UI Designer",
    icon: creator,
  },
  {
    title: "Web analyst",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
  { name: "supabase", icon: supabase },
  { name: "prisma", icon: prisma },

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
    name: "E-commerce",
    description:
      "This page is an imitation of e-commerce where customers can add products to their cart, add product to their wishlist, etc. All functions are controlled from the admin dashboard and can be changed easily.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eshop,
    source_code_link:
      "https://github.com/YaroSK26/eshop-nextjs-tailwind-mongoDB-react-front",
    source_website: ["eshop-front-jaxo.vercel.app"],
  },
  {
    name: "Trust",
    description:
      "A website called Trust will help you build trust in friends, family, in yourself and most importantly in God. Being able to pray, read plans or communicate with people will get you on the right path.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: trust,
    source_code_link: "https://github.com/YaroSK26/trust",
    source_website: ["trust-god.vercel.app"],
  },
  {
    name: "Apollo 11",
    description:
      "This page is dedicated to the Apollo 11 mission, the first successful human landing on the Moon.  it  is an excellent resource for space enthusiasts and history aficionados alike.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Apollo11,
    source_code_link: "https://github.com/YaroSK26/Apollo11",
    source_website: ["mission-apollo11.vercel.app"],
  },
  {
    name: "Spotify-clone",
    description:
      "Add songs to this website and enjoy listening to your own  tracks or songs that have been added by other people. You can change the volume of songs, change song to next or stop them completely.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: spotifyClone,
    source_code_link: "https://github.com/YaroSK26/spotify-clone",
    source_website: ["spotify-clone-jaxo.vercel.app"],
  },
  {
    name: "Healthity",
    description:
      "App that will make you fit. Bmi, water checker or food tracker will convince you of the power of web technologies! Record your data and track your progress.Discover the power of Healthity. ",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: health,
    source_code_link: "https://github.com/YaroSK26/Healthity",
    source_website: ["healthity.vercel.app"],
  },
  {
    name: "FC Bäni",
    description:
      "FC Bäni's imaginary football page can enchant you and bring you back to your passion for football. Rich history, experienced players and a huge community of fans will literally make you happier.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fcbani,
    source_code_link: "https://github.com/YaroSK26/FC-Bani-Next",
    source_website: ["fcbani.eu"],
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
  },
];

export { services, technologies, experiences, testimonials, projects };
