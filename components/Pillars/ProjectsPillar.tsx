"use client";

import { projects } from "../../@data/projects";

export const ProjectsPillar = () => {
  const displayedProjects = projects.filter((project) => project.display);

  return (
    <div className="h-full flex flex-col gap-3 sm:gap-4 text-neutral-200 pt-2 sm:pt-8 md:pt-16">
      <div className="flex-1 overflow-y-auto space-y-4 sm:space-y-5 pr-1 sm:pr-2">
        {displayedProjects.map((project, index) => (
          <article
            key={project.slug}
            className="group relative border border-neutral-800 rounded-xl p-4 sm:p-5
                       hover:border-neutral-700 hover:bg-neutral-800/30
                       transition-all duration-300 ease-out"
          >
            {/* Subtle gradient accent on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-500/5 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Header: Title + Status */}
            <header className="relative flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5 flex-wrap min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-neutral-100
                               group-hover:text-white transition-colors duration-200">
                  {project.title}
                </h3>
                {project.status === "in-development" && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5
                                   text-[10px] sm:text-xs font-medium
                                   bg-amber-500/10 text-amber-400
                                   border border-amber-500/20 rounded-full
                                   whitespace-nowrap">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                    In Development
                  </span>
                )}
              </div>
              {/* Project number indicator */}
              <span className="text-[10px] sm:text-xs text-neutral-600 font-mono tabular-nums flex-shrink-0">
                0{index + 1}
              </span>
            </header>

            {/* Description */}
            <p className="relative text-xs sm:text-sm text-neutral-400 mb-4 leading-relaxed
                          line-clamp-3 group-hover:text-neutral-300 transition-colors duration-200">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="relative flex flex-wrap gap-1.5 sm:gap-2 mb-4">
              {project.tech.map((techName) => (
                <span
                  key={techName}
                  className="px-2 py-1 text-[10px] sm:text-xs font-medium
                             bg-neutral-800/80 border border-neutral-700/50 rounded-md
                             text-neutral-400
                             group-hover:border-neutral-600/50 group-hover:text-neutral-300
                             transition-all duration-200"
                >
                  {techName}
                </span>
              ))}
            </div>

            {/* Related Links (for multi-site projects like xMacros) */}
            {project.relatedLinks && project.relatedLinks.length > 0 && (
              <div className="relative mb-4 pt-3 border-t border-neutral-800/50">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-medium mb-2 block">
                  Related Sites
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                  {project.relatedLinks.map((link, linkIndex) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] sm:text-xs
                                 text-teal-400/80 hover:text-teal-300
                                 transition-colors duration-150"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="w-1 h-1 rounded-full bg-teal-500/50" />
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Action Links */}
            <footer className="relative flex flex-wrap items-center gap-3 pt-3 border-t border-neutral-800/50">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium
                             text-neutral-300 hover:text-white
                             transition-all duration-150
                             group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Project</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-150 group-hover/link:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
              {project.code && typeof project.code === "string" && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium
                             text-neutral-400 hover:text-neutral-200
                             transition-all duration-150
                             group/code"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Source Code</span>
                </a>
              )}
            </footer>
          </article>
        ))}
      </div>

      {/* Gradient fade at bottom to indicate scrollable content */}
      <div className="sticky bottom-0 h-8 sm:h-12 bg-gradient-to-t from-neutral-800 via-neutral-800/80 to-transparent pointer-events-none -mt-8 sm:-mt-12" />
    </div>
  );
};

