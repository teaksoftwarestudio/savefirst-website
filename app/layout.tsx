import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Save First — Spend what's left after saving.",
  description:
    "A calm, save-first money tracker for iPhone. See your real spendable balance, run a pre-spend check before you buy, and grow goals without the shame.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="green" className={poppins.variable}>
      <body>
        <main style={{ overflowX: "clip", position: "relative" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
