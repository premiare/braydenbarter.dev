import Image from "next/image";
import { SiGithub, SiLinkedin, SiSpotify } from "react-icons/si";
import { CardWrapper } from "./CardWrapper";
import Melbourne from "../../public/melbourne_apple.png";
import { CiLocationOn } from "react-icons/ci";

export const SpotifyCard = () => {
  return (
    <CardWrapper
      color="rgba(30, 215, 96, 0.25)"
      link="https://open.spotify.com/user/1244620846?si=1f3f6fb189344e5a"
    >
      <div>
        <div className="flex flex-row gap-2 items-center align-middle z-10">
          <SiSpotify className="text-lg" />
          <h3 className="text-base font-semibold leading-7 text-teal-300">
            Brayden Barter
          </h3>
        </div>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white z-100">
            Spotify
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300">
          My Spotify account, where I listen to music and podcasts.
        </p>
      </div>
    </CardWrapper>
  );
};
