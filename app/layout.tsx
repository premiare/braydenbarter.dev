import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import clsx from "clsx";
import "../styles/globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brayden Barter",
  description: "Brayden Barter's personal portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("bg-[#1d1d1d]", manrope.className)}>
        <main>{children}</main>
      </body>
    </html>
  );
}

