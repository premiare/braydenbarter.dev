import { SiSpotify, SiVisualstudio } from "react-icons/si";
import { SlGameController } from "react-icons/sl";
import { Lanyard } from "../../lib/lanyard";
import Image from "next/image";

export const SpotifyInfo = () => {
  const { spotify } = Lanyard();
  if (!spotify)
    return (
      <div className="flex flex-row gap-2 items-center justify-center">
        <SiSpotify className="text-gray-300" />
        <p className="text-gray-300">Not Currently Listening to Spotify</p>
      </div>
    );

  const newArtist = spotify.artist.split(";").join(", ");
  const shortenSong = spotify.song.split(" ").slice(0, 5).join(" ");
  const shortenArist = newArtist.split(" ").slice(0, 5).join(" ");

  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <SiSpotify className="text-green-500" />

        <div className="flex flex-col sm:flex-row ">
          <p className="flex sm:hidden truncate">{spotify && spotify.song}</p>
          <p className="flex sm:hidden truncate">{spotify && newArtist}</p>
          <p className="hidden sm:flex truncate">
            {spotify && spotify.song} - {spotify && newArtist}
          </p>
        </div>

        <div className="h-8 w-8 rounded-full animate-spin-slow">
          <img
            alt="Now Listening Album Art"
            src={spotify.album_art_url}
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export const DiscordInfo = () => {
  const { activity } = Lanyard();
  if (!activity) return null;

  if (activity.type === 2) return null;

  const isVsCode = () => {
    return activity.name === "Visual Studio Code";
  };
  return (
    <>
      <div className="flex flex-row items-center gap-2 w-100">
        {activity && isVsCode() && activity.type === 0 && (
          <>
            <SiVisualstudio className="h-8 text-teal-300" />
            <p className="">
              {activity.details} in {activity.name}
            </p>
          </>
        )}
        {activity && !isVsCode() && activity.type === 0 && (
          <>
            <SlGameController className="h-8 text-teal-300" />
            <p className="">Playing {activity.name}</p>
          </>
        )}
      </div>
    </>
  );
};
