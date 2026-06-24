"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const hashRoutes: Record<string, string> = {
  about: "/about",
  culture: "/culture",
  community: "/community",
};

export function HashRedirect() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const route = hashRoutes[hash];

    if (route) {
      router.replace(route);
    }
  }, [router]);

  return null;
}
