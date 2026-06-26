import Image from "next/image";
import { galleryImages } from "../data/mock";

export default function GalleryPage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Gallery</p>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">Adi Naamen in pictures.</h1>
          <p className="mt-6 max-w-3xl text-xl text-slate-300">
            Demo gallery with likes, categories and upload-ready card structure.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <article key={image} className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image src={image} alt={`Adi Naamen gallery photo ${index + 1}`} width={800} height={600} className="h-72 w-full object-cover transition duration-300 hover:scale-105" />
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="font-black">Community photo #{index + 1}</p>
                  <p className="text-sm text-slate-500">{index % 2 === 0 ? "History" : "Nature"} archive</p>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-black text-amber-800">{24 + index * 7} likes</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
