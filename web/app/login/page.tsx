"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error ?? "Innloggingen mislyktes.");
      setPending(false);
      return;
    }
    const next = searchParams.get("next");
    router.replace(next?.startsWith("/") ? next : "/profile");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#020b18] px-5 py-16 text-white lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-amber-400/25 bg-white/5 shadow-2xl shadow-slate-950/40 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="relative min-h-[520px] bg-cover bg-center p-8" style={{ backgroundImage: "url('/images/places/village-view.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#020b18]/95 via-[#062039]/85 to-[#0c4f76]/60" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-300">Member access</p>
              <h1 className="mt-5 text-5xl font-black leading-tight">Welcome back to AdiLink.</h1>
            </div>
            <div className="rounded-3xl border border-amber-400/30 bg-slate-950/60 p-6 backdrop-blur">
              <p className="text-2xl font-black text-amber-300">Demo note</p>
              <p className="mt-3 text-slate-200">
                Login is connected to the real API. Add `DATABASE_URL` in Vercel/Neon to use real accounts.
              </p>
            </div>
          </div>
        </section>

        <section className="p-8 lg:p-12">
          <h2 className="text-4xl font-black">Logg inn</h2>
          <p className="mt-3 text-slate-300">Access profile, member tools and the protected community features.</p>
          <form onSubmit={submit} className="mt-8 space-y-5">
            <label className="block font-bold">
              E-post
              <input className="mt-2 w-full rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none ring-amber-400 focus:ring-4" name="email" type="email" autoComplete="email" required />
            </label>
            <label className="block font-bold">
              Passord
              <input className="mt-2 w-full rounded-xl border border-white/10 bg-white p-4 text-slate-950 outline-none ring-amber-400 focus:ring-4" name="password" type="password" autoComplete="current-password" required />
            </label>
            {error && <p role="alert" className="rounded-xl bg-red-100 p-4 font-bold text-red-800">{error}</p>}
            <button disabled={pending} className="w-full rounded-xl bg-amber-400 p-4 font-black text-slate-950 shadow-xl shadow-amber-950/30 disabled:opacity-60">
              {pending ? "Logger inn..." : "Logg inn"}
            </button>
          </form>
          <p className="mt-6 text-slate-300">
            Har du ikke konto? <Link className="font-black text-amber-300" href="/register">Registrer deg</Link>
          </p>
          <Link href="/vip" className="mt-6 inline-flex font-black text-amber-300">View VIP demo -&gt;</Link>
        </section>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#020b18] px-6 py-16 text-white">Laster innlogging...</main>}>
      <LoginForm />
    </Suspense>
  );
}
