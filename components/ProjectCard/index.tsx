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

import { TECH } from "../../@data/tech";

import { ProjectProps, TechType } from "../../types";
import clsx from "clsx";

type IndividualTech = {
  TechType: {
    icon: JSX.Element;
    name: string;
    class: string;
  };
};

const ProjectCard = ({ project, alt }: { project: any; alt: boolean }) => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: any) => {
    const { pageX, pageY } = e;
    setMousePosition({ x: pageX, y: pageY });
  };

  console.log(project);

  return (
    <div
      className={clsx(
        alt ? "flex-row-reverse" : "flex-row",
        "w-[90%] md:w-[55%] mx-auto h-100 border border-neutral-700 rounded-md bg-neutral-900 flex flex-col md:flex-row shadow-lg shadow-neutral-800 hover:border-teal-300 hover:shadow-neutral-900 transition-all duration-300 group relative"
      )}
    >
      <div
        className={`absolute h-full w-full top-0 left-0 z-2 bg-[url(${
          project.image.src ? project.image.src : project.image
        })] rounded-[5px] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-300`}
      ></div>
      <div className="backdrop-blur-xl h-[100%] w-[100%] group-hover:backdrop-brightness-75 rounded-[5px] ">
        <div className="flex flex-col w-[95%] md:w-[50%] h-100 gap-4 mx-auto z-2 p-8">
          <div className="text-white text-3xl group-hover:text-teal-300 transition-all duration-300">
            {project.title}
          </div>
          <div className="text-white text-md">{project.description}</div>
          <div className="flex flex-row gap-8 w-100 mx-auto mt-4 h-auto p-8 flex-wrap">
            {project.tech.map((t: any) => {
              return (
                <>
                  <div
                    id="cards"
                    className="flex flex-col justify-center items-center group relative"
                  >
                    <div
                      key={t}
                      className={`text-4xl ${TECH[t].class} transition p-2 hover:scale-110 `}
                    >
                      {TECH[t].icon}
                    </div>
                    {/* <span className="text-white opacity-0 text-md absolute -bottom-6 text-lg text-center transition-all bg-transparent border px-4 h-100 w-100 flex justify-center items-center align-middle mx-auto rounded-md">
                    {TECH[t].name}
                  </span> */}
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-2 w-100 mx-auto mt-2 mb-2">
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
          {/* <div className="border border-white h-40 w-40"></div> */}
          {/* <Image
          className="object-cover overflow-hidden"
          src={project.image}
          alt={project.title}
          width={200}
          height={225}
        /> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
