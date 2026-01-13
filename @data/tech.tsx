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
  SiNetlify,
  SiVercel,
  SiUbuntu,
  SiExpo,
  SiStoryblok,
  SiStorybook,
  SiRailway,
  SiVuedotjs,
  SiNuxtdotjs,
  SiCakephp,
  SiStrapi,
  SiSanity,
  SiShadcnui,
  SiClaude,
  SiOpenai,
  SiFlutter,
  SiMantine,
  SiPostgresql,
  SiFlydotio
} from "react-icons/si";

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
    icon: <SiMantine />,
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
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a1.001 1.001 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a1 1 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>
    ),
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
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.8v-6.7l10 .15z"/>
      </svg>
    ),
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
  },
  shadcn: {
    icon: <SiShadcnui />,
    name: "shadcn/ui",
    class: "text-shadcn",
    color: "#000000",
  },
  vue: {
    icon: <SiVuedotjs />,
    name: "Vue.js",
    class: "text-vue",
    color: "#4FC08D",
  },
  nuxt: {
    icon: <SiNuxtdotjs />,
    name: "Nuxt",
    class: "text-nuxt",
    color: "#00DC82",
  },
  cakephp: {
    icon: <SiCakephp />,
    name: "CakePHP",
    class: "text-cakephp",
    color: "#D33C43",
  },
  strapi: {
    icon: <SiStrapi />,
    name: "Strapi",
    class: "text-strapi",
    color: "#4945ff",
  },
  sanity: {
    icon: <SiSanity />,
    name: "Sanity",
    class: "text-sanity",
    color: "#f03e2f",
  },
  openai: {
    icon: <SiOpenai />,
    name: "OpenAI",
    class: "text-openai",
    color: "#10a37f",
  },
  cursor: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 466.73 532.09"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"/>
      </svg>
    ),
    name: "Cursor",
    class: "text-cursor",
    color: "#000000",
  },
  claude: {
    icon: <SiClaude />,
    name: "Claude",
    class: "text-claude",
    color: "#d97757",
  },
  flutter: {
    icon: <SiFlutter />,
    name: "Flutter",
    class: "text-flutter",
    color: "#02569B",
  },
  postgres: {
    icon: <SiPostgresql />,
    name: "PostgreSQL",
    class: "text-postgres",
    color: "#4169E1",
  },
  flyio: {
    icon: <SiFlydotio />,
    name: "Fly.io",
    class: "text-flyio",
    color: "#7B3FF2",
  },
  reactnative: {
    icon: <SiReact />,
    name: "React Native",
    class: "text-react",
    color: "#61dafb",
  }
};
