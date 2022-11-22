import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { SlGameController, SlSocialLinkedin } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import {
  Lanyard,
  LanyardTypes,
  Spotify,
  Activity,
  Info,
} from "../../lib/lanyard";
import { SpotifyInfo, DiscordInfo } from "../Lanyard";
import clsx from "clsx";
import { SiDiscord, SiSpotify, SiVisualstudio } from "react-icons/si";

const NavLinks = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/about",
    text: "About",
  },
  {
    to: "/projects",
    text: "Projects",
  },
  // {
  //   to: "/contact",
  //   text: "Contact",
  // },
];

const SocialIcons = [
  {
    name: "Github",
    to: "https://github.com/premiare",
    icon: <VscGithubAlt />,
  },
  {
    name: "LinkedIn",
    to: "https://www.linkedin.com/in/braydenbarter/",
    icon: <SlSocialLinkedin />,
  },
  {
    name: "Twitter",
    to: "https://twitter.com/premiare",
    icon: <CiTwitter />,
  },
];

const NavLink = ({
  to,
  text,
  isMobile,
  onClick,
  route,
}: {
  to: string;
  text: string;
  isMobile: boolean;
  onClick?: () => void;
  route: any;
}) => {
  return (
    <>
      <Link
        href={to}
        className={clsx(
          isMobile
            ? "text-6xl font-bold last-of-type:mb-8 transition transform ease-in-out"
            : "text-xl",
          "hover:text-teal-300 relative group",
          route === to ? "text-teal-300" : "text-neutral-100"
        )}
        onClick={onClick}
      >
        {text}
        <span
          className={clsx(
            route === to ? "w-full" : "w-0",
            "absolute -bottom-3 lg:bottom-0 left-0 group-hover:w-full h-[1px] bg-teal-300 group-hover:transition-all"
          )}
        ></span>
        {/* <span className="absolute bottom-0 right-1/2 w-0 h-[1px] bg-teal-300 group-hover:w-1/2 group-hover:transition-all"></span> */}
      </Link>
    </>
  );
};

const SocialLink = ({
  to,
  text,
  icon,
  isMobile,
  onClick,
}: {
  to: string;
  text: string;
  icon: JSX.Element;
  isMobile: boolean;
  onClick?: () => void;
}) => {
  return (
    <>
      <Link
        className={clsx(
          isMobile ? "text-6xl" : "text-3xl",
          "hover:text-teal-300 transition"
        )}
        href={to}
        target="_blank"
      >
        {icon}
      </Link>
    </>
  );
};

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const route = useRouter();

  const { spotify, activity, info } = Lanyard();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-16">
      {/* DESKTOP NAVIGATION */}
      <div
        className={clsx(
          scrollY > 50
            ? "justify-around py-4 bg-black/30 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10 transition"
            : "justify-around py-4 bg-transparent backdrop-blur-md w-full fixed top-0 left-0 right-0 z-10 transition",
          "hidden md:flex"
        )}
      >
        <div className="flex justify-center gap-4 items-center space-between w-[25%] mx-auto">
          {NavLinks.map((link) => (
            <NavLink
              route={route.pathname}
              key={link.text}
              to={link.to}
              text={link.text}
              isMobile={isMenuOpen}
            />
          ))}
        </div>
        <div className="flex justify-center gap-4 items-center space-between w-[25%] mx-auto">
          <div className="relative">
            <SiDiscord className="text-3xl" />
            {activity ? (
              <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full motion-safe:animate-ping"></div>
            ) : (
              <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
            )}
          </div>

          {SocialIcons.map((icon) => (
            <SocialLink
              isMobile={isMenuOpen}
              key={icon.name}
              to={icon.to}
              text={icon.name}
              icon={icon.icon}
            />
          ))}
        </div>
      </div>
      {/* MOBILE NAVIGATION */}
      <div className="flex md:hidden">
        <div
          className={clsx(
            scrollY > 50 && !isMenuOpen ? "backdrop-blur-sm bg-black/10" : "",
            "w-[100%] h-16 z-10 fixed top-0 left-0"
          )}
        >
          <div
            className={clsx(
              "h-12 w-12 flex items-center justify-center fixed z-10 right-2 top-2 text-4xl text-teal-300"
            )}
          >
            {!isMenuOpen && (
              <AiOutlineMenu
                onClick={handleMenuOpen}
                className="z-100 cursor-pointer fixed"
              />
            )}
          </div>
        </div>
        <div
          className={clsx(
            !isMenuOpen ? "-translate-y-full" : "translate-y-0",
            "flex flex-col justify-center items-center gap-4 bg-black/80 backdrop-blur-md shadow-md w-full h-full fixed top-0 left-0 right-0 z-10 transition transform ease-in-out duration-500"
          )}
        >
          <div className="h-12 w-12 flex items-center justify-center absolute right-2 top-2 text-4xl text-teal-300">
            {isMenuOpen && (
              <AiOutlineClose
                onClick={handleMenuOpen}
                className="z-100 cursor-pointer"
              />
            )}
          </div>
          {NavLinks.map((link) => (
            <NavLink
              route={route.pathname}
              onClick={handleMenuOpen}
              key={link.text}
              to={link.to}
              text={link.text}
              isMobile={true}
            />
          ))}
          <div className="flex flex-row space-between mx-auto gap-4">
            {SocialIcons.map((icon) => (
              <SocialLink
                onClick={handleMenuOpen}
                isMobile={true}
                key={icon.name}
                to={icon.to}
                text={icon.name}
                icon={icon.icon}
              />
            ))}
          </div>
          <div className="pt-8">
            <SpotifyInfo />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
