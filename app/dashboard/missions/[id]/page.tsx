import MissionAssignee from "@/components/missions/mission-assignee";
import MissionDetails from "@/components/missions/mission-details";
import MissionOverview from "@/components/missions/mission-overview";
import PageHeader from "@/components/page-header";
import { Separator } from "@/components/ui/separator";
import { getMission } from "@/data/missions";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Mission overview",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const mission = await getMission(id);

  if (!mission) notFound();

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Missions", href: "/dashboard/missions" },
          { label: `Mission ${mission.id}`, href: "#" },
        ]}
      />
      <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div>
          <h2 className="text-2xl font-bold tracking-tight md:line-clamp-1">
            Mission overview
          </h2>
          <p className="text-muted-foreground">{mission.title}</p>
        </div>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <MissionOverview description={mission.title} />
            <MissionDetails
              start={mission.start}
              end={mission.end}
              address={mission.address}
            />
          </div>
          <div className="space-y-6">
            <MissionAssignee assignee={mission.assignee} />
          </div>
        </div>
      </main>
    </>
  );
}
