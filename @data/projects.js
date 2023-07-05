const TECH = [
  "next",
  "react",
  "tailwind",
  "mantine",
  "javascript",
  "jquery",
  "html",
  "css",
  "styled-components",
  "supabase",
  "typescript",
  "node",
  "NextJS",
];

export const projects = [
  {
    display: true,
    slug: "neuws",
    title: "Neuws",
    description:
      "Neuws is a personalized news app that allows users to control their news intake. It's a full app suite with a web app, iOS & Android app and browser extension. This project is built with Next.js, Expo, Tailwind, TypeScript, Supabase, Node.js and Railway. It covers a wide range of key demonstratable abilities for a full stack application such as authentication, database management, API usage, mobile development, web development, testing and deployment.",
    tech: [
      "react",
      "expo",
      "typescript",
      "tailwind",
      "supabase",
      "node",
      "railway",
    ],
    link: "https://neuws.app",
    image: "./Neuws-Personalized-News.png",
    code: false,
  },
  {
    display: true,
    slug: "portfolio-v2",
    title: "Portfolio v2",
    description:
      "This is my current portfolio website. It's built with Next.js, Tailwind CSS and TypeScript as well as utilizing third party APIs such as GitHub and Spotify.",
    tech: ["next", "tailwind", "typescript"],
    link: "/",
    image: "https://picsum.photos/1600/900",
    code: "https://github.com/premiare/braydenbarter.dev",
  },
  {
    display: true,
    slug: "wordle",
    title: "Wordle Clone",
    description:
      "A very basic Wordle clone to see if I could see the logic of the real Wordle and recreate that. Very minimal outside aid (Google, StackOverflow, viewing other Wordle projects) besides a long array of valid words.",
    image: "https://picsum.photos/1600/900",
    link: "https://wordle-xi-drab.vercel.app/",
    code: "https://github.com/premiare/wordle",
    tech: ["react", "javascript", "tailwind"],
  },
  {
    display: false,
    slug: "snowkay",
    title: "Snowkay",
    description:
      "Snowkay is a WIP snow finding app, designed for snowboarders and skiers. I'm building this with NextJS, Typescript, Mantine and a few external REST APIs.",
    image: "https://picsum.photos/1600/900",
    link: "https://google.com",
    code: "https://github.com",
    tech: ["next", "typescript", "mantine"],
  },
  {
    display: true,
    slug: "generator",
    title: "WoW Class Generator",
    description:
      "This project was a simple class generator for World of Warcraft. Users can select which faction they wish to play and it will generate a random race / class and spec for them. I'm planning to revisit this with a more modern design and a few more features.",
    image: "https://picsum.photos/1600/900",
    link: "https://premiare.github.io/WoWClassGenerator/",
    code: "https://github.com/premiare/WoWClassGenerator",

    tech: ["html", "css", "javascript", "bootstrap"],
  },
  {
    display: true,
    slug: "portfolio-v1",
    title: "Portfolio v1",
    description: "My original portfolio website.",
    image: "https://picsum.photos/1600/900",
    link: "https://premiare.github.io/old-braydenbarter.dev/",
    code: "https://github.com/premiare/old-braydenbarter.dev",
    tech: ["html", "css", "javascript", "jquery", "bootstrap"],
  },
  {
    display: true,
    slug: "color-flipper",
    title: "Color Flipper",
    description:
      "A basic color toggler to give inspiration and use of new colors. The project holds about 530 unique colors, including HEX and RGB codes.",
    image: "https://picsum.photos/200/300",
    link: "https://colorflipper-gules.vercel.app/",
    code: "https://github.com/premiare/colorflipper",
    tech: ["html", "css", "javascript", "jquery"],
  },
];
