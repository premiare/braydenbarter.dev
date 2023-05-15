import { MouseEvent, useEffect, useState } from "react";
import { CardWrapper } from "./CardWrapper";
import { SiGithub } from "react-icons/si";
import { octokit } from "../../lib/octokit";
import { GitHubRepository, LatestCommitType } from "../../types/types";
import { AnimatedCountdown, CountdownTimer } from "../Countdown/CountdownTimer";
import { IconStars } from "@tabler/icons";

export const GitHubCard = () => {
  const [githubData, setGithubData] = useState<any>([]);
  const [showActivity, setShowActivity] = useState<boolean>(true);

  const fetchGithubData = async () => {
    const res = await fetch("/api/github");
    const data = await res.json();
    setGithubData(data);
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

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

  const { commitDate, repoName, repoLink } = latestCommit;

  const updateShowActivity = (value: boolean) => {
    setShowActivity(value);
  };

  if (!commitDate || !repoName || !repoLink) return null;

  console.log(commitDate);

  return (
    <CardWrapper
      color="rgba(14, 165, 233, 0.15)"
      link="https://github.com/premiare"
      className="col-span-6"
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center align-middle">
          <SiGithub className="text-lg" />
          <h3 className="text-base font-semibold leading-7 text-teal-300">
            premiare
          </h3>
        </div>
        <div className="flex items-center gap-x-2">
          <span className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-white z-100">
            GitHub
          </span>
        </div>
        <div className="flex flex-wrap">
          Last commit:
          <AnimatedCountdown
            endDate={commitDate}
            updateActivity={updateShowActivity}
          />{" "}
          ago
        </div>
      </div>
    </CardWrapper>
  );
};
