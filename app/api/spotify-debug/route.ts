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
    has_client_id: !!client_id,
    has_client_secret: !!client_secret,
    redirect_uri,
    auth_url: authUrl,
    message: "Check that your .env file has NEXT_PUBLIC_SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET",
  });
}

