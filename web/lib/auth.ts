import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export type Session = { id: number; role: string };

export async function getSession(): Promise<Session | null> {
  const token = (await cookies()).get("token")?.value;
  const secret = process.env.JWT_SECRET;
  if (!token || !secret) return null;

  try {
    return jwt.verify(token, secret) as Session;
  } catch {
    return null;
  }
}
