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

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code) {
      return Response.json({ error: "No code provided" }, { status: 400 });
    }

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
        code: code as string,
        redirect_uri,
      }).toString(),
    });

    const data = await response.json();

    if (data.refresh_token) {
      return Response.json({
        refresh_token: data.refresh_token,
      });
    }

    return Response.json(
      { error: "No refresh token received", details: data },
      { status: 400 }
    );
  } catch (error: any) {
    return Response.json(
      { error: "Failed to exchange code", message: error.message },
      { status: 500 }
    );
  }
}

