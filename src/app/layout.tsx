import { Inter } from "next/font/google";
import "../styles/globals.css";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Susly - Subscription Management for Teams",
  description: "Track, manage, and optimize your team's software subscriptions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
