import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from '@/app/theme-provider'
import {Analytics} from '@vercel/analytics/react'
import React from 'react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patrick Martin",
  description: "My portfolio and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Analytics/>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>{children}</ThemeProvider>
      </body>
    </html>
  );
}
