import { animated, config, useSpring } from "@react-spring/web";

interface AnimatedNumberProps {
  value: number;
  unit?: string;
}

const AnimatedNumber = ({ value, unit }: AnimatedNumberProps) => {
  const { number } = useSpring({
    reset: false,
    from: { number: 60 },
    number: value,
    delay: 0,
    config: config.molasses,
  });

  return (
    <span className="flex flex-row indent-0 text-teal-300 px-[2px]">
      <animated.div className="">{number.to((n) => n.toFixed(0))}</animated.div>
      {unit}
    </span>
  );
};

export default AnimatedNumber;
