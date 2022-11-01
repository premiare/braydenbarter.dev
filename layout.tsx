import { Manrope } from "@next/font/google";
import { Html, Head, Main, NextScript } from "next/document";

const manrope = Manrope();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Html lang="en" className={manrope.className}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className="bg-neutral-800">{children}</body>
    </Html>
  );
}
