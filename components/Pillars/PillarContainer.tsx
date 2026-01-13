"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lanyard } from "../../lib/lanyard";
import { HomePillar } from "./HomePillar";
import { AboutPillar } from "./AboutPillar";
import { ProjectsPillar } from "./ProjectsPillar";
import { ContactPillar } from "./ContactPillar";

interface Pillar {
  id: string;
  title: string;
  component: React.ReactNode;
}

export const PillarContainer = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const prevMobileRef = useRef<boolean | null>(null);
  const lanyardData = Lanyard();

  const pillars: Pillar[] = [
    { id: "home", title: "HOME", component: <HomePillar lanyardData={lanyardData} /> },
    { id: "about", title: "ABOUT", component: <AboutPillar /> },
    { id: "projects", title: "PROJECTS", component: <ProjectsPillar /> },
    { id: "contact", title: "CONTACT", component: <ContactPillar /> },
  ];

  useEffect(() => {
    // Set initial state immediately (synchronous check)
    const checkMobile = () => {
      const nowMobile = window.innerWidth < 768;
      const wasMobile = prevMobileRef.current;
      
      if (wasMobile === null) {
        // Initial load - default to "home" open on both mobile and desktop
        setIsMobile(nowMobile);
        setExpandedId("home");
      } else if (wasMobile !== nowMobile) {
        // Screen size changed - keep "home" open
        setExpandedId("home");
        setIsMobile(nowMobile);
      } else {
        setIsMobile(nowMobile);
      }
      
      prevMobileRef.current = nowMobile;
    };
    
    // Run immediately
    checkMobile();
    
    // Then listen for changes
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePillarClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex items-start md:items-center justify-center p-3 sm:p-4 md:p-4 lg:p-8 bg-[#0a0a0a]">
      {/* Mobile: Stack vertically, Desktop: Horizontal layout */}
      {/* Use CSS classes for initial layout, JS only for interactivity */}
      <div className={`w-full max-w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:gap-3 lg:gap-4 md:h-[80vh] md:justify-center md:max-w-7xl`}>
        {pillars.map((pillar) => {
          const isExpanded = expandedId === pillar.id;
          const isShrunk = expandedId !== null && !isExpanded && !isMobile;

          return (
            <motion.div
              key={pillar.id}
              className={`relative w-full md:w-[20%] md:min-w-[120px] max-w-full min-w-0 flex flex-col`}
              initial={false}
              animate={
                isMobile
                  ? {
                      width: "100%",
                      maxWidth: "100%",
                      minWidth: 0,
                      height: isExpanded ? "auto" : "80px",
                      maxHeight: isExpanded ? "75vh" : "80px",
                    }
                  : {
                      width: isExpanded ? "65%" : isShrunk ? "10%" : "20%",
                      minWidth: isExpanded ? "500px" : isShrunk ? "60px" : "120px",
                      height: "100%",
                    }
              }
              transition={{ 
                duration: 0.3, 
                ease: [0.25, 0.1, 0.25, 1],
                layout: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
              }}
            >
              {/* Pillar Frame */}
              <div
                className={`group relative w-full max-w-full min-w-0 h-full border rounded-xl transition-all duration-300 ${
                  isExpanded
                    ? `border-neutral-700 bg-neutral-800 shadow-xl overflow-hidden ${isMobile ? "flex flex-col" : ""}`
                    : `border-neutral-800 bg-neutral-900 hover:border-neutral-700 active:border-neutral-700 active:scale-[0.98] overflow-hidden ${!isMobile ? "cursor-pointer" : ""}`
                } ${isMobile ? (isExpanded ? "min-h-[400px] max-h-[75vh]" : "h-[80px]") : "h-full overflow-hidden"} ${isMobile && !isExpanded ? "cursor-pointer touch-manipulation" : ""}`}
                onClick={() => (isMobile && isExpanded) ? undefined : handlePillarClick(pillar.id)}
              >
                {/* Mobile: Horizontal title when collapsed */}
                {isMobile && !isExpanded && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-between px-4 sm:px-6 pointer-events-none z-10 overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-neutral-200 font-semibold text-base sm:text-lg tracking-tight flex-1 min-w-0 truncate">
                      {pillar.title}
                    </span>
                    <span className="text-neutral-500 text-xs sm:text-sm opacity-80 flex-shrink-0 ml-3 font-medium whitespace-nowrap">Tap to expand</span>
                  </motion.div>
                )}

                {/* Desktop: Vertical Title - Only show when NOT mobile */}
                {!isMobile && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                    initial={{ rotate: 180, opacity: 1, scale: 1 }}
                    animate={{
                      opacity: isExpanded ? 0 : 1,
                      scale: isExpanded ? 0.85 : 1,
                      rotate: 180,
                    }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                    }}
                  >
                    <span className={`font-semibold text-4xl lg:text-5xl tracking-tight transition-colors ${
                      isExpanded
                        ? "text-neutral-300"
                        : "text-neutral-300 group-hover:text-neutral-100"
                    }`}>
                      {pillar.title}
                    </span>
                  </motion.div>
                )}

                {/* Horizontal Title */}
                <AnimatePresence>
                  {isExpanded && (
                    <>
                      {/* Mobile: Title with close button */}
                      {isMobile && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                          className="flex items-center justify-between px-4 sm:px-6 pt-5 sm:pt-6 pb-3 z-30 relative border-b border-neutral-700/50"
                        >
                          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100">
                            {pillar.title}
                          </h2>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedId(null);
                            }}
                            className="text-neutral-400 hover:text-neutral-200 text-3xl leading-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-700/50 active:bg-neutral-700 transition-colors touch-manipulation"
                            aria-label="Close"
                          >
                            ×
                          </button>
                        </motion.div>
                      )}
                      {/* Desktop: Absolute positioned title with close button */}
                      {!isMobile && (
                        <motion.div
                          initial={{ opacity: 0, y: -20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.9 }}
                          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
                          className="absolute top-8 left-6 right-6 z-30 flex items-center justify-between"
                        >
                          <h2 className="text-3xl font-semibold text-neutral-100 pointer-events-none">
                            {pillar.title}
                          </h2>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedId(null);
                            }}
                            className="text-neutral-400 hover:text-neutral-200 text-3xl leading-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-700/50 active:bg-neutral-700 transition-colors pointer-events-auto"
                            aria-label="Close"
                          >
                            ×
                          </button>
                        </motion.div>
                      )}
                    </>
                  )}
                </AnimatePresence>

                {/* Content */}
                <AnimatePresence mode="wait">
                  {isExpanded ? (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ 
                        opacity: 0, 
                        y: 4,
                        transition: { 
                          duration: 0.2, 
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }}
                      transition={{ 
                        duration: 0.25, 
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      className={`w-full max-w-full ${isMobile ? "flex-1 overflow-y-auto" : "h-full overflow-y-auto"} ${isMobile ? "p-4 sm:p-5" : "p-4 sm:p-6 md:p-8"} relative z-20 break-words`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {pillar.component}
                    </motion.div>
                  ) : null}
                </AnimatePresence>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

