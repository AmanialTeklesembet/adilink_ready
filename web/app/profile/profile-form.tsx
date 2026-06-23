"use client";

import { FormEvent, useState } from "react";

type Props = { user: { name: string; profile: { imageUrl: string | null; language: string | null; location: string | null; biography: string | null } | null } };

export default function ProfileForm({ user }: Props) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setMessage(""); setError("");
    const form = new FormData(event.currentTarget);
    const body = Object.fromEntries(form.entries());
    const response = await fetch("/api/profile", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const data = await response.json();
    if (!response.ok) setError(data.error ?? "Kunne ikke lagre profilen."); else setMessage("Profilen er lagret.");
  }
  const input = "mt-2 w-full rounded-lg border p-3 text-slate-950";
  return (
    <form onSubmit={submit} className="space-y-5">
      <label className="block">Navn<input className={input} name="name" defaultValue={user.name} required minLength={2} /></label>
      <label className="block">Profilbilde (URL)<input className={input} name="imageUrl" type="url" defaultValue={user.profile?.imageUrl ?? ""} /></label>
      <label className="block">Språk<input className={input} name="language" defaultValue={user.profile?.language ?? ""} /></label>
      <label className="block">Lokasjon<input className={input} name="location" defaultValue={user.profile?.location ?? ""} /></label>
      <label className="block">Biografi<textarea className={input} rows={6} maxLength={2000} name="biography" defaultValue={user.profile?.biography ?? ""} /></label>
      {error && <p role="alert" className="rounded-lg bg-red-100 p-3 text-red-800">{error}</p>}
      {message && <p role="status" className="rounded-lg bg-green-100 p-3 text-green-800">{message}</p>}
      <button className="rounded-lg bg-amber-500 px-5 py-3 font-semibold text-slate-950">Lagre profil</button>
    </form>
  );
}
