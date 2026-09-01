import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b border-theme-border/50 bg-white/80 dark:bg-theme-bg/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-350 mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/Bluepin.png"
            alt="Bluepin Logo"
            className="w-8 h-8 object-contain"
            width={32}
            height={32}
          />
          <span className="font-display font-bold text-xl tracking-tight">
            Blue<span className="font-medium opacity-80">pin.</span>
          </span>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <ThemeToggle />
          <Link
            href="https://app.bluepin.in"
            className="text-base font-medium bg-white dark:bg-slate-900 text-blue-600 border border-slate-200 dark:border-slate-800 px-6 py-2.5 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}
