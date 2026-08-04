import React from "react";
import AuthorProfile from "@/app/components/author-profile";
import SiteHeader from "@/app/components/site-header";

export default function ScreenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="site">
      <SiteHeader />
      <div className="site-shell">
        <AuthorProfile />
        <main className="site-content">{children}</main>
      </div>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Patrick Martin. Built with Next.js.</p>
      </footer>
    </div>
  );
}
