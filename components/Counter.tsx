import { useEffect, useState } from "react";

export const Counter = ({
  endNumber,
  unit,
}: {
  endNumber: number;
  unit?: string;
}) => {
  let INTERVAL_TIME = 10;

  const randomMaxNumbers = [82, 295, 134, 76, 422, 243, 209, 392];

  const randomStartingNumber =
    randomMaxNumbers[Math.floor(Math.random() * randomMaxNumbers.length)];

  const [currentNumber, setCurrentNumber] = useState(randomStartingNumber);
  const [isCounting, setIsCounting] = useState(true);

  // TODO: slow down animation buffer as the number approaches end result
  const slowDownBuffer = endNumber + 30;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber !== endNumber) {
        setCurrentNumber((prev) => prev - 1);
      } else {
        setIsCounting(false);
      }

      if (currentNumber < 0) {
        setIsCounting(false);
        setCurrentNumber(endNumber);
      }
    }, INTERVAL_TIME);
    return () => clearInterval(interval);
  }, [INTERVAL_TIME, currentNumber, endNumber]);

  return (
    <>
      <span className="text-teal-300">
        {isCounting ? currentNumber : endNumber}
        {unit && unit}
      </span>
    </>
  );
};
