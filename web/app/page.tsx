import Link from "next/link";
import { HashRedirect } from "./hash-redirect";

const featureCards = [
  {
    href: "/stories",
    title: "Our History",
    text: "Collect memories, oral history and family stories before they disappear.",
    image: "/images/places/village-view.jpg",
  },
  {
    href: "/culture",
    title: "Culture & Traditions",
    text: "Preserve language, traditions, celebrations and values for the next generation.",
    image: "/images/stories/market.jpg",
  },
  {
    href: "/places",
    title: "Map & Places",
    text: "Explore important places, viewpoints and gathering points connected to Adi Naamen.",
    image: "/images/places/hills.jpg",
  },
  {
    href: "/community",
    title: "Community",
    text: "Connect members in Norway, Eritrea and the wider Adi Naamen diaspora.",
    image: "/images/stories/elders.jpg",
  },
  {
    href: "/vip",
    title: "VIP Area",
    text: "A private member area for profiles, events, messages and trusted community tools.",
    image: "/images/gallery/gallery-5.jpg",
  },
];

const stats = [
  ["2,450+", "Members"],
  ["32+", "Countries"],
  ["1,200+", "Photos shared"],
  ["8,700+", "Messages"],
];

export default function Home() {
  return (
    <main className="bg-[#020b18] text-white">
      <HashRedirect />

      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/places/village-view.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b18] via-[#062039]/90 to-[#103d63]/70" />
        <div className="absolute inset-0 bg-[#020b18]/35" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-amber-300">Adi Naamen worldwide</p>
            <h1 className="mt-6 text-6xl font-black tracking-tight md:text-8xl">AdiLink</h1>
            <p className="mt-6 text-4xl font-black text-amber-400 md:text-5xl">ዓዲ ናዕመን</p>
            <div className="my-8 h-px w-72 bg-gradient-to-r from-amber-400 via-amber-200 to-transparent" />
            <p className="max-w-2xl text-2xl font-bold leading-relaxed text-white md:text-3xl">
              Connecting Adi Naamen people, stories, culture and trusted community features in one place.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/community" className="rounded-xl bg-amber-400 px-7 py-4 font-black text-slate-950 shadow-xl shadow-amber-950/30 transition hover:-translate-y-0.5 hover:bg-amber-300">
                Join Our Community
              </Link>
              <Link href="/places" className="rounded-xl border border-amber-400 px-7 py-4 font-black transition hover:-translate-y-0.5 hover:bg-white/10">
                Explore Adi Naamen
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-400/30 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/50 backdrop-blur">
            <h2 className="text-2xl font-black">Built for the full community journey</h2>
            <p className="mt-3 text-slate-300">
              Start with public history and culture. Grow into profiles, events, galleries, maps and private VIP features.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-3xl font-black text-amber-300">{value}</p>
                  <p className="mt-1 text-sm text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-amber-400/30 bg-slate-950 px-5 py-6 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-amber-400/40 md:grid-cols-3">
          <div className="flex items-center gap-5 border-b border-amber-400/25 p-6 md:border-b-0 md:border-r">
            <span className="text-2xl font-black">NO</span>
            <p>Forbinder mennesker fra Adi Naamen over hele verden.</p>
          </div>
          <div className="flex items-center gap-5 border-b border-amber-400/25 p-6 md:border-b-0 md:border-r">
            <span className="text-2xl font-black">ER</span>
            <p>ንሰባት ዓዲ ናዕመን ኣብ መላእ ዓለም የተኣሳስር።</p>
          </div>
          <div className="flex items-center gap-5 p-6">
            <span className="text-2xl font-black">GB</span>
            <p>Connecting people from Adi Naamen worldwide.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f2e8] px-5 py-16 text-slate-950 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-700">Explore AdiLink</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">One platform for culture, memory and connection.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {featureCards.map((card) => (
              <Link key={card.href} href={card.href} className="group overflow-hidden rounded-2xl bg-white shadow-xl transition hover:-translate-y-1">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `linear-gradient(rgba(2, 11, 24, 0.05), rgba(2, 11, 24, 0.7)), url('${card.image}')` }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-black group-hover:text-amber-700">{card.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-700">{card.text}</p>
                  <p className="mt-6 font-black text-amber-700">Open -&gt;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
