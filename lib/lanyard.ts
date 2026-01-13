"use client";

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
  details?: string;
  state?: string;
  emoji?: any;
  flags?: number;
  application_id?: string;
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
  sync_id?: string;
  timestamps?: {
    start?: number;
    end?: number;
  };
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

export const Lanyard = (): LanyardTypes => {
  const data = useLanyardWS(DISCORD_ID);

  const spotify = useMemo(() => {
    // Primary: Check the spotify object from Lanyard
    if (data?.spotify && data.spotify.song) {
      const { song, artist, album_art_url, track_id } = data.spotify;
      // Handle nullable fields from use-lanyard
      if (song && artist) {
        return { 
          song, 
          artist, 
          album_art_url: album_art_url || "", 
          track_id: track_id || "" 
        };
      }
    }
    
    // Fallback: Check activities array for Spotify activity
    if (data?.activities) {
      const spotifyActivity = data.activities.find(
        (activity) => activity.name === "Spotify" && activity.type === 2
      );
      if (spotifyActivity) {
        // Parse Spotify data from activity
        const song = spotifyActivity.details || "";
        const artist = spotifyActivity.state || "";
        const album_art_url = spotifyActivity.assets?.large_image 
          ? `https://i.scdn.co/image/${spotifyActivity.assets.large_image.replace("spotify:", "")}`
          : "";
        const track_id = spotifyActivity.sync_id || "";
        
        if (song && artist) {
          return { song, artist, album_art_url, track_id };
        }
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
        data.activities[0];
      return { name, type, details, emoji, flags, application_id };
    }
    return null;
  }, [data]);

  const info = useMemo(() => {
    if (!data?.discord_user) return null;
    const { username, discriminator, avatar } = data.discord_user;
    // Handle nullable avatar from use-lanyard
    return { username, discriminator, avatar: avatar || "" };
  }, [data]);

  const status = useMemo(() => {
    if (!data?.discord_status) return null;
    return data.discord_status as "online" | "idle" | "dnd" | "offline";
  }, [data]);

  return { activity, spotify, info, status };
};
