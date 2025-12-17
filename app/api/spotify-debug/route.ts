const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = "http://127.0.0.1:3000/api/spotify";

export async function GET() {
  const scope = "user-read-currently-playing user-read-recently-played user-top-read";
  
  const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
    response_type: "code",
    client_id: client_id || "",
    scope,
    redirect_uri,
    show_dialog: "true",
  })}`;

  return Response.json({
    client_id,
    client_id_matches: client_id === "0f780178cc1b407a94ca4385e7ce8193",
    has_client_secret: !!client_secret,
    redirect_uri,
    auth_url: authUrl,
    registered_uris: [
      "https://braydenbarter-dev.vercel.app/",
      "http://127.0.0.1:3000/callback",
      "http://127.0.0.1:3000/api/spotify",
      "https://alecchendev.github.io/spotify-refresh-token",
      "http://127.0.0.1:3000",
    ],
    message: "Check that client_id matches exactly and redirect_uri is in registered_uris",
  });
}

