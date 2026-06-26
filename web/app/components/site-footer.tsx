import Link from "next/link";
import { AdilinkLogo } from "./adilink-logo";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/culture", label: "Culture" },
  { href: "/stories", label: "Stories" },
  { href: "/events", label: "Events" },
  { href: "/places", label: "Places" },
  { href: "/gallery", label: "Gallery" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-amber-400/20 bg-[#020b18] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <AdilinkLogo size="sm" />
          <p className="mt-5 max-w-md text-slate-300">
            A trusted digital home for Adi Naamen history, culture, members, places and shared memories.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-amber-300">Explore</h2>
          <div className="mt-4 grid gap-2 text-slate-300">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-amber-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold text-amber-300">Community</h2>
          <p className="mt-4 text-slate-300">Built for members in Norway, Eritrea and across the world.</p>
          <Link href="/vip" className="mt-5 inline-flex rounded-xl border border-amber-400 px-5 py-3 font-bold hover:bg-amber-400 hover:text-slate-950">
            Enter VIP
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">
        {"\u00A9"} 2026 AdiLink. Connecting Adi Naamen worldwide.
      </p>
    </footer>
  );
}
