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

type IndividualTech = {
  TechType: {
    icon: JSX.Element;
    name: string;
    class: string;
  };
};

const TECH: any = {
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
    icon: <SiStyledcomponents />,
    name: "Mantine",
    class: "text-mantine",
  },
  styledComponents: {
    icon: <SiStyledcomponents />,
    name: "Styled Components",
    class: "text-styledComponents",
  },
};

const ProjectCard = ({ project, alt }: { project: any; alt: boolean }) => {
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
        <div className="flex flex-row gap-8 w-100 mx-auto mt-4 h-auto p-8 flex-wrap">
          {project.tech.map((t: any) => {
            console.log(t);
            return (
              <>
                <div className="flex flex-col justify-center items-center group relative">
                  <div
                    key={t}
                    className={`text-4xl ${TECH[t].class} transition p-2`}
                  >
                    {TECH[t].icon}
                  </div>
                  <span className="text-white opacity-0 group-hover:opacity-100 text-md absolute -bottom-6 text-lg text-center transition-all bg-transparent border px-4 h-100 w-100 flex justify-center items-center align-middle mx-auto rounded-md">
                    {TECH[t].name}
                  </span>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-row flex-wrap gap-2 w-100 mx-auto mt-2">
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
      <div className="flex flex-row mx-auto justify-center relative">
        <Image
          className="object-cover overflow-hidden"
          src={`/` + project.image}
          alt={project.title}
          width={200}
          height={225}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
