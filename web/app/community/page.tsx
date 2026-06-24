import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-amber-400">Til forsiden</Link>
        <h1 className="mt-8 text-4xl font-bold">Community</h1>
        <p className="mt-6 text-lg text-slate-300">
          Meet members, take part in events and contribute stories and photos to a growing global
          community.
        </p>
      </div>
    </main>
  );
}
