import PageHeader from "@/components/page-header";
import { Metadata } from "next";

const title = "Patients";

export const metadata: Metadata = {
  title,
};

export default async function Page() {
  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Patients", href: "#" },
        ]}
      />
      <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </main>
    </>
  );
}
