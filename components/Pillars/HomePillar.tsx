"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { LanyardTypes } from "../../lib/lanyard";

// Dynamically import Map to avoid SSR issues  
const Map = dynamic(() => import("../Map").then((mod) => ({ default: mod.Map })), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-neutral-900 rounded-xl flex items-center justify-center">
      <div className="text-neutral-500 text-sm">Loading map...</div>
    </div>
  ),
});

interface HomePillarProps {
  lanyardData: LanyardTypes;
}

export const HomePillar = ({ lanyardData }: HomePillarProps) => {

  // Determine online status
  const isOnline = lanyardData?.status === "online" || lanyardData?.status === "idle" || lanyardData?.status === "dnd";

  // Get status color and text - simplified to Online/Offline
  const getStatusDisplay = () => {
    const status = lanyardData?.status;
    
    // Online includes: online, idle, dnd
    if (status === "online" || status === "idle" || status === "dnd") {
      return {
        text: "I'm online",
        color: "text-green-400",
        dot: "bg-green-400",
      };
    }
    
    // Offline
    if (status === "offline") {
      return {
        text: "I'm offline",
        color: "text-neutral-500",
        dot: "bg-neutral-500",
      };
    }
    
    // Default to online if status is unknown
    return {
      text: "I'm online",
      color: "text-green-400",
      dot: "bg-green-400",
    };
  };

  const statusDisplay = getStatusDisplay();

  const spotifyInfo = lanyardData?.spotify;

  // Format artist: replace semicolons with commas
  const formattedArtist = spotifyInfo?.artist 
    ? spotifyInfo.artist.split(";").map((a: string) => a.trim()).join(", ")
    : null;

  // Construct Spotify URL
  const spotifyUrl = spotifyInfo?.track_id 
    ? `https://open.spotify.com/track/${spotifyInfo.track_id}`
    : null;

  return (
    <div className="h-full w-full max-w-full flex flex-col gap-4 sm:gap-5 md:gap-6 text-neutral-200 pt-2 sm:pt-8 md:pt-16" onClick={(e) => e.stopPropagation()}>
      {/* Location with Map */}
      <div className="w-full max-w-full">
        <p className="text-neutral-200 text-sm sm:text-base mb-2 sm:mb-3 break-words">
          I'm currently in{" "}
          <a
            href="https://www.google.com/maps/place/Melbourne+VIC,+Australia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-teal-400 transition-colors underline decoration-neutral-600 hover:decoration-teal-500 break-words"
            onClick={(e) => e.stopPropagation()}
          >
            Melbourne, Australia
          </a>
        </p>
        <div className="relative w-1/2 max-w-full h-28 sm:h-32 md:h-40 rounded-xl overflow-hidden border border-neutral-800 shadow-lg hover:border-neutral-700 transition-colors">
          <Map 
            center={[144.9631, -37.8136]} 
            zoom={11}
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Status Card */}
      <div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-800/50 transition-all">
        <div className="relative flex-shrink-0">
          <div className={`w-3 h-3 rounded-full ${statusDisplay.dot} shadow-lg`} />
          {isOnline && (
            <div className={`absolute top-0 left-0 w-3 h-3 rounded-full ${statusDisplay.dot} animate-ping opacity-75`} />
          )}
        </div>
        <p className={`text-sm sm:text-base font-medium ${statusDisplay.color}`}>
          {statusDisplay.text}
        </p>
      </div>

      {/* Spotify Card */}
      {spotifyInfo ? (
        spotifyUrl ? (
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="spotify-card group/spotify relative overflow-hidden rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 hover:border-green-500/50 hover:from-neutral-800/90 hover:to-neutral-700/50 transition-all duration-300 cursor-pointer"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent opacity-0 group-hover/spotify:opacity-100 transition-opacity duration-300" />
            
            {/* External link arrow indicator - only shows when hovering THIS specific card */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover/spotify:opacity-100 translate-x-2 -translate-y-2 group-hover/spotify:translate-x-0 group-hover/spotify:translate-y-0 transition-all duration-300 pointer-events-none z-10">
              <svg 
                className="w-4 h-4 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </div>
            
            <div className="relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4">
              {/* Album Art */}
              {spotifyInfo.album_art_url && (
                <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shadow-lg ring-1 ring-neutral-700/50 group-hover/spotify:ring-green-500/30 transition-all">
                  <img
                    src={spotifyInfo.album_art_url}
                    alt={`${spotifyInfo.song} album art`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {/* Track Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  <span className="text-[10px] sm:text-xs font-medium text-green-500 uppercase tracking-wider">Now Playing</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-neutral-100 truncate group-hover/spotify:text-green-400 transition-colors">
                  {spotifyInfo.song}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 truncate">
                  {formattedArtist}
                </p>
              </div>
            </div>
          </a>
        ) : (
          <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 hover:border-neutral-700 hover:from-neutral-800/90 hover:to-neutral-700/50 transition-all duration-300">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4">
              {/* Album Art */}
              {spotifyInfo.album_art_url && (
                <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shadow-lg ring-1 ring-neutral-700/50">
                  <img
                    src={spotifyInfo.album_art_url}
                    alt={`${spotifyInfo.song} album art`}
                    className="w-full h-full object-cover"
                  />
                  {/* Spotify icon overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                </div>
              )}
              
              {/* Track Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  <span className="text-[10px] sm:text-xs font-medium text-green-500 uppercase tracking-wider">Now Playing</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-neutral-100 truncate">
                  {spotifyInfo.song}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 truncate">
                  {formattedArtist}
                </p>
              </div>
            </div>
          </div>
        )
      ) : <></>}

    </div>
  );
};

