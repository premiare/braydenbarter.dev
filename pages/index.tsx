import type { NextPage } from "next";
// import NowPlaying from "../components/NowPlaying";
import { useLanyard } from "use-lanyard";

import { SpotifyInfo, DiscordInfo } from "../components/Lanyard";

const DISCORD_ID = "227252253323427840";

const Home: NextPage = () => {
  const { data } = useLanyard(DISCORD_ID);
  return (
    <>
      <title>Brayden Barter | Front End Developer</title>
      <section className="min-h-[calc(100vh-64px)] flex items-center">
        <div className="container-xl mx-auto mt-[50%] md:mt-auto my-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-teal-300 text-center">
              Brayden Barter
            </h1>
            <h2 className="text-4xl mt-2 text-gray-300 text-center">
              Front End Developer
            </h2>
          </div>
          {data && (
            <div className="flex flex-col items-center justify-center mt-4">
              {data.spotify && <SpotifyInfo />}
              {data.activities && <DiscordInfo />}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
