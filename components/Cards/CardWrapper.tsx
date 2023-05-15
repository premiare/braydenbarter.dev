import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { MouseEvent } from "react";
import { HiOutlineReply } from "react-icons/hi";
interface CardWrapperProps {
  link?: string;
  color: string;
  children: React.ReactNode;
  className?: string;
}

export const CardWrapper = ({
  color,
  link,
  children,
  className,
}: CardWrapperProps) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  console.log({ color });

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      className={
        `group relative w-full md:w-full lg:w-1/4 rounded-xl border-2 border-white/20 hover:border-white/50 bg-neutral-900 px-8 py-8 shadow-2xl h-[220px] ` +
        className
      }
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10 hover:border-red-400"
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
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <HiOutlineReply className="rotate-90 absolute right-4 top-4 text-3xl hover:cursor-pointer hover:bg-slate-300 hover:bg-opacity-20 rounded-md p-1" />
        </a>
      )}
      {children}
    </motion.div>
  );
};
