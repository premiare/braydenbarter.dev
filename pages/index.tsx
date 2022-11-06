import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import NowPlaying from "../components/NowPlaying";
import { getNowPlaying } from "../lib/spotify";

import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
import Base64 from "crypto-js/enc-base64";
const Home: NextPage = () => {
  type SearchParams = {
    grant_type: string;
    refresh_token: string;
  };

  const basic = Base64.stringify(Base64.parse(`${client_id}:${client_secret}`));
  const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
  const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  console.log(basic);

  const getAccessToken = async () => {
    console.log(basic);
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });
    return response.json();
  };

  const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();
    console.log("now playing?");

    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  return (
    <>
      <title>Brayden Barter | Front End Developer</title>
      <section className="min-h-[calc(100vh-64px)] flex items-center">
        <div className="container-xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-teal-300 text-center">
              Brayden Barter
            </h1>
            <h2 className="text-4xl mt-2 text-gray-300 text-center">
              Front End Developer
            </h2>
          </div>
          <NowPlaying />
        </div>
      </section>
    </>
  );
};

export default Home;
