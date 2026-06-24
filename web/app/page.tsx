import Link from "next/link";
import { HashRedirect } from "./hash-redirect";

const featureCards = [
  {
    href: "/stories",
    title: "Our History",
    text: "Discover the rich history of Adi Naamen and our roots.",
    image: "/images/places/village-view.jpg",
  },
  {
    href: "/culture",
    title: "Culture & Traditions",
    text: "Explore our culture, traditions and values.",
    image: "/images/stories/market.jpg",
  },
  {
    href: "/places",
    title: "Map & Places",
    text: "Explore Adi Naamen on the map and discover important places.",
    image: "/images/places/hills.jpg",
  },
  {
    href: "/community",
    title: "Community",
    text: "Connect, share and grow together with our global community.",
    image: "/images/stories/elders.jpg",
  },
  {
    href: "/vip",
    title: "VIP Area",
    text: "Private community, chat and trusted member features.",
    image: "/images/gallery/gallery-5.jpg",
  },
];

const navLinks = [
  { href: "/about", label: "About Adi Naamen" },
  { href: "/culture", label: "Culture" },
  { href: "/gallery", label: "Gallery" },
  { href: "/community", label: "Community" },
  { href: "/vip", label: "VIP Area" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020b18] text-white">
      <HashRedirect />

      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/places/village-view.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b18] via-[#062039]/90 to-[#103d63]/70" />
        <div className="absolute inset-0 bg-[#020b18]/35" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-10">
          <nav className="flex flex-wrap items-center justify-between gap-5">
            <Link href="/" className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-amber-400 text-3xl font-black text-amber-400">
                A
              </div>
              <div>
                <p className="text-4xl font-black leading-none">AdiLink</p>
                <p className="mt-1 text-2xl font-black text-amber-400">ዓዲ ናዕመን</p>
              </div>
            </Link>

            <div className="flex flex-wrap items-center justify-end gap-4 text-sm font-semibold">
              <Link href="/" className="border-b-2 border-amber-400 pb-1 text-amber-400">Home</Link>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="pb-1 hover:text-amber-300">
                  {link.label}
                </Link>
              ))}
              <Link href="/login" className="rounded-lg border border-amber-400 px-5 py-3 hover:bg-amber-400 hover:text-slate-950">
                Login
              </Link>
              <Link href="/register" className="rounded-lg bg-amber-400 px-5 py-3 font-bold text-slate-950 hover:bg-amber-300">
                Join Now
              </Link>
            </div>
          </nav>

          <div className="flex flex-1 flex-col justify-center py-16">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-black tracking-tight md:text-8xl">AdiLink</h1>
              <p className="mt-6 text-5xl font-black text-amber-400">ዓዲ ናዕመን</p>
              <div className="my-8 h-px w-72 bg-gradient-to-r from-amber-400 via-amber-200 to-transparent" />
              <p className="max-w-2xl text-2xl font-bold leading-relaxed text-white md:text-3xl">
                ንሕብረተ ዓዲ ናዕመን ኣብ መላእ ዓለም የተኣሳስር።
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/community" className="rounded-lg bg-amber-400 px-7 py-4 font-bold text-slate-950 hover:bg-amber-300">
                Join Our Community
              </Link>
              <Link href="/places" className="rounded-lg border border-amber-400 px-7 py-4 font-bold hover:bg-white/10">
                Explore Adi Naamen
              </Link>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-xl border border-amber-400/50 bg-slate-950/70 md:grid-cols-3">
            <div className="flex items-center gap-5 border-b border-amber-400/30 p-6 md:border-b-0 md:border-r">
              <span className="text-2xl font-black">NO</span>
              <p>Forbinder mennesker fra Adi Naamen over hele verden.</p>
            </div>
            <div className="flex items-center gap-5 border-b border-amber-400/30 p-6 md:border-b-0 md:border-r">
              <span className="text-2xl font-black">ER</span>
              <p>ንሕብረተ ዓዲ ናዕመን ኣብ መላእ ዓለም የተኣሳስር።</p>
            </div>
            <div className="flex items-center gap-5 p-6">
              <span className="text-2xl font-black">GB</span>
              <p>Connecting people from Adi Naamen worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f2e8] px-6 py-12 text-slate-950 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-5">
          {featureCards.map((card) => (
            <Link key={card.href} href={card.href} className="group overflow-hidden rounded-xl bg-white shadow-xl transition hover:-translate-y-1">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(2, 11, 24, 0.15), rgba(2, 11, 24, 0.65)), url('${card.image}')` }}
              />
              <div className="p-6">
                <h2 className="text-2xl font-black group-hover:text-amber-700">{card.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-700">{card.text}</p>
                <p className="mt-6 font-bold text-amber-700">Open →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
