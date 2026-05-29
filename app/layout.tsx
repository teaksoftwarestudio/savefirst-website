import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" data-theme="blue">
      <body>{children}</body>
    </html>
  );
}
