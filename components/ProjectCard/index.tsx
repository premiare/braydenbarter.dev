import Link from "next/link";
import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";

import { TECH } from "../../@data/tech";

import { useRouter } from "next/router";

type IndividualTech = {
  TechType: {
    icon: JSX.Element;
    name: string;
    class: string;
  };
};

const ProjectCard = ({ project, alt }: { project: any; alt: boolean }) => {
  const router = useRouter();

  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: any) => {
    const { pageX, pageY } = e;
    setMousePosition({ x: pageX, y: pageY });
  };

  return (
    <div
      className="w-[90%] md:w-[55%] mx-auto h-100 border border-neutral-700 rounded-md bg-neutral-900 flex flex-col md:flex-row shadow-lg shadow-neutral-800 hover:border-teal-300 hover:shadow-neutral-900 transition-all duration-300 group relative"
      // disabling this for now
      // onClick={() =>
      //   router.push(`projects/${project.slug}`, undefined, { shallow: true })
      // }
    >
      <div className="backdrop-blur-xl h-[100%] w-[100%] group-hover:backdrop-brightness-75 rounded-[6px] ">
        <div className="flex flex-col w-[95%] sm:w-[75%] md:w-[90%] h-100 gap-4 mx-auto z-2 p-8 md:p-8">
          <div className="text-white text-3xl text-center group-hover:text-teal-300 transition-all duration-300">
            {project.title}
          </div>
          <div className="text-white text-md">{project.description}</div>
          <div className="flex flex-row gap-4 w-100 justify-center mx-auto mt-4 h-auto p-8 flex-wrap">
            {project.tech.map((t: any) => {
              return (
                <>
                  <div
                    key={t}
                    className={`text-3xl transition p-2 hover:scale-110 `}
                  >
                    {TECH[t].icon}
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap gap-2 w-100 mx-auto mt-2 mb-2">
            <Link
              href={project.link}
              target="_blank"
              className="border border-teal-300 text-white w-36 rounded-sm flex justify-center items-center align-middle text-lg h-10 hover:bg-teal-300 hover:text-neutral-900 transition-all font-bold gap-2"
            >
              Live Site
              <CgWebsite />
            </Link>
            {!project.code ? (
              <div className="border border-teal-300 text-white w-36 rounded-sm flex justify-center items-center align-middle text-lg h-10 hover:bg-teal-300 hover:text-neutral-900 transition-all font-bold gap-2 ">
                N/A
              </div>
            ) : (
              <Link
                href={project.code}
                target="_blank"
                className="border border-teal-300 text-white w-36 rounded-sm flex justify-center items-center align-middle text-lg h-10 hover:bg-teal-300 hover:text-neutral-900 transition-all font-bold gap-2 "
              >
                Code
                <VscGithubAlt />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
