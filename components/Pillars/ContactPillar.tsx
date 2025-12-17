"use client";

export const ContactPillar = () => {
  return (
    <div className="h-full flex flex-col gap-3 sm:gap-4 md:gap-6 text-neutral-200 pt-2 sm:pt-8 md:pt-16">
      <div className="space-y-4 sm:space-y-5">
        <div>
          <h3 className="text-xs sm:text-sm font-medium mb-2 text-neutral-400 uppercase tracking-wider break-words">Email</h3>
          <a
            href="mailto:braydenbarter@gmail.com"
            className="text-sm sm:text-base text-neutral-200 hover:text-neutral-100 transition-colors block break-words"
            onClick={(e) => e.stopPropagation()}
          >
            braydenbarter@gmail.com
          </a>
        </div>

        <div>
          <h3 className="text-xs sm:text-sm font-medium mb-2 text-neutral-400 uppercase tracking-wider break-words">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/brayden-barter-5b1b3b1b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-neutral-200 hover:text-neutral-100 transition-colors block break-words"
            onClick={(e) => e.stopPropagation()}
          >
            Connect on LinkedIn →
          </a>
        </div>

        <div>
          <h3 className="text-xs sm:text-sm font-medium mb-2 text-neutral-400 uppercase tracking-wider break-words">GitHub</h3>
          <a
            href="https://github.com/premiare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-neutral-200 hover:text-neutral-100 transition-colors block break-words"
            onClick={(e) => e.stopPropagation()}
          >
            View my GitHub →
          </a>
        </div>
      </div>
    </div>
  );
};

