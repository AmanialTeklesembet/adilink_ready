import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">AdiLink</h1>

        <p className="text-lg text-gray-600 mb-10">
          Utforsk Adi Naamen gjennom historier, steder, arrangementer og bilder.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/gallery" className="rounded-xl bg-white p-6 shadow">
            📸 Galleri
          </Link>

          <Link href="/places" className="rounded-xl bg-white p-6 shadow">
              Steder
          </Link>

          <Link href="/events" className="rounded-xl bg-white p-6 shadow">
            📅 Arrangementer
          </Link>

          <Link href="/stories" className="rounded-xl bg-white p-6 shadow">
            📖 Historier
          </Link>

          <Link href="/vip" className="rounded-xl bg-white p-6 shadow">
            ⭐ VIP
          </Link>
        </div>
      </div>
    </main>
  );
}