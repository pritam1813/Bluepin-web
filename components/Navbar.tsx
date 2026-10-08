"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import bluepinLogo from "@/public/Bluepin.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isActive = (href: string) => {
    if (href === "/#faq") return pathname === "/" && hash === "#faq";
    if (href === "/") return pathname === "/" && hash !== "#faq";
    return pathname === href;
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-theme-border bg-theme-bg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2.5"
        >
          <Image
            src={bluepinLogo}
            alt="Bluepin logo"
            className="size-7 object-contain"
            width={28}
            height={28}
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Bluepin
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "text-[15px] transition-colors",
                isActive(link.href)
                  ? "text-theme-text underline decoration-theme-accent decoration-2 underline-offset-8"
                  : "text-theme-text-sec hover:text-theme-text",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="https://app.bluepin.in"
            className="hidden rounded-lg bg-theme-text px-5 py-2 text-[15px] font-medium text-theme-bg transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Sign in
          </Link>
          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-theme-border text-theme-text md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-theme-border px-6 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block border-b border-theme-border py-3 text-base last:border-0",
                isActive(link.href)
                  ? "text-theme-text"
                  : "text-theme-text-sec",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://app.bluepin.in"
            onClick={() => setMobileOpen(false)}
            className="my-3 flex items-center justify-center rounded-lg bg-theme-text px-5 py-2.5 text-base font-medium text-theme-bg"
          >
            Sign in
          </Link>
        </div>
      )}
    </nav>
  );
}
