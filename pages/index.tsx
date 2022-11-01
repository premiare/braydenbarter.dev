import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <title>Brayden Barter | Front End Developer</title>
      <section className="min-h-[calc(100vh-64px)] flex items-center">
        <div className="container-xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-teal-300 text-center">
              Brayden Barter
            </h1>
            <h2 className="text-4xl mt-2 text-gray-300 text-center">
              Front End Developer
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
