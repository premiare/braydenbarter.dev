import React, { useCallback, useEffect, useState } from "react";
import { removeHyphen } from "../helpers/removeHyphen";
import Link from "next/link";
import { Counter } from "./countup";

export const CountdownTimer = ({
  endDate,
  repoName,
  repoLink,
  updateActivity,
}: {
  repoName: string;
  repoLink: string;
  endDate: string;
  updateActivity: (arg: boolean) => void;
}) => {
  const [init, setInit] = useState(true);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = useCallback(() => {
    const time = Date.parse(endDate) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
    setInit(false);
  }, [endDate]);

  useEffect(() => {
    if (seconds !== 0 && !init) {
      updateActivity(true);
    }
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, [getTime, init, seconds, updateActivity]);

  return (
    <>
      <div className="flex flex-row items-center justify-center mt-8 text-center md:text-start px-4 md:px-6">
        <p className="w-full flex indent-1">
          My latest commit was{" "}
          <span className="text-teal-300 flex indent-1">
            <Counter endNumber={removeHyphen(days)} unit="d" />
            <Counter endNumber={removeHyphen(hours)} unit="h" />
            <Counter endNumber={removeHyphen(minutes)} unit="m" />
            <Counter endNumber={removeHyphen(seconds)} unit="s" />
          </span>
          ago while working on{" "}
          <span className="text-teal-300 hover:underline">
            <Link href={repoLink} target="_blank">
              {repoName}
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};
