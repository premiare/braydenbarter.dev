import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { CardWrapper } from "./CardWrapper";
import Melbourne from "../../public/melbourne_apple.png";
import { CiLocationOn } from "react-icons/ci";

export const LinkedInCard = () => {
  return (
    <CardWrapper
      color="rgba(0, 119, 181, 0.25)"
      link="https://linkedin.com/in/braydenbarter"
    >
      <div>
        <div className="flex flex-row gap-2 items-center align-middle z-10">
          <SiLinkedin className="text-lg" />
          <h3 className="text-base font-semibold leading-7 text-teal-300">
            Brayden Barter
          </h3>
        </div>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white z-100">
            LinkedIn
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300">
          Available to work hybrid or remote.
        </p>
      </div>
    </CardWrapper>
  );
};