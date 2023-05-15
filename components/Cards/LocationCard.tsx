import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { CardWrapper } from "./CardWrapper";
import Melbourne from "../../public/melbourne_apple.png";
import { CiLocationOn } from "react-icons/ci";

export const LocationCard = () => {
  return (
    <CardWrapper color="rgba(255, 255, 255, 0.15)">
      <div>
        <div className="flex flex-row gap-2 items-center align-middle z-10">
          <CiLocationOn className="text-lg" />
          <h3 className="text-base font-semibold leading-7 text-teal-300">
            Melbourne
          </h3>
        </div>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white z-100">
            Location
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300">
          Available to work hybrid or remote.
        </p>
      </div>
    </CardWrapper>
  );
};
