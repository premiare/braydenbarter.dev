import React from "react";
import { SpotifySample } from "../SpotifySample";

type Props = {};

export const SpotifyStats = ({ topTracks }: { topTracks: any }) => {
  return (
    <>
      <div className="flex flex-wrap w-5/6 mx-auto gap-2 align-start items-center justify-center p-2 mt-12">
        {/* <button onClick={() => console.log("clicked")}>
          The Oh Shit Stop the Song Button
        </button> */}
        {topTracks?.items?.map((track: any) => (
          <SpotifySample key={track.name} src={track.preview_url}>
            <div className="flex flex-row justify-start p-2 border-2 border-teal-300 rounded-md hover:bg-teal-300 text-white hover:text-[#1d1d1d] hover:shadow-lg hover:cursor-grab active:cursor-grabbing">
              <div className="flex flex-row items-center align-middle gap-2 justify-center">
                <div className="flex flex-row justify-center">
                  <img
                    className="w-16 h-16 rounded-lg"
                    src={track.album.images[0].url}
                    alt="album cover"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="">{track.name}</p>
                  <p className="font-extrabold">{track.artists[0].name}</p>
                </div>
              </div>
            </div>
          </SpotifySample>
        ))}
      </div>
    </>
  );
};
