import Image from "next/image";
import { SiGithub, SiLinkedin, SiSpotify, SiTwitter } from "react-icons/si";
import { CardWrapper } from "./CardWrapper";
import Melbourne from "../../public/melbourne_apple.png";
import { CiLocationOn } from "react-icons/ci";

export const TwitterCard = () => {
  return (
    <CardWrapper
      color="rgba(96, 165, 250, 0.35)"
      link="https://twitter.com/premiare"
    >
      <div>
        <div className="flex flex-row gap-2 items-center align-middle z-10">
          <SiTwitter className="text-lg" />
          <h3 className="text-base font-semibold leading-7 text-teal-300">
            @premiare
          </h3>
        </div>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white z-100">
            Twitter
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300">My Twitter</p>
      </div>
    </CardWrapper>
  );
};
