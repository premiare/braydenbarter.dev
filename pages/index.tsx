import type { NextPage } from "next";
import { octokit } from "../lib/octokit";
import { useEffect, useState } from "react";
import { LandingActivity } from "../components/LandingActivity";
import { GitHubRepository, LatestCommitType } from "../types/types";
import { getAccessToken, getTopTracks } from "../lib/spotify";
import { SpotifyStats } from "../components/SpotifyStats";
import mockSpotify from "./../@data/mockSpotify.json";
import { SpotifySample } from "../components/SpotifySample";

const Home: NextPage = (props) => {
  const [githubData, setGithubData] = useState<any>([]);

  const getGithubData = async () => {
    const user = await octokit.request("GET /users/{username}", {
      username: "premiare",
    });

    const userData = user.data;

    const repos = await octokit.request("GET /users/{username}/repos", {
      username: "premiare",
      sort: "updated",
    });

    const reposData = repos.data;
    console.log({
      reposData,
      userData,
    });
    setGithubData({
      reposData,
      userData,
    });

    return {
      reposData,
      userData,
    };
  };

  useEffect(() => {
    getGithubData();
  }, []);

  // TODO: fix this any type
  // Sorts the repos by the latest commit date - pushed_at
  const latest: LatestCommitType = githubData?.reposData?.sort(
    (prev: any, current: GitHubRepository) => {
      return (
        new Date(current.pushed_at).getTime() -
        new Date(prev.pushed_at).getTime()
      );
    },
    {}
  );

  const latestCommit: LatestCommitType = {
    commitDate: githubData?.reposData?.[0]?.pushed_at,
    repoName: githubData?.reposData?.[0]?.name,
    repoLink: githubData?.reposData?.[0]?.html_url || "",
  };
  return (
    <>
      <title>Brayden Barter | Front End Developer</title>
      <section className="min-h-[calc(100vh-64px)] flex items-center">
        <div className="container-xl mx-auto mt-[50%] md:mt-auto my-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-teal-300 text-center">
              Brayden Barter
            </h1>
            <h2 className="text-4xl mt-2 text-gray-300 text-center">
              Front End Developer
            </h2>
          </div>
          <LandingActivity data={latestCommit} />
        </div>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      client_token: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      // tracks: topTracks || [],
    },
  };
};

export default Home;
