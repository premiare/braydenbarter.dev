import Link from "next/link";
import React from "react";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
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
} from "react-icons/si";

import { ProjectProps, TechType } from "../../types";
import clsx from "clsx";

type TechIcons = {
  [key in TechType]: JSX.Element;
};

const TECH_ICONS: TechIcons = {
  next: { icon: <SiNextdotjs />, color: "#111111", name: "Next.js" },
  react: <SiReact />,
  node: <SiNodedotjs />,
  typescript: <SiTypescript />,
  javascript: <SiJavascript />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  sass: <SiSass />,
  tailwind: <SiTailwindcss />,
  bootstrap: <SiBootstrap />,
  supabase: <SiSupabase />,
  mantine: <SiStyledcomponents />,
};

const ProjectCard = ({ project, alt }) => {
  return (
    <div
      className={clsx(
        alt ? "flex-row-reverse" : "flex-row",
        "w-[75%] mx-auto h-100 border border-neutral-700 rounded-md p-8 bg-neutral-900 flex shadow-lg shadow-neutral-800 hover:border-neutral-600 hover:shadow-neutral-900 transition-all duration-300"
      )}
    >
      <div className="flex flex-col w-[60%] h-100 gap-4">
        <div className="text-white text-3xl">{project.title}</div>
        <div className="text-white text-md">{project.description}</div>
        <div className="flex flex-row gap-8 w-100 mx-auto mt-4 h-auto p-8">
          {project.tech.map((t: string) => (
            <>
              <div className="flex flex-col justify-center items-center group relative">
                <div
                  key={t}
                  className={`text-4xl hover:text-[${TECH_ICONS[t].color}] text-[${TECH_ICONS[t].color}] transition p-2`}
                >
                  {TECH_ICONS[t].icon}
                </div>
                <span className="text-white opacity-0 group-hover:opacity-100 text-md absolute -bottom-5 text-lg text-center transition-all ">
                  {t}
                </span>
              </div>
            </>
          ))}
        </div>
        <div className="flex flex-row gap-2 w-100 mx-auto mt-2">
          <Link
            href={project.link}
            target="_blank"
            className="border border-teal-300 text-white w-36 rounded-sm flex justify-center items-center align-middle text-lg h-10 hover:bg-teal-300 hover:text-neutral-900 transition-all font-bold gap-2"
          >
            Live Site
            <CgWebsite />
          </Link>
          <Link
            href={project.code}
            target="_blank"
            className="border border-teal-300 text-white w-36 rounded-sm flex justify-center items-center align-middle text-lg h-10 hover:bg-teal-300 hover:text-neutral-900 transition-all font-bold gap-2 "
          >
            Code
            <VscGithubAlt />
          </Link>
        </div>
      </div>
      <div className="flex flex-row mx-auto justify-center">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
