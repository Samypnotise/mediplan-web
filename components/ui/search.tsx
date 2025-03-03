"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Label } from "@/components/ui/label";
import { Input } from "./input";
import { Search } from "lucide-react";

export default function SearchForm({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
      params.delete("page");
    } else {
      params.delete("query");
    }
    replace(`${pathName}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Search className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 select-none opacity-50" />
      <Input
        id="search"
        placeholder={placeholder}
        className="pl-8"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}
