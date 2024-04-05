import type { Metadata } from "next";
import { Inter, Fjalla_One, Francois_One, Limelight, Black_Han_Sans, Londrina_Solid, Lalezar, Viga, Rubik_Mono_One, Luckiest_Guy, Concert_One } from "next/font/google";
import "./globals.css";

const defaultFont = Concert_One({ subsets: ["latin"], weight: ['400'] });

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
      <body className={defaultFont.className}>{children}</body>
    </html>
  );
}
