import Link from "next/link";
import { AdilinkLogo } from "./components/adilink-logo";
import { members, stories } from "./data/mock";
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#020b18] via-[#03172a]/90 to-[#0c4f76]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(240,184,63,0.30),transparent_21%),radial-gradient(circle_at_15%_88%,rgba(32,147,208,0.32),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#020b18] to-transparent" />
        <div className="absolute left-[-140px] top-20 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute right-[-120px] top-32 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_0.92fr] lg:px-8">
          <div>
            <div className="inline-flex rounded-full border border-amber-400/50 bg-slate-950/55 px-4 py-2 text-sm font-black uppercase tracking-[0.24em] text-amber-200 shadow-2xl shadow-slate-950/40 backdrop-blur">
              New AdiLink experience
            </div>
            <div className="mt-8">
              <AdilinkLogo size="lg" />
            </div>
            <h1 className="mt-10 max-w-4xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">
              Heritage.
              <span className="block text-amber-400">Community.</span>
              Future.
            </h1>
            <div className="my-8 flex items-center gap-4">
              <span className="h-px w-28 bg-amber-400" />
              <span className="h-4 w-4 rotate-45 border-2 border-amber-400" />
              <span className="h-px w-28 bg-amber-400" />
            </div>
            <p className="max-w-2xl text-xl font-bold leading-relaxed text-slate-100 md:text-2xl">
              A premium digital home for Adi Naamen people, stories, places, culture and trusted member connection.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              {[
                ["01", "Connect", "with people"],
                ["02", "Discover", "our culture"],
                ["03", "Build", "relationships"],
              ].map(([number, title, text]) => (
                <div key={title} className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/70 bg-slate-950/50 text-sm font-black text-amber-300">
                    {number}
                  </span>
                  <p>
                    <strong>{title}</strong>
                    <br />
                    {text}
                  </p>
                </div>
              ))}
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

          <div className="relative">
            <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full border border-amber-400/30" />
            <div className="absolute -bottom-10 right-4 h-40 w-40 rounded-full bg-amber-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-amber-400/40 bg-slate-950/70 p-6 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
              <div className="rounded-3xl bg-gradient-to-br from-amber-400 to-amber-600 p-1">
                <div className="rounded-[1.35rem] bg-[#041629] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-200">Community Passport</p>
                    <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-slate-950">VIP READY</span>
                  </div>
                  <div className="mt-8 grid gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-5xl font-black text-white">32+</p>
                      <p className="mt-1 text-slate-300">countries connected</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-3xl font-black text-amber-300">1.2k</p>
                        <p className="text-sm text-slate-300">photos</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-3xl font-black text-amber-300">8.7k</p>
                        <p className="text-sm text-slate-300">messages</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 rounded-2xl bg-[#082a3f] p-5">
                    <div className="relative h-44 overflow-hidden rounded-xl bg-gradient-to-br from-[#174f50] to-[#04263d]">
                      <span className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_30px_rgba(240,184,63,.9)]" />
                      <span className="absolute left-[56%] top-[58%] h-4 w-4 rounded-full bg-amber-400 shadow-[0_0_30px_rgba(240,184,63,.9)]" />
                      <span className="absolute right-[22%] top-[35%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_30px_rgba(240,184,63,.9)]" />
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                        {["Norway", "Eritrea", "Sweden", "USA"].map((place) => (
                          <span key={place} className="rounded-full border border-amber-400/50 bg-slate-950/50 px-3 py-1 text-xs font-bold">
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-amber-400/50 bg-slate-950/70 shadow-2xl shadow-slate-950/40 backdrop-blur md:grid-cols-3">
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
                <p className="mt-6 font-black text-amber-700">{card.action} -&gt;</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#020b18] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Live demo network</p>
            <h2 className="mt-4 text-5xl font-black leading-tight">A community that already feels alive.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              These are demo members and stories for now, but the layout is built like a real community feed:
              people, roles, locations, culture, events and shared memories.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {members.slice(0, 4).map((member) => (
                <Link key={member.name} href="/community" className="rounded-3xl border border-amber-400/20 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 font-black text-slate-950">{member.initials}</span>
                    <div>
                      <p className="font-black">{member.name}</p>
                      <p className="text-sm text-slate-300">{member.location}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-bold text-amber-300">{member.role}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {stories.map((story) => (
              <Link key={story.title} href="/stories" className="grid gap-5 overflow-hidden rounded-3xl border border-amber-400/20 bg-white/5 p-4 transition hover:-translate-y-1 hover:bg-white/10 md:grid-cols-[180px_1fr]">
                <div className="min-h-40 rounded-2xl bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(2,11,24,.1),rgba(2,11,24,.55)),url('${story.image}')` }} />
                <div className="p-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-slate-950">{story.category}</span>
                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{story.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black">{story.title}</h3>
                  <p className="mt-2 text-slate-300">{story.content}</p>
                </div>
              </Link>
            ))}
          </div>
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
          <Link href="/gallery" className="mt-6 inline-flex font-black text-amber-300">View Gallery -&gt;</Link>
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
