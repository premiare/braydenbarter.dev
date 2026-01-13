"use client";

import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { NowPlayingSong } from "../../types/types";
import { LanyardTypes } from "../../lib/lanyard";

interface TopArtist {
  name: string;
  image: string | null;
  url: string;
  genres: string[];
}

interface HomePillarProps {
  lanyardData: LanyardTypes;
}

export const HomePillar = ({ lanyardData }: HomePillarProps) => {
  const { data: spotifyData } = useSWR<NowPlayingSong>("/api/spotify", fetcher);
  const { data: topArtistsData } = useSWR<{ artists: TopArtist[] }>("/api/top-artists", fetcher);

  // Determine listening status - prioritize Discord Spotify, then Spotify API
  const listeningStatus = lanyardData?.spotify 
    ? `${lanyardData.spotify.song} by ${lanyardData.spotify.artist}`
    : spotifyData?.title && spotifyData?.artist
    ? `${spotifyData.title} by ${spotifyData.artist}`
    : null;

  // Determine online status
  const isOnline = lanyardData?.status === "online" || lanyardData?.status === "idle" || lanyardData?.status === "dnd";

  // Get status color and text with better Discord status handling
  const getStatusDisplay = () => {
    const status = lanyardData?.status;
    
    switch (status) {
      case "online":
        return {
          text: "I'm online",
          color: "text-green-400",
          dot: "bg-green-400",
        };
      case "idle":
        return {
          text: "I'm idle",
          color: "text-yellow-400",
          dot: "bg-yellow-400",
        };
      case "dnd":
        return {
          text: "I'm busy",
          color: "text-red-400",
          dot: "bg-red-400",
        };
      case "offline":
        return {
          text: "I'm offline",
          color: "text-neutral-500",
          dot: "bg-neutral-500",
        };
      default:
        // Default to online if status is unknown
        return {
          text: "I'm online",
          color: "text-neutral-400",
          dot: "bg-neutral-400",
        };
    }
  };

  const statusDisplay = getStatusDisplay();

  return (
    <div className="h-full w-full max-w-full flex flex-col gap-3 sm:gap-4 md:gap-6 text-neutral-200 pt-2 sm:pt-8 md:pt-16">
      {/* Location with Map */}
      <div className="w-full max-w-full">
        <p className="text-neutral-200 text-sm sm:text-base mb-2 sm:mb-3 break-words">
          I'm currently in{" "}
          <a
            href="https://www.google.com/maps/place/Melbourne+VIC,+Australia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-neutral-300 transition-colors underline decoration-neutral-600 hover:decoration-neutral-400 break-words"
            onClick={(e) => e.stopPropagation()}
          >
            Melbourne, Australia
          </a>
        </p>
        <div className="relative w-full max-w-full h-28 sm:h-32 md:h-40 rounded-xl overflow-hidden border border-neutral-800 shadow-lg bg-[#1a1a1a]">
          {/* Stylized dark map background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
              backgroundPosition: '-1px -1px, -1px -1px, -1px -1px, -1px -1px',
            }}
          />

          {/* Subtle radial gradient for depth */}
          <div className="absolute inset-0 bg-gradient-radial from-neutral-800/20 via-transparent to-neutral-900/40" />

          {/* Custom pin marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="relative">
              <div className="w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full animate-ping opacity-75" />
            </div>
          </div>
        </div>
      </div>

      {/* Online Status */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <div className={`w-2.5 h-2.5 rounded-full ${statusDisplay.dot}`} />
          {isOnline && (
            <div className={`absolute top-0 left-0 w-2.5 h-2.5 rounded-full ${statusDisplay.dot} animate-ping opacity-75`} />
          )}
        </div>
        <p className={`text-sm sm:text-base ${statusDisplay.color}`}>
          {statusDisplay.text}
        </p>
      </div>

      {/* Listening Status */}
      <div>
        {listeningStatus ? (
          <p className="text-neutral-200 text-sm sm:text-base break-words">
            I'm listening to{" "}
            <span className="text-neutral-400 hover:text-neutral-300 transition-colors break-words">
              {listeningStatus}
            </span>
          </p>
        ) : (
          <p className="text-neutral-400 text-sm sm:text-base break-words">
            Not currently listening
          </p>
        )}
      </div>

    </div>
  );
};

