import Link from "next/link";
import { AdilinkLogo } from "./components/adilink-logo";
import { HashRedirect } from "./hash-redirect";

const featureCards = [
  {
    href: "/stories",
    title: "Our History",
    text: "Discover roots, oral memory and family stories from Adi Naamen.",
    image: "/images/places/village-view.jpg",
    action: "Learn More",
  },
  {
    href: "/culture",
    title: "Culture & Traditions",
    text: "Explore traditions, values, language and beautiful heritage.",
    image: "/images/stories/market.jpg",
    action: "Explore Culture",
  },
  {
    href: "/places",
    title: "Map & Places",
    text: "Explore Adi Naamen on the map and discover meaningful places.",
    image: "/images/places/hills.jpg",
    action: "Explore Map",
  },
  {
    href: "/community",
    title: "Community",
    text: "Connect, share and grow together with the global community.",
    image: "/images/stories/elders.jpg",
    action: "Join Community",
  },
  {
    href: "/vip",
    title: "VIP Area",
    text: "Private community, chat, matchmaking and trusted member tools.",
    image: "/images/gallery/gallery-5.jpg",
    action: "Enter VIP Area",
  },
];

const stats = [
  ["2,450+", "Members"],
  ["32+", "Countries"],
  ["1,200+", "Photos Shared"],
  ["8,700+", "Messages"],
];

const events = [
  ["JUN", "15", "Adi Naamen Community Day", "Online Event"],
  ["AUG", "10", "Culture and Tradition Festival", "Adi Naamen"],
  ["SEP", "21", "Global Gathering", "Addis Ababa, Ethiopia"],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#020b18] text-white">
      <HashRedirect />

      <section
        className="relative min-h-[calc(100vh-81px)] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/places/village-view.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b18] via-[#062039]/90 to-[#4d789c]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(240,184,63,0.18),transparent_24%),radial-gradient(circle_at_18%_78%,rgba(31,118,173,0.24),transparent_30%)]" />
        <div className="absolute left-[-120px] top-28 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-80px] h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl flex-col justify-center px-5 py-16 lg:px-8">
          <div className="max-w-4xl">
            <AdilinkLogo size="lg" />
            <div className="my-8 flex items-center gap-4">
              <span className="h-px w-28 bg-amber-400" />
              <span className="h-4 w-4 rotate-45 border-2 border-amber-400" />
              <span className="h-px w-28 bg-amber-400" />
            </div>
            <p className="max-w-2xl text-2xl font-black leading-relaxed md:text-3xl">
              Connecting people from Adi Naamen worldwide.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/70 bg-slate-950/50 text-amber-300">♟</span>
                <p><strong>Connect</strong><br />with people</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/70 bg-slate-950/50 text-amber-300">▲</span>
                <p><strong>Discover</strong><br />our culture</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/70 bg-slate-950/50 text-amber-300">♥</span>
                <p><strong>Build</strong><br />relationships</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/community" className="rounded-xl bg-amber-400 px-7 py-4 font-black text-slate-950 shadow-xl shadow-amber-950/30 transition hover:-translate-y-1 hover:bg-amber-300">
                Join Our Community
              </Link>
              <Link href="/places" className="rounded-xl border border-amber-400 px-7 py-4 font-black shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:bg-white/10">
                Explore Adi Naamen
              </Link>
            </div>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-2xl border border-amber-400/50 bg-slate-950/70 shadow-2xl shadow-slate-950/40 backdrop-blur md:grid-cols-3">
            <div className="flex items-center gap-5 border-b border-amber-400/30 p-6 md:border-b-0 md:border-r">
              <span className="text-2xl font-black">NO</span>
              <p>Forbinder mennesker fra Adi Naamen over hele verden.</p>
            </div>
            <div className="flex items-center gap-5 border-b border-amber-400/30 p-6 md:border-b-0 md:border-r">
              <span className="text-2xl font-black">ER</span>
              <p>{"\u12D3\u12F2 \u1293\u12D5\u1218\u1295"} - connecting heritage, family and future.</p>
            </div>
            <div className="flex items-center gap-5 p-6">
              <span className="text-2xl font-black">GB</span>
              <p>Connecting people from Adi Naamen worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f2e8] px-5 py-16 text-slate-950 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-5">
          {featureCards.map((card) => (
            <Link key={card.href} href={card.href} className="group overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div
                className="relative h-48 bg-cover bg-center"
                style={{ backgroundImage: `linear-gradient(rgba(2, 11, 24, 0.06), rgba(2, 11, 24, 0.72)), url('${card.image}')` }}
              >
                <div className="absolute -bottom-7 left-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-amber-400 text-xl font-black text-slate-950 shadow-lg">
                  {card.title.charAt(0)}
                </div>
              </div>
              <div className="p-6 pt-10">
                <h2 className="text-2xl font-black group-hover:text-amber-700">{card.title}</h2>
                <p className="mt-4 leading-relaxed text-slate-700">{card.text}</p>
                <p className="mt-6 font-black text-amber-700">{card.action} →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid bg-[#06314d] text-white lg:grid-cols-3">
        <div className="p-10 lg:p-16">
          <h2 className="text-3xl font-black">Our Community</h2>
          <p className="mt-3 text-slate-200">Growing stronger every day</p>
          <div className="mt-8 grid grid-cols-2 gap-5">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-amber-400/30 bg-slate-950/25 p-5">
                <p className="text-3xl font-black text-amber-300">{value}</p>
                <p className="mt-1 text-sm">{label}</p>
              </div>
            ))}
          </div>
          <Link href="/community" className="mt-8 inline-flex w-full justify-center rounded-xl bg-amber-400 px-6 py-4 font-black text-slate-950 hover:bg-amber-300">
            See More Stats
          </Link>
        </div>

        <div className="border-y border-white/10 p-10 lg:border-x lg:border-y-0 lg:p-16">
          <h2 className="text-3xl font-black">Recent Photos</h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {["/images/gallery/gallery-1.jpg", "/images/gallery/gallery-2.jpg", "/images/places/hills.jpg", "/images/stories/market.jpg"].map((image) => (
              <div key={image} className="h-28 rounded-xl bg-cover bg-center shadow-lg" style={{ backgroundImage: `linear-gradient(rgba(2,11,24,.1),rgba(2,11,24,.45)),url('${image}')` }} />
            ))}
          </div>
          <Link href="/gallery" className="mt-6 inline-flex font-black text-amber-300">View Gallery →</Link>
        </div>

        <div className="p-10 lg:p-16">
          <h2 className="text-3xl font-black">Upcoming Events</h2>
          <div className="mt-6 grid gap-4">
            {events.map(([month, day, title, place]) => (
              <Link key={title} href="/events" className="flex gap-4 rounded-2xl border border-amber-400/40 bg-slate-950/25 p-4 transition hover:bg-slate-950/45">
                <span className="rounded-xl border border-amber-400/50 px-4 py-2 text-center">
                  <span className="block text-sm">{month}</span>
                  <span className="block text-3xl font-black">{day}</span>
                </span>
                <span>
                  <span className="block font-black">{title}</span>
                  <span className="mt-1 block text-sm text-slate-200">{place}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
