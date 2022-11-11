import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiSupabase,
  SiStyledcomponents,
  SiJquery,
  SiFigma,
  SiGithub,
  SiGit,
  SiNpm,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from "react-icons/si";
import mantine from "../public/mantine-seeklogo.com.svg";

const Mantine = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="258"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 258"
    >
      <path
        fill="#339AF0"
        d="M256 128.661C256 57.604 198.693 0 128.002 0 57.307 0 0 57.604 0 128.661c0 71.056 57.307 128.662 128 128.662s128-57.606 128-128.662z"
      ></path>
      <path
        fill="#FFF"
        d="M110.576 64.111a9.707 9.707 0 017.227 1.82 79.107 79.107 0 0111.68 10.685l.874.993h27.61c5.384 0 9.744 4.374 9.744 9.777 0 5.283-4.176 9.583-9.388 9.771l-.357.007h-15.25a77.617 77.617 0 016.426 31.087 77.617 77.617 0 01-5.979 30.03l-.448 1.054h15.242c5.386 0 9.747 4.376 9.747 9.778 0 5.282-4.178 9.584-9.39 9.772l-.357.007H130.34a79.11 79.11 0 01-12.546 11.666 9.715 9.715 0 01-13.63-2.027 9.805 9.805 0 01-1.623-3.451 9.805 9.805 0 011.096-7.409 9.696 9.696 0 012.551-2.82c14.91-11.107 23.469-28.09 23.469-46.602 0-18.511-8.56-35.494-23.469-46.602a9.693 9.693 0 01-2.554-2.82 9.842 9.842 0 01.287-10.521l.243-.346a9.813 9.813 0 016.411-3.849zm-1.755 47.41a14.435 14.435 0 014.728 3.258 14.62 14.62 0 013.105 4.857 14.745 14.745 0 01.995 5.696 14.68 14.68 0 01-4.35 10.096 14.356 14.356 0 01-10.084 4.152 14.356 14.356 0 01-10.088-4.152 14.68 14.68 0 01-4.349-10.096 14.748 14.748 0 01.998-5.696 14.62 14.62 0 013.105-4.857 14.434 14.434 0 014.726-3.257 14.303 14.303 0 0111.214 0z"
      ></path>
    </svg>
  );
};

export const TECH: any = {
  next: { icon: <SiNextdotjs />, name: "Next.js", class: "text-next" },
  react: { icon: <SiReact />, name: "React", class: "text-react" },
  node: { icon: <SiNodedotjs />, name: "Node.js", class: "text-node" },
  typescript: {
    icon: <SiTypescript />,
    name: "TypeScript",
    class: "text-typescript",
  },
  javascript: {
    icon: <SiJavascript />,
    name: "JavaScript",
    class: "text-javascript",
  },
  jquery: { icon: <SiJquery />, name: "jQuery", class: "text-jquery" },
  html: { icon: <SiHtml5 />, name: "HTML", class: "text-html" },
  css: { icon: <SiCss3 />, name: "CSS", class: "text-css" },
  tailwind: {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    class: "text-tailwind",
  },
  bootstrap: {
    icon: <SiBootstrap />,
    name: "Bootstrap",
    class: "text-bootstrap",
  },
  supabase: { icon: <SiSupabase />, name: "Supabase", class: "text-supabase" },
  mantine: {
    icon: <SiBootstrap />,
    name: "Mantine",
    class: "text-mantine",
  },
  styledComponents: {
    icon: <SiStyledcomponents />,
    name: "Styled Components",
    class: "text-styledComponents",
  },
  figma: {
    icon: <SiFigma />,
    name: "Figma",
    class: "text-figma",
  },
  github: {
    icon: <SiGithub />,
    name: "GitHub",
    class: "text-github",
  },
  git: {
    icon: <SiGit />,
    name: "Git",
    class: "text-git",
  },
  npm: {
    icon: <SiNpm />,
    name: "NPM",
    class: "text-npm",
  },
  photoshop: {
    icon: <SiAdobephotoshop />,
    name: "Photoshop",
    class: "text-photoshop",
  },
  premiere: {
    icon: <SiAdobepremierepro />,
    name: "Premiere Pro",
    class: "text-premiere",
  },
};
