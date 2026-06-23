import Image from "next/image";

const places = [
  {
    name: "Village Viewpoint",
    image: "/images/places/village-view.jpg",
    description:
      "A scenic location overlooking the surrounding landscape.",
  },
  {
    name: "Historic Gathering Place",
    image: "/images/places/church.jpg",
    description:
      "An important meeting place for community celebrations.",
  },
  {
    name: "Highland Paths",
    image: "/images/places/hills.jpg",
    description:
      "Walking routes connecting nearby areas and farmland.",
  },
];

export default function PlacesPage() {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Places
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {places.map((place) => (
          <div
            key={place.name}
            className="rounded-xl border overflow-hidden"
          >
            <Image
              src={place.image}
              alt={place.name}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {place.name}
              </h2>

              <p className="mt-2 text-gray-600">
                {place.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}