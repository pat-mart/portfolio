"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, profile } from "@/app/site-data";
import { CloseIcon, MenuIcon } from "@/app/components/site-icons";
import ThemeToggle from "@/app/components/theme-toggle";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-title" href="/home" onClick={() => setOpen(false)}>
          {profile.name}
        </Link>

        <div className="site-header__actions">
          <nav id="site-navigation" className={open ? "site-nav site-nav--open" : "site-nav"} aria-label="Primary navigation">
            {navigation.map((item) => {
              const active = pathname === item.href || (item.href !== "/home" && pathname.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  className={active ? "site-nav__link site-nav__link--active" : "site-nav__link"}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
          <button
            type="button"
            className="icon-button menu-button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="site-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
