import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import clsx from "clsx";
import "../styles/globals.css";

const manrope = Manrope({ subsets: ["latin"] });

const description =
  "Brayden Barter is a full stack engineer in Melbourne and the founder of Fabl.";

export const metadata: Metadata = {
  // The apex redirects to www, so every absolute URL uses www
  metadataBase: new URL("https://www.braydenbarter.dev"),
  title: "Brayden Barter",
  description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Brayden Barter",
    title: "Brayden Barter",
    description,
    locale: "en_AU",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Brayden Barter" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brayden Barter",
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={clsx("bg-[#1d1d1d] overflow-x-hidden", manrope.className)}>
        <main className="overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}

