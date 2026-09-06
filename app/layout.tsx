import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./constants";

// Display / headings — modern, premium grotesk
const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  preload: true,
  variable: "--font-display",
});

// Body / UI — highly legible humanist sans
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SaveFirst — Spend what's left after saving.",
    template: "%s — SaveFirst",
  },
  description:
    "SaveFirst is a calm money tracker for iPhone. See your real spendable balance, run a pre-spend check before you buy, and grow goals without the shame.",
  applicationName: "SaveFirst",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "SaveFirst",
    title: "SaveFirst — Spend what's left after saving.",
    description:
      "SaveFirst is a calm money tracker for iPhone. See your real spendable balance, run a pre-spend check before you buy, and grow goals without the shame.",
    images: [{ url: "/assets/app-icon.png", width: 512, height: 512, alt: "SaveFirst" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaveFirst — Spend what's left after saving.",
    description:
      "SaveFirst is a calm money tracker for iPhone. See your real spendable balance, run a pre-spend check before you buy, and grow goals without the shame.",
    images: ["/assets/app-icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="green" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <main style={{ overflowX: "clip", position: "relative" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
