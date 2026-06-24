import Image from "next/image";

const places = [
  {
    name: "Village Viewpoint",
    image: "/images/places/village-view.jpg",
    description: "A scenic location overlooking the surrounding landscape and community roots.",
  },
  {
    name: "Historic Gathering Place",
    image: "/images/places/church.jpg",
    description: "An important meeting place for celebrations, memory and local connection.",
  },
  {
    name: "Highland Paths",
    image: "/images/places/hills.jpg",
    description: "Walking routes connecting nearby areas, farmland and family history.",
  },
];

export default function PlacesPage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Places</p>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">Explore Adi Naamen.</h1>
          <p className="mt-6 max-w-3xl text-xl text-slate-300">
            A first step toward a community map with meaningful places, memories and markers.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {places.map((place) => (
            <article key={place.name} className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image src={place.image} alt={place.name} width={800} height={600} className="h-64 w-full object-cover" />
              <div className="p-7">
                <h2 className="text-2xl font-black">{place.name}</h2>
                <p className="mt-4 leading-relaxed text-slate-700">{place.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
