import Image from "next/image";
import { SiGithub, SiLinkedin, SiSpotify, SiTwitter } from "react-icons/si";
import { CardWrapper } from "./CardWrapper";
import Melbourne from "../../public/melbourne_apple.png";
import { CiLocationOn } from "react-icons/ci";

export const TwitchCard = () => {
  return (
    <CardWrapper
      color="rgba(100, 65, 165, 0.25)"
      link="https://twitch.tv/premiare"
    >
      <div>
        <div className="flex flex-row gap-2 items-center align-middle z-10">
          <SiTwitter className="text-lg" />
          <h3 className="text-base font-semibold leading-7 text-teal-300">
            premiare
          </h3>
        </div>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white z-100">
            Twitch
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300">My Twitch</p>
      </div>
    </CardWrapper>
  );
};