const events = [
  {
    title: "Community Heritage Day",
    date: "August 15",
    location: "Central gathering area",
  },
  {
    title: "Traditional Music Evening",
    date: "September 10",
    location: "Community hall",
  },
];

export default function EventsPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Events
      </h1>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.title}
            className="rounded-xl border p-5"
          >
            <h2 className="text-xl font-semibold">
              {event.title}
            </h2>

            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
        ))}
      </div>
    </main>
  );
}