const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

export async function GET() {
  // Debug endpoint to check if credentials are set
  return Response.json({
    has_client_id: !!client_id,
    client_id_length: client_id?.length || 0,
    has_client_secret: !!client_secret,
    client_secret_length: client_secret?.length || 0,
    redirect_uri: "http://127.0.0.1:3000/callback",
    message: "Check that your .env file has NEXT_PUBLIC_SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET",
  });
}

