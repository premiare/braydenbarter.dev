import { getNowPlaying } from "../../../lib/spotify";
import { NextRequest } from "next/server";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

// Determine redirect URI based on environment
// Use 127.0.0.1 instead of localhost (Spotify security requirement)
const getRedirectUri = (request: NextRequest): string => {
  const host = request.headers.get("host") || "";
  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1");
  return isLocalhost 
    ? "http://127.0.0.1:3000/api/spotify"
    : `https://${host}/api/spotify`;
};

export async function GET(request: NextRequest) {
  // Handle OAuth callback
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state"); // Check if this is a local dev request
  
  if (code) {
    try {
      const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
      const redirect_uri = getRedirectUri(request);
      
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${basic}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri,
        }).toString(),
      });

      const data = await response.json();

      if (data.refresh_token) {
        // Redirect to callback page with token
        return Response.redirect(new URL(`/callback?token=${data.refresh_token}`, request.url));
      }

      return new Response(
        `
        <html>
          <head><title>Spotify Auth Error</title></head>
          <body style="font-family: system-ui; padding: 2rem; max-width: 600px; margin: 0 auto;">
            <h1>❌ Failed to get refresh token</h1>
            <pre>${JSON.stringify(data, null, 2)}</pre>
          </body>
        </html>
      `,
        {
          status: 400,
          headers: { "Content-Type": "text/html" },
        }
      );
    } catch (error: any) {
      return new Response(
        `
        <html>
          <body>
            <h1>Error</h1>
            <p>${error.message}</p>
          </body>
        </html>
      `,
        {
          status: 500,
          headers: { "Content-Type": "text/html" },
        }
      );
    }
  }

  // Handle now playing request
  try {
    const response = await getNowPlaying();

    if (response instanceof Error) {
      return Response.json({ isPlaying: false }, {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      });
    }

    if (response.status === 204 || response.status > 400) {
      return Response.json({ isPlaying: false }, {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      });
    }

    const song = await response.json();

    if (song.item === null) {
      return Response.json({ isPlaying: false }, {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists
      .map((_artist: any) => _artist.name)
      .join(", ");
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0]?.url;
    const songUrl = song.item.external_urls.spotify;

    return Response.json(
      {
        album,
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
        },
      }
    );
  } catch (error) {
    return Response.json({ isPlaying: false }, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    });
  }
}

