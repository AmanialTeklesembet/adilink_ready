import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b border-amber-400/30 bg-slate-950/95 px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-amber-400">AdiLink</Link>
        <div className="flex flex-wrap items-center gap-5">
          <Link href="/#about">About Adi Naamen</Link>
          <Link href="/#culture">Culture</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/#community">Community</Link>
          <Link href="/vip">VIP Area</Link>
          <Link href="/login" className="rounded-lg border border-amber-400 px-4 py-2">Login</Link>
          <Link href="/register" className="rounded-lg bg-amber-400 px-4 py-2 font-semibold text-slate-950">Join now</Link>
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="mb-4 text-5xl font-bold">AdiLink</h1>
        <p className="mb-10 text-lg text-slate-300">Utforsk Adi Naamen gjennom historier, steder, arrangementer og bilder.</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link href="/gallery" className="rounded-xl bg-slate-800 p-6 shadow">Galleri</Link>
          <Link href="/places" className="rounded-xl bg-slate-800 p-6 shadow">Steder</Link>
          <Link href="/events" className="rounded-xl bg-slate-800 p-6 shadow">Arrangementer</Link>
          <Link href="/stories" className="rounded-xl bg-slate-800 p-6 shadow">Historier</Link>
          <Link href="/vip" className="rounded-xl bg-slate-800 p-6 shadow">VIP</Link>
        </div>
      </div>

      <section id="about" className="scroll-mt-24 bg-white px-6 py-20 text-slate-900">
        <div className="mx-auto max-w-4xl"><h2 className="mb-4 text-3xl font-bold">About Adi Naamen</h2><p>AdiLink connects people from Adi Naamen around the world and preserves shared history, knowledge and memories.</p></div>
      </section>
      <section id="culture" className="scroll-mt-24 bg-amber-50 px-6 py-20 text-slate-900">
        <div className="mx-auto max-w-4xl"><h2 className="mb-4 text-3xl font-bold">Culture</h2><p>Explore traditions, language, stories and places that form the cultural heritage of Adi Naamen.</p></div>
      </section>
      <section id="community" className="scroll-mt-24 bg-white px-6 py-20 text-slate-900">
        <div className="mx-auto max-w-4xl"><h2 className="mb-4 text-3xl font-bold">Community</h2><p>Meet members, take part in events and contribute stories and photos to a growing global community.</p></div>
      </section>
    </main>
  );
}
