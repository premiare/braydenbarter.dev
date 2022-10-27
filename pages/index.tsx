import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="container-xl mx-auto font-sans bg-neutral-800 h-[1800px]">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-7xl font-bold text-teal-300 text-center">
          Brayden Barter
        </h1>
        <h2 className="text-4xl mt-2 text-gray-300 text-center">
          Front End Developer
        </h2>
        <div className="flex flex-row gap-4 mt-4">
          <a
            href="https://github.com/premiare"
            target="_blank"
            className=""
            rel="noreferrer"
          >
            {/* <Image src="./assets/github.svg" alt="Github" className="w-10 h-10" id="socialIcon github"> */}
          </a>
          <a
            href="https://www.linkedin.com/in/braydenbarter/"
            target="_blank"
            className=""
            rel="noreferrer"
          >
            {/* <Image src="./assets/linkedin.svg" alt="Github" className="w-10 h-10" id="socialIcon linkedin"> */}
          </a>
          <a
            href="https://twitter.com/premiare"
            target="_blank"
            className=""
            rel="noreferrer"
          >
            {/* <Image src="./assets/twitter.svg" alt="Github" className="w-10 h-10" id="socialIcon twitter"> */}
          </a>
        </div>
      </div>
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm">
        Full portfolio website coming soon...
      </p>
    </div>
  );
};

export default Home;
