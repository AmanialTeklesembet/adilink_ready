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
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: form.get("name"), email: form.get("email"), password: form.get("password") }),
    });
    const data = await response.json();
    if (!response.ok) { setError(data.error ?? "Registreringen mislyktes."); setPending(false); return; }
    router.push("/login");
  }

  return (
    <main className="mx-auto min-h-screen max-w-md px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">Opprett konto</h1>
      <form onSubmit={submit} className="space-y-5">
        <label className="block">Navn<input className="mt-2 w-full rounded-lg border p-3 text-slate-950" name="name" autoComplete="name" minLength={2} required /></label>
        <label className="block">E-post<input className="mt-2 w-full rounded-lg border p-3 text-slate-950" name="email" type="email" autoComplete="email" required /></label>
        <label className="block">Passord<input className="mt-2 w-full rounded-lg border p-3 text-slate-950" name="password" type="password" autoComplete="new-password" minLength={8} required /></label>
        {error && <p role="alert" className="rounded-lg bg-red-100 p-3 text-red-800">{error}</p>}
        <button disabled={pending} className="w-full rounded-lg bg-amber-500 p-3 font-semibold text-slate-950 disabled:opacity-60">{pending ? "Oppretter..." : "Registrer deg"}</button>
      </form>
      <p className="mt-6">Har du allerede konto? <Link className="underline" href="/login">Logg inn</Link></p>
    </main>
  );
}
