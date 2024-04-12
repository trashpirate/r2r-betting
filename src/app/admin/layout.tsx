import type { Metadata } from "next";
import { Concert_One } from "next/font/google";
import "../globals.css";

const defaultFont = Concert_One({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {

};

export default function AdminLayout({
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
