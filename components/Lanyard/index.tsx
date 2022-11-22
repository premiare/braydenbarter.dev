import { SiSpotify, SiVisualstudio } from "react-icons/si";
import { SlGameController } from "react-icons/sl";
import { Lanyard } from "../../lib/lanyard";

export const SpotifyInfo = () => {
  const { spotify } = Lanyard();
  if (!spotify) return null;
  const newArtist = spotify.artist.split(";").join(", ");
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <SiSpotify className="text-green-500" />
        <p className="truncate">
          {spotify && spotify.song} - {spotify && newArtist}
        </p>
        <div className="h-8 w-8 rounded-full animate-spin-slow">
          <img
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
  console.log(activity);

  const isVsCode = () => {
    return activity.name === "Visual Studio Code";
  };

  return (
    <>
      <div className="flex flex-row items-center gap-2 w-100">
        {activity && isVsCode() && activity.type === 0 && (
          <>
            <SiVisualstudio className="h-8 text-teal-300" />
            <p className="truncate">
              {activity.details} in {activity.name}
            </p>
          </>
        )}
        {activity && !isVsCode() && activity.type === 0 && (
          <>
            <SlGameController className="h-8 text-teal-300" />
            <p className="truncate">Playing {activity.name}</p>
          </>
        )}
      </div>
    </>
  );
};
