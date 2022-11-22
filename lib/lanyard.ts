import { useMemo } from "react";
import { useLanyardWS } from "use-lanyard";

const DISCORD_ID = "227252253323427840";

export type Spotify = {
  song: string;
  artist: string;
  album_art_url: string;
  track_id: string;
};

export type Activity = {
  name: string;
  type: number;
  details: string;
};

export type Info = {
  username: string;
  avatar: string;
  discriminator: string;
};

export type LanyardTypes = {
  spotify: Spotify;
  activity: Activity;
  info: Info;
};

export const Lanyard = () => {
  const data = useLanyardWS(DISCORD_ID);

  !data && console.log("Attempting to connect to Discord...");

  const spotify = useMemo(() => {
    if (!data?.spotify) return null;
    const { song, artist, album_art_url, track_id } = data.spotify;
    return { song, artist, album_art_url, track_id };
  }, [data]);

  const activity = useMemo(() => {
    if (!data?.activities) return null;
    if (data.activities.length) {
      const { name, type, details } = data?.activities[0];
      return { name, type, details };
    }
    return null;
  }, [data]);

  const info = useMemo(() => {
    if (!data?.discord_user) return null;
    const { username, discriminator, avatar } = data.discord_user;
    return { username, discriminator, avatar };
  }, [data]);

  return { activity, spotify, info };
};
