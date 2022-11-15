import React from "react";
import { projects } from "../../@data/projects";
import { ProjectProps } from "../../types";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <>
      <title>Projects | Brayden Barter</title>
      <h1 className="text-4xl mb-8 md:m-8 text-center underline text-teal-300">
        Projects
      </h1>

      <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center">
        <div className="container-xl flex mb-12">
          <div className="justify-center w-100 mx-auto flex flex-col flex-wrap gap-4">
            {projects.map((project, index) => {
              if (!project.display) {
                return;
              }
              return (
                <ProjectCard
                  key={index}
                  project={project}
                  // alternate the order of the project cards
                  alt={index % 2 ? true : false}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
