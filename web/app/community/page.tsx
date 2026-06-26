import Link from "next/link";
import { communityStats, members } from "../data/mock";

export default function CommunityPage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Community</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black md:text-7xl">Members, families and local groups in one place.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            Demo member directory with realistic false data while the backend is being connected.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register" className="rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-950 hover:bg-amber-300">Create account</Link>
            <Link href="/vip" className="rounded-xl border border-amber-400 px-6 py-3 font-black hover:bg-white/10">Open VIP</Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {communityStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-white p-6 shadow-xl">
                <p className="text-3xl font-black text-amber-700">{stat.value}</p>
                <p className="mt-1 text-sm font-bold text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {members.map((member) => (
              <article key={member.name} className="rounded-3xl bg-white p-7 shadow-xl">
                <div className="flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-xl font-black text-slate-950">{member.initials}</span>
                  <div>
                    <h2 className="text-2xl font-black">{member.name}</h2>
                    <p className="font-bold text-amber-700">{member.role}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-2 text-slate-700">
                  <p>{member.location}</p>
                  <p>{member.language}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
