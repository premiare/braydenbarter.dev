import React, { useCallback, useEffect, useState } from "react";
import { removeHyphen } from "../helpers/removeHyphen";
import Link from "next/link";
import { Counter } from "./Counter";

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

    // Math.ceil here insted of Math.floor because the values are technically negative and the hypen is removed in the Counter component
    // Math.floor rounds down, so the value would be -1 instead of 0 but the hyphen was then removed, making -1 look like 1 etc.
    setDays(Math.ceil(time / (1000 * 60 * 60 * 24)));
    setHours(Math.ceil((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.ceil((time / 1000 / 60) % 60));
    setSeconds(Math.ceil((time / 1000) % 60));
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
        <p className="w-full flex indent-1 flex-wrap md:flex-row justify-center ">
          My latest commit was{" "}
          <Counter endNumber={removeHyphen(days)} unit="d" />
          <Counter endNumber={removeHyphen(hours)} unit="h" />
          <Counter endNumber={removeHyphen(minutes)} unit="m" />
          <Counter endNumber={removeHyphen(seconds)} unit="s" />
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
