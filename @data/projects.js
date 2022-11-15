import { SiNextdotjs } from "react-icons/si";
import { SiReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiStyledComponents } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMaterialUi } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiNodeDotJs } from "react-icons/si";
import wordle from "../public/wordle.png";

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
    title: "Wordle Clone",
    description:
      "A very basic Wordle clone to see if I could see the logic of the real Wordle and recreate that. Very minimal outside aid (Google, StackOverflow, viewing other Wordle projects) besides a long array of valid words.",
    image: wordle,
    link: "https://wordle-xi-drab.vercel.app/",
    code: "https://github.com/premiare/wordle",
    tech: ["react", "javascript", "tailwind"],
  },
  {
    display: false,
    title: "Snowkay",
    description:
      "Snowkay is a WIP snow finding app, designed for snowboarders and skiers. I'm building this with NextJS, Typescript, Mantine and a few external REST APIs.",
    image: "https://picsum.photos/200/300",
    link: "https://google.com",
    code: "https://github.com",
    tech: ["next", "typescript", "mantine"],
  },
  {
    display: true,
    title: "WoW Class Generator",
    description:
      "This project was a simple class generator for World of Warcraft. Users can select which faction they wish to play and it will generate a random race / class and spec for them. I'm planning to revisit this with a more modern design and a few more features.",
    image: "https://picsum.photos/200/300",
    link: "https://premiare.github.io/WoWClassGenerator/",
    code: "https://github.com/premiare/WoWClassGenerator",

    tech: ["html", "css", "javascript", "bootstrap"],
  },
  {
    display: true,
    title: "Portfolio v1",
    description: "My original portfolio website.",
    image: "https://picsum.photos/200/300",
    link: "https://google.com",
    code: "https://github.com",
    tech: ["html", "css", "javascript", "jquery", "bootstrap"],
  },
  {
    display: true,
    title: "Color Flipper",
    description:
      "A basic color toggler to give inspiration and use of new colors. The project holds about 530 unique colors, including HEX and RGB codes.",
    image: "https://picsum.photos/200/300",
    link: "https://github.com/premiare/colorflipper",
    code: "https://github.com",
    tech: ["html", "css", "javascript", "jquery"],
  },
];
