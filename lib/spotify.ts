import querystring from "querystring";
import axios from "axios";
import Base64 from "crypto-js/enc-base64";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const base64Secret = process.env.SPOTIFY_BASE64;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const redirect_uri = "http://localhost:3000/";

// type SearchParams = {
//   grant_type: string;
//   refresh_token: string;
// };

const basic = Base64.stringify(Base64.parse(`${client_id}:${client_secret}`));
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const AUTH_ENDPOINT = `https://accounts.spotify.com/authorize?`;

const getAccessToken = async () => {
  console.log("spotyify basic", basic);
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64Secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
};

export const getNowPlaying = async () => {
  const access_token = process.env.SPOTIFY_ACCESS_TOKEN;
  // const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopTracks = async () => {
  const access_token = process.env.SPOTIFY_ACCESS_TOKEN;
  // const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
