"use client";

import { Button } from "./ui/button";

export function SignOut() {
  return (
    <form>
      <Button type="submit" variant="destructive">
        Sign Out
      </Button>
    </form>
  );
}
