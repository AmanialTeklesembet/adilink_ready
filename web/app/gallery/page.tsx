import Image from "next/image";

const images = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
  "/images/gallery/gallery-7.jpg",
  "/images/gallery/gallery-8.jpg",
  "/images/gallery/gallery-9.jpg",
];

export default function GalleryPage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Gallery</p>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">Adi Naamen in pictures.</h1>
          <p className="mt-6 max-w-3xl text-xl text-slate-300">
            A growing visual archive for people, landscapes, events and community memories.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <article key={image} className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image
                src={image}
                alt={`Adi Naamen gallery photo ${index + 1}`}
                width={800}
                height={600}
                className="h-72 w-full object-cover transition duration-300 hover:scale-105"
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
