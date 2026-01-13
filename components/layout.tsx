import { Manrope } from "next/font/google";
import clsx from "clsx";
const manrope = Manrope({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={clsx("bg-[#1d1d1d]", manrope.className)}>
        <main>{children}</main>
      </div>
    </>
  );
}
