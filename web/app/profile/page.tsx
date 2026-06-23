import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import ProfileForm from "./profile-form";

export default async function ProfilePage() {
  const session = await getSession();
  if (!session) redirect("/login?next=/profile");
  const user = await prisma.user.findUnique({ where: { id: session.id }, select: { name: true, profile: { select: { imageUrl: true, language: true, location: true, biography: true } } } });
  if (!user) redirect("/login?next=/profile");
  return <main className="mx-auto max-w-2xl p-6"><h1 className="mb-8 text-4xl font-bold">Min profil</h1><ProfileForm user={user} /></main>;
}
