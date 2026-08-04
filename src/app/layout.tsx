import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Patrick Martin",
    template: "%s | Patrick Martin",
  },
  description:
    "Patrick Martin is a computer science student interested in theoretical computer science, graph learning, and software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
