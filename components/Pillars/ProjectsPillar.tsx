"use client";

import { projects } from "../../@data/projects";

export const ProjectsPillar = () => {
  const displayedProjects = projects.filter((project) => project.display);

  return (
    <div className="h-full flex flex-col gap-3 sm:gap-4 text-neutral-200 pt-2 sm:pt-8 md:pt-16">
      <div className="flex-1 overflow-y-auto space-y-3 sm:space-y-4 pr-1 sm:pr-2">
        {displayedProjects.map((project) => (
          <div
            key={project.slug}
            className="border border-neutral-800 rounded-lg p-3 sm:p-4 hover:border-neutral-700 transition-colors"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 text-neutral-100 break-words">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-400 mb-3 leading-relaxed break-words">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
              {project.tech.map((techName) => (
                <span
                  key={techName}
                  className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-neutral-800 rounded text-neutral-500 break-words"
                >
                  {techName}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-neutral-300 hover:text-neutral-100 transition-colors break-words"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project →
                </a>
              )}
              {project.code && typeof project.code === 'string' && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-neutral-300 hover:text-neutral-100 transition-colors break-words"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Code →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

