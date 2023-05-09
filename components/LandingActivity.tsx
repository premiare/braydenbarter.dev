import React, { useState } from "react";
import { CountdownTimer } from "./countdown";
import { LatestCommitType } from "../types/types";
import { DiscordInfo } from "./Lanyard";
import Link from "next/link";

type DataType = {
  data: LatestCommitType;
};

// TODO: fix this any type
export const LandingActivity = ({ data }: DataType) => {
  const [showActivity, setShowActivity] = useState<boolean>(true);
  const { commitDate, repoName, repoLink } = data;
  console.log({ commitDate, repoName, repoLink });

  const updateShowActivity = (value: boolean) => {
    setShowActivity(value);
  };

  if (!commitDate || !repoName || !repoLink) return null;

  return (
    <>
      <CountdownTimer
        repoName={repoName}
        repoLink={repoLink}
        endDate={commitDate}
        updateActivity={updateShowActivity}
      />

      <div className="flex flex-row justify-center mx-auto pt-2">
        <DiscordInfo />
      </div>
    </>
  );
};
