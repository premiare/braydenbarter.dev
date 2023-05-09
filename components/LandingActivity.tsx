import React from "react";
import { CountdownTimer } from "./countdown";
import { LatestCommitType } from "../types/types";
import { DiscordInfo } from "./Lanyard";
import Link from "next/link";

type DataType = {
  data: LatestCommitType;
};

// TODO: fix this any type
export const LandingActivity = ({ data }: DataType) => {
  const { commitDate, repoName, repoLink } = data;
  console.log({ commitDate, repoName, repoLink });

  if (!commitDate || !repoName || !repoLink) return null;

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-8 text-center md:text-start px-4 md:px-6">
        <p>
          My latest <i>public</i> commit was{" "}
          <span className="text-teal-300">
            <CountdownTimer endDate={commitDate} />
          </span>
          , while working on{" "}
          <span className="text-teal-300 hover:underline">
            <Link href={repoLink} target="_blank">
              {repoName}
            </Link>
          </span>
        </p>
      </div>
      <div className="flex flex-row justify-center mx-auto pt-2">
        <DiscordInfo />
      </div>
    </div>
  );
};
