import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const bodyFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"]
});

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400"
});

export const metadata: Metadata = {
  title: "Wedding RSVP",
  description: "An invitation for Rafayel & Anushik"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${scriptFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
