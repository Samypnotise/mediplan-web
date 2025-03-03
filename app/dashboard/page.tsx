import PageHeader from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <>
      <PageHeader breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]} />
      <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
      </main>
    </>
  );
}
