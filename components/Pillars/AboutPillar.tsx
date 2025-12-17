"use client";

import { TECH as tech } from "../../@data/tech";

export const AboutPillar = () => {
  const categories = {
    "Frontend Frameworks": [
      tech["next"],
      tech["react"],
      tech["vue"],
      tech["nuxt"],
    ],
    "Languages": [
      tech["typescript"],
      tech["javascript"],
      tech["html"],
      tech["css"],
    ],
    "Styling": [
      tech["tailwind"],
      tech["bootstrap"],
      tech["styledComponents"],
      tech["shadcn"],
      tech["mantine"],
    ],
    "Backend": [
      tech["node"],
      tech["cakephp"],
    ],
    "Database & Services": [
      tech["supabase"],
    ],
    "CMS": [
      tech["storyblok"],
      tech["strapi"],
      tech["sanity"],
    ],
    "Mobile": [
      tech["expo"],
      tech["flutter"],
    ],
    "Tools & Libraries": [
      tech["jquery"],
      tech["storybook"],
    ],
    "Development Tools": [
      tech["vscode"],
      tech["git"],
      tech["github"],
    ],
    "AI Tools": [
      tech["openai"],
      tech["cursor"],
      tech["claude"],
    ],
    "Deployment": [
      tech["vercel"],
      tech["netlify"],
      tech["railway"],
    ],
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-neutral-200 pt-2 sm:pt-8 md:pt-16 relative h-full">
      {Object.entries(categories).map(([categoryName, technologies]) => (
        <div key={categoryName} className="mb-2 sm:mb-0">
          <h3 className="text-xs sm:text-sm font-medium mb-3 sm:mb-4 text-neutral-400 uppercase tracking-wider break-words">
            {categoryName}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {technologies.map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-center gap-1 sm:gap-2 p-1.5 sm:p-2 md:p-3"
              >
                <div className="text-lg sm:text-xl md:text-2xl">{t.icon}</div>
                <span className="text-[9px] sm:text-[10px] md:text-xs text-neutral-500 text-center leading-tight break-words">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* Gradient shadow at bottom to indicate more content */}
      <div className="sticky bottom-0 h-12 sm:h-16 bg-gradient-to-t from-neutral-800 via-neutral-800/80 to-transparent pointer-events-none" />
    </div>
  );
};

