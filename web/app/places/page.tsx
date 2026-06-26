import Image from "next/image";
import { places } from "../data/mock";

export default function PlacesPage() {
  return (
    <main className="bg-[#f8f2e8] text-slate-950">
      <section className="bg-[#020b18] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Places</p>
          <h1 className="mt-5 text-5xl font-black md:text-7xl">Explore Adi Naamen.</h1>
          <p className="mt-6 max-w-3xl text-xl text-slate-300">
            A map-ready places page with false coordinates and real visual structure.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl bg-[#020b18] p-6 text-white shadow-xl">
            <h2 className="text-3xl font-black">Demo member map</h2>
            <div className="relative mt-6 h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-[#174f50] to-[#04263d]">
              {["left-[22%] top-[28%]", "left-[55%] top-[58%]", "right-[20%] top-[38%]", "left-[42%] top-[42%]"].map((position) => (
                <span key={position} className={`absolute ${position} h-4 w-4 rounded-full bg-amber-400 shadow-[0_0_30px_rgba(240,184,63,.9)]`} />
              ))}
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {["Norway 420", "Eritrea 740", "Sweden 180", "USA 390"].map((label) => (
                  <span key={label} className="rounded-full border border-amber-400/50 bg-slate-950/60 px-3 py-1 text-sm">{label}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {places.map((place) => (
              <article key={place.name} className="overflow-hidden rounded-3xl bg-white shadow-xl">
                <Image src={place.image} alt={place.name} width={800} height={600} className="h-56 w-full object-cover" />
                <div className="p-7">
                  <p className="font-black text-amber-700">{place.type} - {place.coordinates}</p>
                  <h2 className="mt-2 text-2xl font-black">{place.name}</h2>
                  <p className="mt-4 leading-relaxed text-slate-700">{place.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
