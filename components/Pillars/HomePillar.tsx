"use client";

import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { NowPlayingSong } from "../../types/types";
import { LanyardTypes } from "../../lib/lanyard";

interface GitHubRepo {
  name: string;
  pushed_at: string;
  html_url: string;
  private: boolean;
}

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
  const { data: githubData } = useSWR<{ reposData: GitHubRepo[] }>("/api/github", fetcher);

  const latestRepo = githubData?.reposData?.sort(
    (prev, current) =>
      new Date(current.pushed_at).getTime() - new Date(prev.pushed_at).getTime()
  )?.[0];

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
    <div className="h-full flex flex-col gap-3 sm:gap-4 md:gap-6 text-neutral-200 pt-2 sm:pt-8 md:pt-16">
      {/* Location with Map */}
      <div>
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
        <div className="relative w-full h-28 sm:h-32 md:h-40 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-lg">
          {/* Dark filter overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 via-neutral-900/30 to-neutral-900/50 z-10 pointer-events-none rounded-xl" />
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126154.44027643423!2d144.893!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e77!2sMelbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ 
              border: 0, 
              filter: "grayscale(0.5) brightness(0.6) contrast(1.2) saturate(0.7)",
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="pointer-events-none"
          />
          
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

      {/* Latest Git Commit */}
      <div className="mt-auto">
            <h3 className="text-sm font-medium mb-3 text-neutral-400 uppercase tracking-wider break-words">Latest Commit</h3>
        {latestRepo ? (
          <div>
            <a
              href={latestRepo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-200 hover:text-neutral-100 transition-colors block"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-medium break-words">{latestRepo.name}</p>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1 break-words">
                {new Date(latestRepo.pushed_at).toLocaleDateString()}
              </p>
              <p className="text-[10px] sm:text-xs text-neutral-600 mt-2 break-words">
                {latestRepo.private ? "Private" : "Public"}
              </p>
            </a>
          </div>
        ) : (
          <p className="text-neutral-600 text-sm">Loading...</p>
        )}
      </div>
    </div>
  );
};

