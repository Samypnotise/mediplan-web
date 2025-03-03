import DataTable from "@/components/ui/data-table";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import SearchForm from "@/components/ui/search";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { columns } from "./columns";
import { getMissions } from "@/data/missions";
import TablePagination from "@/components/table-pagination";

const title = "Missions";

export const metadata: Metadata = {
  title,
};

export default async function Page(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = (await searchParams?.query) || "";
  const page = (await searchParams?.page) || "";
  const { meta, data } = await getMissions({
    search: query,
    page: Number.parseInt(page),
  });
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Missions", href: "#" },
        ]}
      />
      <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <SearchForm placeholder="Search mission" />
          <Button asChild>
            <Link href="/dashboard/missions/create">
              <Plus />
              Create Mission
            </Link>
          </Button>
        </div>
        <div className="rounded-md border">
          <DataTable columns={columns} data={data} />
        </div>
        {meta.lastPage != 1 && <TablePagination meta={meta} />}
      </main>
    </>
  );
}
