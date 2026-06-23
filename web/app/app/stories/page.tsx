import Image from "next/image";

const stories = [
  {
    title: "Morning Gatherings",
    author: "Community Memory",
    image: "/images/stories/elders.jpg",
    content:
      "Older residents often describe mornings in Adi Naamen as a time when neighbours gathered to share news, coffee and stories before starting the day.",
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
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Stories & Memories
      </h1>

      <div className="grid gap-8">
        {stories.map((story) => (
          <article
            key={story.title}
            className="rounded-xl border p-6 shadow-sm"
          >
            <Image
              src={story.image}
              alt={story.title}
              width={1200}
              height={700}
              className="rounded-lg mb-4 w-full h-64 object-cover"
            />

            <h2 className="text-2xl font-semibold">
              {story.title}
            </h2>

            <p className="text-gray-500 mb-3">
              {story.author}
            </p>

            <p>{story.content}</p>
          </article>
        ))}
      </div>
    </main>
  );
}