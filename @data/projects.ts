export interface RelatedLink {
  title: string;
  url: string;
}

export interface Project {
  display: boolean;
  slug: string;
  title: string;
  description: string;
  link: string;
  code: string | false;
  tech: string[];
  status?: "in-development" | "live";
  relatedLinks?: RelatedLink[];
}

export const projects: Project[] = [
    {
    display: true,
    slug: "lemmonade",
    title: "Lemmonade",
    description:
      "FMCG Software for Sales and Operations. A comprehensive platform designed to streamline sales processes and operations management for fast-moving consumer goods companies.",
    link: "https://lemmonade.au",
    code: false,
    tech: ["next.js", "postgres", "typescript", "flutter"],
  },
  {
    display: true,
    slug: "clash",
    title: "Clash",
    status: "in-development",
    description:
      "Festival planning app with 50K+ users across 100+ countries. Features Spotify integration, schedule clash detection, group coordination with encrypted messaging, and a unique disposable camera feature where photos reveal after the festival ends.",
    link: "https://getclashapp.com/",
    code: false,
    tech: ["react-native", "expo", "typescript", "supabase", "spotify-api"],
  },
  {
    display: true,
    slug: "subwaymacros",
    title: "SubwayMacros",
    description:
      "Fast food macro calculator with 9K+ monthly visitors. Real-time nutrition tracking with multi-region support (AU, US, UK, CA) and shareable meal configurations. Expanded to GYG, Dominos, and McDonalds (AU).",
    link: "https://www.subwaymacros.com/",
    code: false,
    tech: ["next.js", "typescript", "tailwind", "vercel"],
    relatedLinks: [
      { title: "GYGMacros", url: "https://www.gygmacros.com/" },
      { title: "DominosMacros", url: "https://www.dominosmacros.com/" },
      { title: "McDonaldsMacros", url: "https://www.mcdonaldsmacros.com/" },
    ],
  },
  {
    display: true,
    slug: "fabl",
    title: "Fabl",
    status: "live",
    description:
      "AI-powered music label matching platform with 1,700+ indexed labels. Analyzes tracks for BPM, key, genre, mood, and production quality in under 30 seconds. Features intelligent label matching with compatibility scores, AI mix feedback, promo video generation, and submission tracking. Helps independent artists find the right labels and reduce rejection rates.",
    link: "https://fabl.app/",
    code: false,
    tech: ["next.js", "typescript", "openai", "supabase"],
  },
];
