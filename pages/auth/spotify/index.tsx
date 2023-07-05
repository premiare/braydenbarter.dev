import { useRouter } from "next/router";
import { useEffect } from "react";
import querystring from "querystring";
export const Login = (props: any) => {
  console.log(props);
  const redirect_uri = "http://localhost:3000";
  const { spotify_client_token, spotify_client_secret } = props;
  const router = useRouter();

  useEffect(() => {
    router.push(
      "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
          response_type: "code",
          client_id: spotify_client_token,
          scope: "user-read-private user-read-currently-playing user-top-read",
          redirect_uri,
        })
    );
  }, [router, spotify_client_token]);
  return <>dsjhaskjdasdkjasbdkjs</>;
};

export const getStaticProps = async () => {
  return {
    props: {
      spotify_client_token: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      spotify_client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      // tracks: topTracks || [],
    },
  };
};

export default Login;
