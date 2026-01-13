"use client";

import { TECH as tech } from "../../@data/tech";

interface TechItem {
  icon: React.ReactNode;
  name: string;
  color?: string;
}

interface Category {
  label: string;
  items: TechItem[];
}

const TechPill = ({ item }: { item: TechItem }) => (
  <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-800/60 border border-neutral-700/50 rounded-md text-neutral-300 text-xs sm:text-sm transition-colors hover:border-neutral-600 hover:bg-neutral-800">
    <span className="text-sm sm:text-base opacity-80">{item.icon}</span>
    <span>{item.name}</span>
  </span>
);

export const AboutPillar = () => {
  const categories: Category[] = [
    {
      label: "Frontend",
      items: [
        tech["next"],
        tech["react"],
        tech["vue"],
        tech["nuxt"],
        tech["typescript"],
        tech["tailwind"],
        tech["shadcn"],
      ],
    },
    {
      label: "Backend & Data",
      items: [
        tech["node"],
        tech["supabase"],
        tech["postgres"],
        tech["cakephp"],
      ],
    },
    {
      label: "CMS",
      items: [
        tech["storyblok"],
        tech["strapi"],
        tech["sanity"],
      ],
    },
    {
      label: "Mobile",
      items: [
        tech["reactnative"],
        tech["expo"],
        tech["flutter"],
      ],
    },
    {
      label: "AI & Tools",
      items: [
        tech["cursor"],
        tech["claude"],
        tech["openai"],
        tech["storybook"],
        tech["git"],
      ],
    },
    {
      label: "Deploy",
      items: [
        tech["vercel"],
        tech["netlify"],
        tech["railway"],
        tech["flyio"],
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 sm:gap-5 text-neutral-200 pt-2 sm:pt-8 md:pt-16">
      {/* Brief intro */}
      <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
        Full-stack developer focused on building modern web experiences with a strong emphasis on frontend craft and user experience.
      </p>

      {/* Tech categories */}
      <div className="space-y-4 sm:space-y-5">
        {categories.map((category) => (
          <div key={category.label}>
            <h3 className="text-[10px] sm:text-xs font-medium mb-2 text-neutral-500 uppercase tracking-wider">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {category.items.map((item) => (
                <TechPill key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

