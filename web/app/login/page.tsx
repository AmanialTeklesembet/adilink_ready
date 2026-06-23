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
    <main className="mx-auto min-h-screen max-w-md px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">Logg inn</h1>
      <form onSubmit={submit} className="space-y-5">
        <label className="block">E-post<input className="mt-2 w-full rounded-lg border p-3 text-slate-950" name="email" type="email" autoComplete="email" required /></label>
        <label className="block">Passord<input className="mt-2 w-full rounded-lg border p-3 text-slate-950" name="password" type="password" autoComplete="current-password" required /></label>
        {error && <p role="alert" className="rounded-lg bg-red-100 p-3 text-red-800">{error}</p>}
        <button disabled={pending} className="w-full rounded-lg bg-amber-500 p-3 font-semibold text-slate-950 disabled:opacity-60">{pending ? "Logger inn..." : "Logg inn"}</button>
      </form>
      <p className="mt-6">Har du ikke konto? <Link className="underline" href="/register">Registrer deg</Link></p>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<main className="mx-auto min-h-screen max-w-md px-6 py-16">Laster innlogging...</main>}>
      <LoginForm />
    </Suspense>
  );
}
