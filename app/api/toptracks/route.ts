import { getTopTracks } from "../../../lib/spotify";

export async function GET() {
  try {
    const response = await getTopTracks();

    if (response instanceof Error) {
      return Response.json({ tracks: [] }, {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
        },
      });
    }

    if (response.status === 204 || response.status > 400) {
      return Response.json({ tracks: [] }, {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
        },
      });
    }

    const data = await response.json();

    // Format tracks like the article does: artist, songUrl, title, key, albumCover
    const tracks = data.items?.map((track: any, index: number) => ({
      artist: track.artists.map((_artist: any) => _artist.name).join(", "),
      songUrl: track.external_urls.spotify,
      title: track.name,
      key: index + 1,
      albumCover: track.album.images[0] || null,
      albumName: track.album.name,
    })) || [];

    return Response.json({ tracks }, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
      },
    });
  } catch (error) {
    return Response.json({ tracks: [] }, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
      },
    });
  }
}

