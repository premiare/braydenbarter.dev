import Link from "next/link";
import React, { useState } from "react";
import { TECH as tech } from "../../@data/tech";

const About = () => {
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
    tech["mantine"],
    tech["expo"],
    tech["railway"]
  ];

  const Tools = [
    tech["vscode"],
    tech["git"],
    tech["github"],
    tech["netlify"],
    tech["vercel"],
    tech["wsl"],
    tech["windows"],
    tech["storyblok"],
    tech["storybook"]
  ];

  const Design = [tech["figma"], tech["premiere"], tech["photoshop"]];

  const concat = [...Tech, ...Tools, ...Design];

  const techMap = concat.map((t) => {
    return (
      <li key={t.name} className="flex items-center space-x-2 group">
        <div className={`text-3xl hover:scale-110 transition-all`}>
          {t.icon}
        </div>
        <span className="text-md">{t.name}</span>
      </li>
    );
  });

  const toolsMap = Tools.map((t) => {
    return (
      <li key={t.name} className="flex items-center space-x-2">
        <div
          className={`text-3xl hover:scale-110 transition-all`}
          style={{
            color: t.color,
          }}
        >
          {t.icon}
        </div>
        <span className="text-md">{t.name}</span>
      </li>
    );
  });

  const designMap = Design.map((t) => {
    return (
      <li key={t.name} className="flex items-center space-x-2">
        <div
          className={`text-3xl hover:scale-110 transition-all`}
          style={{
            color: t.color,
          }}
        >
          {t.icon}
        </div>
        <span className="text-md">{t.name}</span>
      </li>
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
      <h1 className="text-4xl mb-8 md:m-8 text-center underline text-teal-300">
        About
      </h1>

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
        <div className="w-[95%] h-[90%] md:w-[75%] lg:w-[65%] mx-auto min-h-full md:h-100 border border-neutral-700 rounded-md p-8 bg-neutral-900 flex flex-col shadow-lg shadow-neutral-800  hover:border-teal-300 hover:shadow-neutral-900 transition-all duration-300 gap-4 mb-12">
          <div className="flex flex-col md:flex-row gap-4 w-full h-100 mx-auto">
            <div className="flex flex-col w-[90%] h-100 mx-auto p-0 py-2 md:p-8 md:px-4 text-white">
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
                coming. <br /> <br /> I have experience as a Front End Developer
                at a small FinTech startup based in Melbourne. In that role, I
                worked with React, Tailwind, Mantine and PHP, as well as a
                legacy tech stack which was Vue, jQuery, CakePHP and Node.{" "}
                <br /> <br /> I am currently working on a few personal projects,
                which aren&apos;t quite ready to be shared on the{" "}
                <Link
                  href="/projects"
                  className="text-teal-300 hover:underline"
                >
                  Projects
                </Link>{" "}
                page, but they include some cool tech like Next.js, Supabase,
                OpenAI, React Native and more.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center gap-4 flex-wrap">
            <div className="flex flex-col w-full">
              <h2 className="text-2xl pb-8 text-white underline text-center">
                Tech
              </h2>
              <div className="flex flex-row justify-center gap-4 flex-wrap text-white">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4">
                  {techMap}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
