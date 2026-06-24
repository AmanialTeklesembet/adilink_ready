import Link from "next/link";

const principles = [
  "Preserve shared history and family memory",
  "Connect the global Adi Naamen community",
  "Make culture, places and events easy to discover",
  "Create a trusted member space for deeper collaboration",
];

export default function AboutPage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">About AdiLink</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black md:text-7xl">A digital home for Adi Naamen worldwide.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            AdiLink brings together history, culture, places, events, photos and member tools so the
            community can preserve what matters and build stronger connections across countries.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-black">Mission</h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              Build a practical, beautiful and trusted platform where Adi Naamen members can learn,
              share, participate and stay connected.
            </p>
            <Link href="/community" className="mt-8 inline-flex rounded-xl bg-amber-400 px-6 py-3 font-black text-slate-950 hover:bg-amber-300">
              Join the community
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((item) => (
              <div key={item} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
                <p className="text-lg font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
