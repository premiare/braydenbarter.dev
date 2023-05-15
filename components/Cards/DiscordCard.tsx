import Image from "next/image";
import {
  SiDiscord,
  SiGithub,
  SiLinkedin,
  SiSpotify,
  SiTwitter,
} from "react-icons/si";
import { CardWrapper } from "./CardWrapper";
import Melbourne from "../../public/melbourne_apple.png";
import { CiLocationOn } from "react-icons/ci";
import { DiscordInfo } from "../Lanyard";

export const DiscordCard = () => {
  return (
    <CardWrapper color="rgba(114, 137, 218, 0.25)">
      <div>
        <div className="flex flex-row gap-2 items-center align-middle z-10">
          <SiDiscord className="text-lg" />
          <h3 className="text-base font-semibold leading-7 text-teal-300">
            brayden²#1337
          </h3>
        </div>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white z-100">
            Discord
          </span>
        </div>
        <div className="text-sm text-wrap">
          <DiscordInfo />
        </div>
      </div>
    </CardWrapper>
  );
};
