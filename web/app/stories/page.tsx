import Image from "next/image";
import { stories } from "../data/mock";

export default function StoriesPage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Stories</p>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">Stories worth preserving.</h1>
          <p className="mt-6 max-w-3xl text-xl text-slate-300">
            A premium story archive preview with categories, authors and reading time.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.title} className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image src={story.image} alt={story.title} width={1200} height={700} className="h-72 w-full object-cover" />
              <div className="p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">{story.category}</p>
                  <p className="text-sm font-bold text-slate-500">{story.readTime}</p>
                </div>
                <p className="mt-5 font-bold text-amber-700">{story.author}</p>
                <h2 className="mt-2 text-3xl font-black">{story.title}</h2>
                <p className="mt-4 leading-relaxed text-slate-700">{story.content}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
