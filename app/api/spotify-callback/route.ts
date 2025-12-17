import { NextRequest } from "next/server";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI || "http://127.0.0.1:3000/api/spotify";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) {
    return new Response(
      `
      <html>
        <head><title>Spotify Auth Error</title></head>
        <body style="font-family: system-ui; padding: 2rem; max-width: 600px; margin: 0 auto;">
          <h1>❌ Authorization failed</h1>
          <p>Error: ${error}</p>
          <p>Make sure you authorized the app in Spotify.</p>
        </body>
      </html>
    `,
      {
        status: 400,
        headers: { "Content-Type": "text/html" },
      }
    );
  }

  if (!code) {
    // If no code, redirect to authorization
    const scope = "user-read-currently-playing user-read-recently-played user-top-read";
    const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
      response_type: "code",
      client_id: client_id || "",
      scope,
      redirect_uri,
      show_dialog: "true",
    })}`;
    
    return Response.redirect(authUrl);
  }

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
      return new Response(
        `
        <html>
          <head><title>Spotify Auth Success</title></head>
          <body style="font-family: system-ui; padding: 2rem; max-width: 600px; margin: 0 auto;">
            <h1>✅ Spotify Authorization Successful!</h1>
            <p>Add this to your <code>.env</code> file:</p>
            <pre style="background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto;">
SPOTIFY_REFRESH_TOKEN=${data.refresh_token}
            </pre>
            <p><strong>Also make sure you have:</strong></p>
            <ul>
              <li><code>NEXT_PUBLIC_SPOTIFY_CLIENT_ID</code></li>
              <li><code>SPOTIFY_CLIENT_SECRET</code></li>
              <li><code>SPOTIFY_REDIRECT_URI=http://127.0.0.1:3000/api/spotify</code> (or your production URL)</li>
            </ul>
            <p>After adding the refresh token, restart your dev server.</p>
          </body>
        </html>
      `,
        {
          headers: { "Content-Type": "text/html" },
        }
      );
    }

    return new Response(
      `
      <html>
        <body>
          <h1>Failed to get refresh token</h1>
          <pre>${JSON.stringify(data, null, 2)}</pre>
        </body>
      </html>
    `,
      {
        status: 400,
        headers: { "Content-Type": "text/html" },
      }
    );
  } catch (error: any) {
    return new Response(
      `
      <html>
        <body>
          <h1>Error</h1>
          <p>${error.message || String(error)}</p>
        </body>
      </html>
    `,
      {
        status: 500,
        headers: { "Content-Type": "text/html" },
      }
    );
  }
}

