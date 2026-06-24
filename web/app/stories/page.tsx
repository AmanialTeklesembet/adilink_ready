import Image from "next/image";

const stories = [
  {
    title: "Morning Gatherings",
    author: "Community Memory",
    image: "/images/stories/elders.jpg",
    content:
      "Older residents describe mornings in Adi Naamen as a time when neighbours gathered to share news, coffee and stories before starting the day.",
  },
  {
    title: "Market Day Traditions",
    author: "Local Voices",
    image: "/images/stories/market.jpg",
    content:
      "Weekly market days brought together families from nearby villages, creating opportunities to exchange goods, ideas and traditions.",
  },
];

export default function StoriesPage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Stories</p>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">Stories worth preserving.</h1>
          <p className="mt-6 max-w-3xl text-xl text-slate-300">
            A first archive for memories, family history and community voices.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8">
          {stories.map((story) => (
            <article key={story.title} className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image src={story.image} alt={story.title} width={1200} height={700} className="h-80 w-full object-cover" />
              <div className="p-8">
                <p className="font-bold text-amber-700">{story.author}</p>
                <h2 className="mt-2 text-3xl font-black">{story.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-700">{story.content}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
