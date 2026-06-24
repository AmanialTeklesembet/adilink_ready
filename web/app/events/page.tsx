const events = [
  {
    title: "Community Heritage Day",
    date: "15 August 2026",
    location: "Central gathering area",
    description: "A day for stories, photos, family memory and community connection.",
  },
  {
    title: "Traditional Music Evening",
    date: "10 September 2026",
    location: "Community hall",
    description: "An evening for music, language, food and cultural celebration.",
  },
  {
    title: "Global Online Gathering",
    date: "21 October 2026",
    location: "Online",
    description: "A digital gathering for members across Norway, Eritrea and the diaspora.",
  },
];

export default function EventsPage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Events</p>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">Upcoming community moments.</h1>
          <p className="mt-6 max-w-3xl text-xl text-slate-300">
            Events will become a central place for participation, announcements and local gatherings.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5">
          {events.map((event) => (
            <article key={event.title} className="grid gap-5 rounded-3xl bg-white p-7 shadow-xl md:grid-cols-[180px_1fr]">
              <div className="rounded-2xl bg-[#020b18] p-5 text-center text-white">
                <p className="text-sm font-bold text-amber-300">{event.location}</p>
                <p className="mt-3 text-2xl font-black">{event.date}</p>
              </div>
              <div>
                <h2 className="text-3xl font-black">{event.title}</h2>
                <p className="mt-3 text-lg text-slate-700">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
