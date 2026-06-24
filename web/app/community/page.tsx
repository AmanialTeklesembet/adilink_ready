import Link from "next/link";

const features = [
  "Member profiles with location, language and biography",
  "Events and participation for local and global gatherings",
  "Gallery and stories for shared community memory",
  "VIP tools for trusted private community features",
];

export default function CommunityPage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Community</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black md:text-7xl">A stronger community starts with connection.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            AdiLink is built to help members find each other, share knowledge and participate in events,
            while keeping private features protected.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register" className="rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-950 hover:bg-amber-300">
              Create account
            </Link>
            <Link href="/events" className="rounded-xl border border-amber-400 px-6 py-3 font-black hover:bg-white/10">
              See events
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature} className="rounded-2xl bg-white p-6 text-lg font-black shadow-lg">
              {feature}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
