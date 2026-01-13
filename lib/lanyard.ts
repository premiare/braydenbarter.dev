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

  // Debug logging for development
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    if (!data) {
      console.log("[Lanyard] Connecting to Discord WebSocket...");
    }
  }

  const spotify = useMemo(() => {
    // Spotify data only comes through data.spotify field in Lanyard API
    // The activities array does not contain Spotify song/artist information
    if (data?.spotify) {
      const { song, artist, album_art_url, track_id } = data.spotify;
      return { song, artist, album_art_url, track_id };
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

  // Debug logging for development
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    console.log("[Lanyard] Current State:", {
      connected: !!data,
      listening_to_spotify: data?.listening_to_spotify || false,
      spotify_data: spotify,
      status,
      activities_count: data?.activities?.length || 0,
    });
  }

  return { activity, spotify, info, status };
};
