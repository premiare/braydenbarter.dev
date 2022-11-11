import React, { useState } from "react";
import { TECH as tech } from "../../@data/tech";
type Props = {};
console.log(tech);

const About = (props: Props) => {
  const Tech = [
    tech["next"],
    tech["react"],
    tech["node"],
    tech["typescript"],
    tech["javascript"],
    tech["html"],
    tech["css"],
    tech["tailwind"],
    tech["bootstrap"],
    tech["supabase"],
    tech["styledComponents"],
    tech["jquery"],
  ];

  const Tools = [
    tech["vscode"],
    tech["git"],
    tech["github"],
    tech["netlify"],
    tech["vercel"],
    tech["wsl"],
    tech["windows"],
  ];

  const Design = [tech["figma"], tech["premiere"], tech["photoshop"]];

  const techMap = Tech.map((t) => {
    return (
      <div
        key={t.name}
        className="flex flex-row items-center justify-center gap-2 "
      >
        <div className={`text-4xl ${t.class} hover:scale-110 transition-all`}>
          {t.icon}
        </div>
      </div>
    );
  });

  const toolsMap = Tools.map((t) => {
    return (
      <div
        key={t.name}
        className="flex flex-row items-center justify-center gap-2 group relative"
      >
        <div className={`text-4xl ${t.class} hover:scale-110 transition-all`}>
          {t.icon}
        </div>
      </div>
    );
  });

  const designMap = Design.map((t) => {
    return (
      <div
        key={t.name}
        className="flex flex-row items-center justify-center gap-2 group relative"
      >
        <div className={`text-4xl ${t.class} hover:scale-110 transition-all`}>
          {t.icon}
        </div>
      </div>
    );
  });

  const tidbits = [
    {
      emoji: "👨‍💻",
      text: "Code Writer",
    },
    {
      emoji: "🏂",
      text: "Snow Shredder",
    },
    {
      emoji: "🎮",
      text: "Video Game Enthusiast",
    },
    {
      emoji: "🏗️",
      text: "Future Startup Founder",
    },
  ];

  return (
    <>
      <title>About | Brayden Barter</title>
      <h1 className="text-4xl m-8 text-center underline">About</h1>

      <section className="min-h-[calc(100vh-64px)] flex justify-center flex-col">
        <div className="flex flex-row gap-4 flex-wrap justify-center items-center mx-auto mb-8">
          {tidbits.map((tidbit, index) => {
            return (
              <div
                key={index}
                className="flex flex-col rounded-md border border-neutral-700 p-8 px-4 bg-neutral-900 shadow-lg shadow-neutral-800 hover:border-teal-300 hover:shadow-neutral-900 transition-all duration-300 gap-4 items-center justify-center w-36 h-36 mx-auto"
              >
                <div className="text-4xl ">{tidbit.emoji}</div>
                <div className="text-white text-center text-md">
                  {tidbit.text}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-[95%] h-[90%] md:w-[55%] mx-auto min-h-full md:h-100 border border-neutral-700 rounded-md p-8 bg-neutral-900 flex flex-col shadow-lg shadow-neutral-800  hover:border-teal-300 hover:shadow-neutral-900 transition-all duration-300 gap-4">
          <div className="flex flex-col md:flex-row gap-4 w-full h-100 mx-auto">
            <div className="flex flex-col w-[90%] h-100 mx-auto p-0 py-2 md:p-8">
              <p>
                Front End Developer based in Melbourne, Aus. <br /> <br />I like
                to keep my ear to the ground in all aspects of the web
                development space and tech world in general, I use the{" "}
                <a
                  href="https://daily.dev/"
                  target="_blank"
                  className="hover:underline text-teal-300"
                  rel="noreferrer"
                >
                  daily.dev
                </a>{" "}
                browser extension to see what`s trending and what is up and
                coming. <br /> <br /> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Optio quibusdam reiciendis accusantium vero.
                Sunt reprehenderit dolor iste vel commodi numquam minima cumque
                animi doloribus quas. Voluptate facere in totam inventore.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[90%] md:w-[55%] justify-center gap-4 mx-auto flex-wrap">
            <div className="flex flex-col w-full">
              <h2 className="text-2xl pb-2 text-teal-300 underline text-center">
                Tech
              </h2>
              <div className="flex flex-row justify-center gap-4 flex-wrap">
                {techMap}
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl pb-2 text-teal-300 underline text-center">
                Tools
              </h2>
              <div className="flex flex-row mx-auto justify-center gap-4 flex-wrap">
                {toolsMap}
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl pb-2 text-teal-300 underline text-center">
                Design
              </h2>
              <div className="flex flex-row mx-auto justify-center gap-4 flex-wrap">
                {designMap}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
