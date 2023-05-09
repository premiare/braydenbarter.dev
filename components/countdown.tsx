import React, { useCallback, useEffect, useState } from "react";

export const CountdownTimer = ({ endDate }: { endDate: string }) => {
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
  }, [endDate]);

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, [getTime]);

  const removeHyphen = (num: number) => {
    return num.toString().replace("-", "");
  };

  return (
    <>
      {removeHyphen(days)}d {removeHyphen(hours)}h {removeHyphen(minutes)}m{" "}
      {removeHyphen(seconds)}s ago
    </>
  );
};
