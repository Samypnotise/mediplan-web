"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
        Something went wrong !
      </h2>
      <Button onClick={() => reset()}>Try again</Button>
    </main>
  );
}
