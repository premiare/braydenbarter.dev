import { getTopArtists } from "../../../lib/spotify";

export async function GET() {
  try {
    const response = await getTopArtists();

    if (response instanceof Error) {
      return Response.json({ artists: [] }, {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
        },
      });
    }

    if (response.status === 204 || response.status > 400) {
      return Response.json({ artists: [] }, {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
        },
      });
    }

    const data = await response.json();

    const artists = data.items?.map((artist: any) => ({
      name: artist.name,
      image: artist.images[0]?.url || null,
      url: artist.external_urls.spotify,
      genres: artist.genres.slice(0, 3),
    })) || [];

    return Response.json({ artists }, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
      },
    });
  } catch (error) {
    return Response.json({ artists: [] }, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
      },
    });
  }
}

