const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5`;
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=5`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

// Base64 encode for Node.js runtime
const getBasicAuth = () => {
  const credentials = `${client_id}:${client_secret}`;
  return Buffer.from(credentials).toString("base64");
};

export const getAccessToken = async () => {
  const basic = getBasicAuth();
  
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refresh_token || "",
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  return response.json();
};


export const getNowPlaying = async () => {
  try {
    const tokenData = await getAccessToken();
    const access_token = tokenData?.access_token;

    if (!access_token) {
      return new Error("No access token");
    }

    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    return new Error("Failed to get access token");
  }
};

export const getTopTracks = async () => {
  try {
    const tokenData = await getAccessToken();
    const access_token = tokenData?.access_token;

    if (!access_token) {
      return new Error("No access token");
    }

    return fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    return new Error("Failed to get access token");
  }
};

export const getTopArtists = async () => {
  try {
    const tokenData = await getAccessToken();
    const access_token = tokenData?.access_token;

    if (!access_token) {
      return new Error("No access token");
    }

    return fetch(TOP_ARTISTS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    return new Error("Failed to get access token");
  }
};
