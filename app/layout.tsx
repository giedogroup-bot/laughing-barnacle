import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Platform - Connect with the World",
  description: "A comprehensive global platform designed to bring people, businesses, and ideas together from every corner of the globe. Multi-language support, 24/7 availability, serving 195+ countries.",
  keywords: "global platform, international, worldwide, multi-language, business platform, global network",
  authors: [{ name: "Global Platform Team" }],
  openGraph: {
    title: "Global Platform - Connect with the World",
    description: "Connect with the world through our comprehensive global platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
