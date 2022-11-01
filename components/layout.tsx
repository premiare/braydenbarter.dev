import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Manrope } from "@next/font/google";
import clsx from "clsx";
const manrope = Manrope();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={clsx("bg-neutral-800", manrope.className)}>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
