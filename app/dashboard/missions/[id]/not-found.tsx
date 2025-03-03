import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <Frown className="w-10" />
      <h2 className="text-2l font-bold tracking-tight">404 Not Found</h2>
      <p>Could not found the requested mission</p>
      <Button asChild>
        <Link href="/dashboard/missions">Go back</Link>
      </Button>
    </main>
  );
}
