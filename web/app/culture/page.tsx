const cultureAreas = [
  ["Language", "Collect words, expressions and stories that keep the language alive."],
  ["Traditions", "Document celebrations, family practices and community values."],
  ["Food & Market", "Share memories from markets, meals and gatherings."],
  ["Music & Memory", "Preserve songs, oral history and meaningful cultural moments."],
];

export default function CulturePage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Culture</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black md:text-7xl">Culture that can be seen, shared and remembered.</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            A structured place for traditions, language, values and stories that make Adi Naamen unique.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {cultureAreas.map(([title, text]) => (
            <article key={title} className="rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="text-3xl font-black">{title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
