// app/layout.tsx (or layout.js)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from './components/ui/navbar/Navigation';
import "./globals.css";

// Load Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for your app
export const metadata: Metadata = {
  title: "POS System",
  description: "Point of Sale system built with Next.js",
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Navigation />
        {children}
      </body>
    </html>
  );
}
