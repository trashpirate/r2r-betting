import type { Metadata } from "next";
import { Concert_One } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { Providers } from "./providers";

const defaultFont = Concert_One({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Flameling Bets",
  description: "Welcome to FlamelingBets where you can tell your friend &quot;Ha, told you so!&quot;",
  applicationName: "Flameling Bets",
  twitter: {
    card: "summary_large_image",
    site: "flamelingbets.com",
    creator: "@Rugs_2_Riches",
    images: "https://flamelingbets.com/preview.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://flamelingbets.com",
    title: "Flameling Bets",
    description: "Welcome to FlamelingBets where you can tell your friend &quot;Ha, told you so!&quot;",
    siteName: "Flameling Bets",
    images: [
      {
        url: "https://flamelingbets.com/preview.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = headers().get("cookie");
  return (
    <html lang="en">
      <body className={defaultFont.className}><Providers cookie={cookie}>{children}</Providers></body>
    </html>
  );
}
