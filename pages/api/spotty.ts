import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const spotify = SpotifyApi.withClientCredentials(
    "0f780178cc1b407a94ca4385e7ce8193",
    "6e84aaad534c41eab844c42bdc793863",
    [
      "user-read-private",
      "user-read-email",
      "user-read-currently-playing",
      "user-top-read",
    ]
  );

  console.log("logging spotty");

  const tracks = await spotify.currentUser.topItems("tracks");
  console.log(tracks);
  const user = spotify.currentUser.albums.savedAlbums;
  console.log(user);

  return res.status(200).json({
    tracks,
  });
}
