import { NextRequest } from "next/server";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI || "http://127.0.0.1:3000/api/spotify";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    // Step 1: Redirect to Spotify authorization
    const scope = "user-read-currently-playing user-read-recently-played user-top-read";
    const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
      response_type: "code",
      client_id: client_id || "",
      scope,
      redirect_uri,
    })}`;
    
    return Response.redirect(authUrl);
  }

  // Step 2: Exchange code for tokens
  try {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    
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
      return Response.json({
        success: true,
        refresh_token: data.refresh_token,
        message: "Add this to your .env file as SPOTIFY_REFRESH_TOKEN",
      });
    }

    return Response.json({ error: "No refresh token received", data }, { status: 400 });
  } catch (error) {
    return Response.json({ error: "Failed to exchange code" }, { status: 500 });
  }
}

