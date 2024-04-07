import type { Metadata } from "next";
import { Inter, Fjalla_One, Francois_One, Limelight, Black_Han_Sans, Londrina_Solid, Lalezar, Viga, Rubik_Mono_One, Luckiest_Guy, Concert_One } from "next/font/google";
import "./globals.css";

const defaultFont = Concert_One({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Flameling Bets",
  description: "Welcome to FlamelingBets where where you can tell your friend &quot;Ha, told you so!&quot;",
  applicationName: "Flameling Bets",
  twitter: {
    card: "summary_large_image",
    site: "flamelingbets.com",
    creator: "@Rugs_2_Riches",
    images: "https://flamelingbets.com/banner.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://flamelingbets.com",
    title: "Flameling Bets",
    description: "Welcome to FlamelingBets where where you can tell your friend &quot;Ha, told you so!&quot;",
    siteName: "Flameling Bets",
    images: [
      {
        url: "https://flamelingbets.com/banner.jpg",
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
