import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { MouseEvent } from "react";

interface CardProps {
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  image?: string;
}

export const Card = ({
  title,
  subtitle,
  desc,
  icon,
  color,
  image,
}: CardProps) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const borderColor = useTransform<number, string>(
    mouseX,
    (x) => `rgba(255, 255, 255, ${x / 100})`
  );

  return (
    <motion.div
      className={`group relative max-w-md rounded-xl border-2 border-white/20 bg-[#1d1d1d] px-8 py-16 shadow-2xl`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
        }}
      />
      <div>
        <div className="flex flex-row gap-4 items-center align-middle">
          {icon}
          <h3 className="text-base font-semibold leading-7 text-sky-500">
            {subtitle}
          </h3>
        </div>
        <div className="mt-2 flex items-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white z-100">
            {title}
          </span>
        </div>
        <p className="mt-6 text-base leading-7 text-gray-300">{desc}</p>
      </div>
    </motion.div>
  );
};
