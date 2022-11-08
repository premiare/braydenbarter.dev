import React from "react";
import { projects } from "../../@data/projects";
import { ProjectProps } from "../../types";
import ProjectCard from "../../components/ProjectCard";

type Props = {};

console.log(projects);

const Projects = (props: Props) => {
  return (
    <>
      <title>Projects | Brayden Barter</title>
      <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
        <div className="container-xl flex ">
          <div className="justify-center w-100 mx-auto flex flex-col flex-wrap gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                // alternate the order of the project cards
                alt={index % 2 ? true : false}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
