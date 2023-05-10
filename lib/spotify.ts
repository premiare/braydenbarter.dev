import querystring from "querystring";
import Base64 from "crypto-js/enc-base64";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

// const basic = Base64.stringify(Base64.parse(`${client_id}:${client_secret}`));
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const AUTH_ENDPOINT = `https://accounts.spotify.com/authorize?`;

export const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "client_credentials",
    }),
  });

  return response.json();
};

const expires_in = async () => {
  const { expires_in } = await getAccessToken();
  return expires_in;
};

let tokenExpirationTime = 0;
let refreshToken = "";

export const getAuthorization = async () => {
  const response = await fetch(
    AUTH_ENDPOINT +
      querystring.stringify({
        client_id,
        grant_type: "authorization_code",
        response_type: "code",
        redirect_uri: "http://localhost:3000",
        scope: "user-read-private user-read-email",
      })
  );

  return response.json();
};

export const getRefreshToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const responseData = await response.json();
  const access_token = await getAccessToken();
  tokenExpirationTime = Date.now() + responseData.expires_in * 1000;
  refreshToken = responseData.refresh_token;

  return access_token;
};

export const getNowPlaying = async () => {
  // const access_token = process.env.SPOTIFY_ACCESS_TOKEN;
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopTracks = async () => {
  // const access_token = process.env.SPOTIFY_ACCESS_TOKEN;
  const { access_token } = await getAccessToken();

  if (!access_token) {
    return new Error("No access token");
  }

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
