import Link from "next/link";

const modules = [
  ["Profile", "Photo, name, language, location, biography and membership status."],
  ["Friends", "Search members, send requests and build trusted connections."],
  ["Messages", "Private member communication for the community."],
  ["Groups", "Focused spaces for countries, families, culture and events."],
  ["Events", "Private VIP gatherings and participation tools."],
  ["Moderator", "Reports, roles, announcements and community safety tools."],
];

export default function VipPage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">AdiLink VIP</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black md:text-7xl">Private community, trusted members and deeper connection.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            VIP is prepared as the secure member layer for profiles, friendships, direct messages,
            groups, events, media and moderation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/profile" className="rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-950 hover:bg-amber-300">
              Open profile
            </Link>
            <form action="/api/auth/logout" method="post">
              <button className="rounded-xl border border-amber-400 px-6 py-3 font-black hover:bg-white/10" type="submit">
                Log out
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {modules.map(([title, text]) => (
            <article key={title} className="rounded-3xl bg-white p-7 shadow-xl">
              <h2 className="text-2xl font-black">{title}</h2>
              <p className="mt-4 leading-relaxed text-slate-700">{text}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-[#020b18] p-7 text-white shadow-xl">
            <h2 className="text-2xl font-black">Technical setup</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Backend: Next.js API Routes</li>
              <li>ORM: Prisma</li>
              <li>Database: PostgreSQL on Neon</li>
              <li>Authentication: JWT in an HTTP-only cookie</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-7 shadow-xl lg:col-span-2">
            <h2 className="text-2xl font-black">Next build phase</h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              The interface is ready for backend wiring: friend requests, messages, group chat,
              notifications, reports and the member map can now be connected module by module.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
