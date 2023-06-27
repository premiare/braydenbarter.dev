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
  SiPostman,
  SiVisualstudiocode,
  SiNetlify,
  SiVercel,
  SiUbuntu,
  SiWindows,
  SiExpo,
  SiStoryblok,
  SiStorybook,
  SiRailway
} from "react-icons/si";
import { IconBrandMantine } from "@tabler/icons";

const Mantine = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "24"}
      height={props.height || "24"}
      preserveAspectRatio="xMidYMid"
      viewBox={props.viewBox || "0 0 256 258"}
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
  next: {
    icon: <SiNextdotjs />,
    name: "Next.js",
    class: "text-next",
    color: "#000",
  },
  react: {
    icon: <SiReact />,
    name: "React",
    class: "text-react",
    color: "#61dafb",
  },
  node: {
    icon: <SiNodedotjs />,
    name: "Node.js",
    class: "text-node",
    color: "#339933",
  },
  typescript: {
    icon: <SiTypescript />,
    name: "TypeScript",
    class: "text-typescript",
    color: "#3178c6",
  },
  javascript: {
    icon: <SiJavascript />,
    name: "JavaScript",
    class: "text-javascript",
    color: "#f7df1e",
  },
  jquery: {
    icon: <SiJquery />,
    name: "jQuery",
    class: "text-jquery",
    color: "#0769ad",
  },
  html: {
    icon: <SiHtml5 />,
    name: "HTML",
    class: "text-html",
    color: "#e34f26",
  },
  css: { icon: <SiCss3 />, name: "CSS", class: "text-css", color: "#264de4" },
  tailwind: {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    class: "text-tailwind",
    color: "#06b6d4",
  },
  bootstrap: {
    icon: <SiBootstrap />,
    name: "Bootstrap",
    class: "text-bootstrap",
    color: "#563d7c",
  },
  supabase: {
    icon: <SiSupabase />,
    name: "Supabase",
    class: "text-supabase",
    color: "#3fcf8e",
  },
  mantine: {
    icon: <IconBrandMantine height="36" width="36" />,
    name: "Mantine",
    class: "text-mantine",
    color: "#339AF0",
  },
  styledComponents: {
    icon: <SiStyledcomponents />,
    name: "styled-components",
    class: "text-styledComponents",
    color: "#db7093",
  },
  figma: {
    icon: <SiFigma />,
    name: "Figma",
    class: "text-figma",
    color: "#f24e1e",
  },
  github: {
    icon: <SiGithub />,
    name: "GitHub",
    class: "text-github",
    color: "#f0f6fc",
  },
  git: {
    icon: <SiGit />,
    name: "Git",
    class: "text-git",
    color: "#f05032",
  },
  npm: {
    icon: <SiNpm />,
    name: "NPM",
    class: "text-npm",
    color: "#cb3837",
  },
  photoshop: {
    icon: <SiAdobephotoshop />,
    name: "Photoshop",
    class: "text-photoshop",
    color: "#31a8ff",
  },
  premiere: {
    icon: <SiAdobepremierepro />,
    name: "Premiere Pro",
    class: "text-premiere",
    color: "#9999ff",
  },
  postman: {
    icon: <SiPostman />,
    name: "Postman",
    class: "text-postman",
    color: "#ff6c37",
  },
  vscode: {
    icon: <SiVisualstudiocode />,
    name: "VS Code",
    class: "text-vscode",
    color: "#007acc",
  },
  netlify: {
    icon: <SiNetlify />,
    name: "Netlify",
    class: "text-netlify",
    color: "#00c7b7",
  },
  vercel: {
    icon: <SiVercel />,
    name: "Vercel",
    class: "text-vercel",
    color: "#000000",
  },
  wsl: {
    icon: <SiUbuntu />,
    name: "WSL2",
    class: "text-wsl",
    color: "#dd4814",
  },
  windows: {
    icon: <SiWindows />,
    name: "Windows",
    class: "text-windows",
    color: "#00adef",
  },
  expo: {
    icon: <SiExpo />,
    name: "Expo",
    class: "text-expo",
    color: "#000020",
  },
  storyblok: {
    icon: <SiStoryblok />,
    name: "Storyblok",
    class: "text-storyblok",
    color: ""
  },
  storybook: {
    icon: <SiStorybook />,
    name: "Storybook",
    class: "text-storybook",
    color: ""
  },
  railway: {
    icon: <SiRailway />,
    name: "Railway",
    class: "text-railway",
    color: ""
  }
};
