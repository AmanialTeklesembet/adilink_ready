import { events } from "../data/mock";

export default function EventsPage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Events</p>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">Upcoming community moments.</h1>
          <p className="mt-6 max-w-3xl text-xl text-slate-300">
            False event data for now, designed like the real RSVP and participation hub.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5">
          {events.map((event) => (
            <article key={event.title} className="grid gap-5 rounded-3xl bg-white p-7 shadow-xl md:grid-cols-[210px_1fr_180px]">
              <div className="rounded-2xl bg-[#020b18] p-5 text-center text-white">
                <p className="text-sm font-bold text-amber-300">{event.location}</p>
                <p className="mt-3 text-2xl font-black">{event.date}</p>
              </div>
              <div>
                <h2 className="text-3xl font-black">{event.title}</h2>
                <p className="mt-3 text-lg text-slate-700">{event.description}</p>
              </div>
              <div className="flex flex-col justify-center">
                <p className="rounded-full bg-amber-100 px-4 py-2 text-center font-black text-amber-800">{event.guests}</p>
                <button className="mt-4 rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950">RSVP demo</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
