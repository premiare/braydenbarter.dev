import { NextRequest } from "next/server";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

export async function GET(request: NextRequest) {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const scope = "user-read-private user-read-email";

  const response = await fetch(
    `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=http://127.0.0.1:3000`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  const data = await response.json();
  return Response.json(data);
}

