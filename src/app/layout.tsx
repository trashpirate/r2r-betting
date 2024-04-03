import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flameling Bet",
  description: "Welcome to FlamelingBet where where you can tell your friend &quot;Ha, told you so!&quot;",
  applicationName: "Flameling Bet",
  twitter: {
    card: "summary_large_image",
    site: "flamelingbets.com",
    creator: "@flamelingbets",
    images: "https://flamelingbets.com/logo.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://flamelingbets.com",
    title: "Flameling Bet",
    description: "Welcome to FlamelingBet where where you can tell your friend &quot;Ha, told you so!&quot;",
    siteName: "Flameling Bet",
    images: [
      {
        url: "https://flamelingbets.com/logo.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
