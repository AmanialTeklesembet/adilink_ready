"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: form.get("name"), email: form.get("email"), password: form.get("password") }),
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error ?? "Registreringen mislyktes.");
      setPending(false);
      return;
    }
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-[#020b18] px-5 py-16 text-white lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-amber-400/25 bg-white/5 shadow-2xl shadow-slate-950/40 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="p-8 lg:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Join AdiLink</p>
          <h1 className="mt-5 text-5xl font-black leading-tight">Create your community profile.</h1>
          <p className="mt-4 text-slate-300">Start with name, email and password. Profile details can be completed later.</p>
          <form onSubmit={submit} className="mt-8 space-y-5">
            <label className="block font-bold">Navn<input className="mt-2 w-full rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none ring-amber-400 focus:ring-4" name="name" autoComplete="name" minLength={2} required /></label>
            <label className="block font-bold">E-post<input className="mt-2 w-full rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none ring-amber-400 focus:ring-4" name="email" type="email" autoComplete="email" required /></label>
            <label className="block font-bold">Passord<input className="mt-2 w-full rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none ring-amber-400 focus:ring-4" name="password" type="password" autoComplete="new-password" minLength={8} required /></label>
            {error && <p role="alert" className="rounded-xl bg-red-100 p-4 font-bold text-red-800">{error}</p>}
            <button disabled={pending} className="w-full rounded-xl bg-amber-400 p-4 font-black text-slate-950 shadow-xl shadow-amber-950/30 disabled:opacity-60">
              {pending ? "Oppretter..." : "Registrer deg"}
            </button>
          </form>
          <p className="mt-6 text-slate-300">Har du allerede konto? <Link className="font-black text-amber-300" href="/login">Logg inn</Link></p>
        </section>

        <section className="relative min-h-[520px] bg-cover bg-center p-8" style={{ backgroundImage: "url('/images/stories/elders.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#020b18]/95 via-[#06314d]/80 to-[#0c4f76]/55" />
          <div className="relative z-10 flex h-full flex-col justify-end">
            <div className="rounded-3xl border border-amber-400/30 bg-slate-950/60 p-6 backdrop-blur">
              <h2 className="text-3xl font-black">What you get</h2>
              <ul className="mt-4 space-y-3 text-slate-200">
                <li>Profile and biography</li>
                <li>Events and RSVP demo</li>
                <li>Gallery, stories and places</li>
                <li>VIP dashboard preview</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
