import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Ikke innlogget." }, { status: 401 });

  const body = await request.json();
  const name = typeof body.name === "string" ? body.name.trim() : "";
  if (name.length < 2) return NextResponse.json({ error: "Navnet må ha minst 2 tegn." }, { status: 400 });

  const profileData = {
    imageUrl: typeof body.imageUrl === "string" ? body.imageUrl.trim() || null : null,
    language: typeof body.language === "string" ? body.language.trim() || null : null,
    location: typeof body.location === "string" ? body.location.trim() || null : null,
    biography: typeof body.biography === "string" ? body.biography.trim().slice(0, 2000) || null : null,
  };

  const user = await prisma.user.update({
    where: { id: session.id },
    data: { name, profile: { upsert: { create: profileData, update: profileData } } },
    select: { name: true, profile: true },
  });
  return NextResponse.json({ user });
}
