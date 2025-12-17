"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function CallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("Processing...");
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = searchParams.get("token");
    const authError = searchParams.get("error");

    if (authError) {
      setError(`Authorization failed: ${authError}`);
      return;
    }

    if (token) {
      setRefreshToken(token);
      setStatus("Success!");
      return;
    }

    // No token, redirect to Spotify auth
    const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const scope = "user-read-currently-playing user-read-recently-played user-top-read";
    
    // Use 127.0.0.1 instead of localhost (Spotify security requirement)
    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    const redirect_uri = isLocalhost 
      ? "http://127.0.0.1:3000/api/spotify"
      : `https://${window.location.hostname}/api/spotify`;
    
    // Pass state to identify local dev requests
    const state = isLocalhost ? "local-dev" : "production";
    
    const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
      response_type: "code",
      client_id: client_id || "",
      scope,
      redirect_uri,
      state, // Pass state to identify local dev
      show_dialog: "true",
    })}`;
    
    window.location.href = authUrl;
  }, [searchParams, router]);

  if (error) {
    return (
      <div style={{ fontFamily: "system-ui", padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
        <h1>❌ Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (refreshToken) {
    return (
      <div style={{ fontFamily: "system-ui", padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
        <h1>✅ Spotify Authorization Successful!</h1>
        <p>Add this to your <code>.env</code> file:</p>
        <pre style={{ background: "#f5f5f5", padding: "1rem", borderRadius: "4px", overflowX: "auto" }}>
          {`SPOTIFY_REFRESH_TOKEN=${refreshToken}`}
        </pre>
        <p><strong>Also make sure you have:</strong></p>
        <ul>
          <li><code>NEXT_PUBLIC_SPOTIFY_CLIENT_ID</code></li>
          <li><code>SPOTIFY_CLIENT_SECRET</code></li>
        </ul>
        <p>After adding the refresh token, restart your dev server.</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "system-ui", padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Authorizing with Spotify...</h1>
      <p>{status}</p>
    </div>
  );
}

export default function Callback() {
  return (
    <Suspense fallback={
      <div style={{ fontFamily: "system-ui", padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
        <h1>Loading...</h1>
      </div>
    }>
      <CallbackContent />
    </Suspense>
  );
}

