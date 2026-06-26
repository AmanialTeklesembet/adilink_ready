import Link from "next/link";
import { communityStats, members, messages, reports, vipModules } from "../data/mock";

export default function VipPage() {
  return (
    <main className="bg-[#020b18] text-white">
      <section className="relative overflow-hidden px-5 py-16 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(240,184,63,.18),transparent_25%),radial-gradient(circle_at_12%_80%,rgba(35,120,170,.22),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-amber-300">AdiLink VIP</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
                Private member hub for trusted Adi Naamen connection.
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
                A premium prototype for profiles, friends, messages, groups, events, media, member map and moderation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/profile" className="rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-950 hover:bg-amber-300">
                  Open profile
                </Link>
                <Link href="/community" className="rounded-xl border border-amber-400 px-6 py-3 font-black hover:bg-white/10">
                  Browse members
                </Link>
                <form action="/api/auth/logout" method="post">
                  <button className="rounded-xl border border-white/20 px-6 py-3 font-black hover:bg-white/10" type="submit">
                    Log out
                  </button>
                </form>
              </div>
            </div>

            <div className="rounded-[2rem] border border-amber-400/30 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="font-black text-amber-300">Live VIP Snapshot</p>
                <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-emerald-950">Demo data</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {communityStats.slice(0, 4).map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                    <p className="text-3xl font-black text-amber-300">{stat.value}</p>
                    <p className="text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-3xl border border-amber-400/25 bg-white/5 p-6">
            <h2 className="text-xl font-black text-amber-300">VIP Modules</h2>
            <div className="mt-5 grid gap-2">
              {vipModules.map((module) => (
                <a key={module.title} href={`#${module.title.toLowerCase().replaceAll(" ", "-")}`} className="rounded-xl px-4 py-3 text-slate-300 hover:bg-white/10 hover:text-white">
                  {module.title}
                </a>
              ))}
            </div>
          </aside>

          <div className="grid gap-6">
            <div className="grid gap-6 xl:grid-cols-3">
              <div className="rounded-3xl border border-amber-400/25 bg-white/5 p-6 xl:col-span-2">
                <h2 className="text-2xl font-black">Recent member activity</h2>
                <div className="mt-5 grid gap-3">
                  {messages.map((message) => (
                    <div key={message.time} className="rounded-2xl bg-slate-950/50 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-black text-amber-300">{message.from}</p>
                        <p className="text-sm text-slate-400">{message.time}</p>
                      </div>
                      <p className="mt-2 text-slate-200">{message.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-amber-400/25 bg-white/5 p-6">
                <h2 className="text-2xl font-black">Moderator queue</h2>
                <div className="mt-5 grid gap-3">
                  {reports.map((report) => (
                    <div key={report.type} className="flex items-center justify-between rounded-2xl bg-slate-950/50 p-4">
                      <span className="text-slate-300">{report.type}</span>
                      <span className="text-2xl font-black text-amber-300">{report.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {vipModules.map((module) => (
                <article key={module.title} id={module.title.toLowerCase().replaceAll(" ", "-")} className="rounded-3xl border border-amber-400/25 bg-white/5 p-6 shadow-xl">
                  <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-black text-slate-950">{module.status}</span>
                  <h2 className="mt-5 text-2xl font-black">{module.title}</h2>
                  <p className="mt-3 leading-relaxed text-slate-300">{module.text}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
              <div className="rounded-3xl border border-amber-400/25 bg-white/5 p-6">
                <h2 className="text-2xl font-black">Featured VIP members</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {members.slice(0, 4).map((member) => (
                    <div key={member.name} className="flex gap-4 rounded-2xl bg-slate-950/50 p-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-400 font-black text-slate-950">{member.initials}</span>
                      <div>
                        <p className="font-black">{member.name}</p>
                        <p className="text-sm text-slate-300">{member.role}</p>
                        <p className="text-sm text-slate-400">{member.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-amber-400/25 bg-white/5 p-6">
                <h2 className="text-2xl font-black">Tech stack</h2>
                <ul className="mt-5 space-y-3 text-slate-300">
                  <li>Frontend: Next.js, TypeScript, Tailwind CSS</li>
                  <li>Backend: Next.js API Routes</li>
                  <li>ORM: Prisma</li>
                  <li>Database: PostgreSQL on Neon</li>
                  <li>Authentication: JWT HTTP-only cookie</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
