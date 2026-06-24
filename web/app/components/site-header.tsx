import Link from "next/link";
import { AdilinkLogo } from "./adilink-logo";

const navLinks = [
  { href: "/about", label: "About Adi Naamen" },
  { href: "/culture", label: "Culture" },
  { href: "/gallery", label: "Gallery" },
  { href: "/community", label: "Community" },
  { href: "/vip", label: "VIP Area" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-400/20 bg-[#020b18]/85 text-white shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-4 lg:px-8">
        <Link href="/" aria-label="AdiLink home">
          <AdilinkLogo size="sm" />
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-4 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-amber-300">
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="rounded-xl border border-amber-400 px-4 py-2 transition hover:bg-amber-400 hover:text-slate-950">
            Login
          </Link>
          <Link href="/register" className="rounded-xl bg-amber-400 px-4 py-2 font-bold text-slate-950 transition hover:bg-amber-300">
            Join now
          </Link>
        </nav>
      </div>
    </header>
  );
}
