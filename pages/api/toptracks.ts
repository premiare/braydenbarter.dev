import { NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "../../lib/spotify";

export default async function handler(_: any, res: any) {
  const { access_token } = await getAccessToken();

  const response = await fetch(
    `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );
  res.status(200).json(data);
}
