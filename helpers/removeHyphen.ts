export const removeHyphen = (num: number) => {
  const numString = num.toString().replace("-", "");
  return Number(numString);
};
