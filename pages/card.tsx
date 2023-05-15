import { CiLocationOn } from "react-icons/ci";
import { Card } from "../components/Cards/BaseCard";
import {
  SiDiscord,
  SiGithub,
  SiLinkedin,
  SiSpotify,
  SiTwitch,
  SiTwitter,
} from "react-icons/si";
import { GitHubCard } from "../components/Cards/GitHubCard";
import { LocationCard } from "../components/Cards/LocationCard";
import { LinkedInCard } from "../components/Cards/LinkedInCard";
import { SpotifyCard } from "../components/Cards/SpotifyCard";
import { TwitterCard } from "../components/Cards/TwitterCard";
import { TwitchCard } from "../components/Cards/TwitchCard";
import { DiscordCard } from "../components/Cards/DiscordCard";

const cardInfo = [
  {
    title: "GitHub",
    subtitle: "Premiare",
    desc: "My GitHub contributions",
    icon: <SiGithub />,
    color: "rgba(14, 165, 233, 0.15)",
  },
  {
    title: "Melbourne",
    subtitle: "Location",
    desc: "My Location",
    icon: <CiLocationOn />,
    color: "rgba(255, 255, 255, 0.25)",
    image: "/../public/melbourne_apple.png",
  },
  {
    title: "LinkedIn",
    subtitle: "Brayden Barter",
    desc: "My LinkedIn",
    icon: <SiLinkedin />,
    color: "rgba(0, 119, 181, 0.25)",
  },
  {
    title: "Spotify",
    subtitle: "Brayden Barter",
    desc: "My Spotify",
    icon: <SiSpotify />,
    color: "rgba(30, 215, 96, 0.25)",
  },
  {
    title: "Twitter",
    subtitle: "@premiare",
    desc: "My Twitter",
    icon: <SiTwitter />,
    color: "rgba(96, 165, 250, 0.35)",
  },
  {
    title: "Twitch",
    subtitle: "premiare",
    desc: "My Twitch",
    icon: <SiTwitch />,
    color: "rgba(100, 65, 165, 0.25)",
  },
  {
    title: "Discord",
    subtitle: "brayden²#1337",
    desc: "My Discord",
    icon: <SiDiscord />,
    color: "rgba(114, 137, 218, 0.25)",
  },
];

export default function CardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-wrap items-center justify-center gap-6 px-4 sm:px-0 sm:w-full md:w-6/12 lg:w-3/4">
        <GitHubCard />
        <LocationCard />
        <LinkedInCard />
        <SpotifyCard />
        <TwitterCard />
        <TwitchCard />
        <DiscordCard />
      </div>
    </div>
  );
}
