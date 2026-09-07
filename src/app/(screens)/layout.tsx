import React from "react";
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
        <main className="site-content">{children}</main>
      </div>
    </div>
  );
}
