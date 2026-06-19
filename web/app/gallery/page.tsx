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
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Adi Naamen Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            alt="Adi Naamen"
            width={600}
            height={400}
            className="w-full h-72 object-cover rounded-xl"
          />
        ))}
      </div>
    </main>
  );
}