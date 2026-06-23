import Link from "next/link";

export default function VipPage() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-4xl font-bold">VIP</h1>
      <p className="text-lg">Velkommen til VIP-siden.</p>
      <div className="mt-8 rounded-xl border p-6">
        <h2 className="text-2xl font-semibold">Technical setup</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Backend: Next.js API Routes</li><li>ORM: Prisma</li><li>Database: PostgreSQL on Neon</li><li>Authentication: JWT in an HTTP-only cookie</li>
        </ul>
      </div>
      <div className="mt-8 flex gap-4">
        <Link href="/profile" className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-950">Profile</Link>
        <form action="/api/auth/logout" method="post"><button className="rounded-lg border px-4 py-2" type="submit">Log out</button></form>
      </div>
    </main>
  );
}
