import { SiSpotify } from "react-icons/si";
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
            <div className="h-8 w-8 text-teal-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a1.001 1.001 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a1 1 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
              </svg>
            </div>
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
