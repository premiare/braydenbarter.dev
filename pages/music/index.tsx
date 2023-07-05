import React, { useEffect, useState } from "react";
import { SpotifyStats } from "../../components/SpotifyStats";
import querystring from "querystring";
import topTracks from "../../@data/mockSpotify.json";
import Balancer from "react-wrap-balancer";
import { Client } from "spotify-api.js";
// import { getAccessToken, getNowPlaying, getTopTracks } from "../../lib/spotify";
import { NextPage } from "next";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import fetcher from "../../lib/fetcher";
import useSWR from "swr";

type MusicPageProps = {
  spotify_client_token: string;
  spotify_client_secret: string;
  // other props
};

export const MusicPage: NextPage<MusicPageProps> = (props: any) => {
  const { data } = useSWR("/api/spotify/now", fetcher);

  console.log("Data in music", data);
  const { spotify_client_token, spotify_client_secret } = props;
  console.log(props);

  return (
    <>
      <title>Music | Brayden Barter</title>
      <div className="flex flex-col items-center align-middle text-center">
        <h1 className="text-4xl mb-8 md:m-8 text-center underline text-teal-300">
          Music
        </h1>
        <p>
          {spotify_client_token} {spotify_client_secret}
        </p>

        <h2 className="text-xl ">
          <Balancer>
            Here are my latest top tracks from Spotify, if you want to hear a
            sample of the song just hover over it, click and hold!
          </Balancer>
        </h2>
      </div>
      <SpotifyStats topTracks={topTracks} />
    </>
  );
};

export const getStaticProps = async () => {
  console.log("getStaticProps");
  return {
    props: {
      spotify_client_token: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      spotify_client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      // tracks: topTracks || [],
    },
  };
};

export default MusicPage;
