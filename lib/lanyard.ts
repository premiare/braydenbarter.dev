import { useMemo } from "react";
import { useLanyard, useLanyardWS } from "use-lanyard";

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
  details?: string;
  state?: string;
  emoji?: any;
  flags?: number;
  application_id?: string;
};

export type Info = {
  username: string;
  avatar: string;
  discriminator: string;
};

export type LanyardTypes = {
  spotify: Spotify | null;
  activity: Activity | null;
  info: Info | null;
  status: "online" | "idle" | "dnd" | "offline" | null;
};

export const Lanyard = () => {
  const data = useLanyardWS(DISCORD_ID);

  !data && console.log("Attempting to connect to Discord...");

  const spotify = useMemo(() => {
    // First check direct spotify field (primary source)
    if (data?.spotify) {
      const { song, artist, album_art_url, track_id } = data.spotify;
      return { song, artist, album_art_url, track_id };
    }
    
    // Also check activities array for Spotify activity
    // Spotify activity in activities has the data directly on the activity object
    if (data?.activities) {
      const spotifyActivity = data.activities.find(
        (activity: any) => activity.name === "Spotify"
      ) as any;
      
      // Spotify activity data is directly on the activity object, not nested
      if (spotifyActivity?.song && spotifyActivity?.artist) {
        const { song, artist, album_art_url, track_id } = spotifyActivity;
        return { 
          song, 
          artist, 
          album_art_url: album_art_url || "", 
          track_id: track_id || "" 
        };
      }
    }
    
    return null;
  }, [data]);
  const activity = useMemo(() => {
    if (!data?.activities) return null;
    if (data.activities.length) {
      const notSpotifyActivities = data.activities.filter(
        (activity) => activity.name !== "Spotify"
      );

      if (notSpotifyActivities.length) {
        const { name, type, details, emoji, flags, application_id } =
          notSpotifyActivities[0];
        return { name, type, details, emoji, flags, application_id };
      }

      const { name, type, details, emoji, flags, application_id } =
        data?.activities[0];
      return { name, type, details, emoji, flags, application_id };
    }
    return null;
  }, [data]);

  const info = useMemo(() => {
    if (!data?.discord_user) return null;
    const { username, discriminator, avatar } = data.discord_user;
    return { username, discriminator, avatar };
  }, [data]);

  const status = useMemo(() => {
    if (!data?.discord_status) return null;
    return data.discord_status as "online" | "idle" | "dnd" | "offline";
  }, [data]);

  // Debug logging (remove in production)
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    console.log("Lanyard Data:", {
      raw: data,
      spotify,
      activity,
      info,
      status,
    });
  }

  return { activity, spotify, info, status };
};
