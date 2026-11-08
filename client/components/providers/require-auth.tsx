
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useCurrentUser } from "@/hooks/use-auth";
import { Spinner } from "@/components/ui/spinner";

export function RequireAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: user, isPending, isError } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && (isError || !user)) {
      router.replace("/login?next=%2Fdashboard");
    }
  }, [isPending, isError, user, router]);

  if (isPending || isError || !user) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <Spinner className="size-6" />
          <p className="text-sm">Loading your workspace…</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
