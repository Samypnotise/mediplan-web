"use client";

import { MissionTableRowActions } from "@/components/missions/mission-table-row-actions";
import { Mission } from "@/lib/definitions";
import { ColumnDef } from "@tanstack/react-table";
import { DateTime } from "luxon";
import Link from "next/link";

export const columns: ColumnDef<Mission>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const mission = row.original;
      return (
        <div className="normal-case font-medium line-clamp-1">
          <Link href={`/dashboard/missions/${mission.id}`}>
            {row.getValue("title")}
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "patient",
    header: () => <div className="w-[150px]">Patient</div>,
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("patient")}</div>
    ),
  },
  {
    accessorKey: "start",
    header: () => <div className="">Start</div>,
    cell: ({ row }) => {
      const start: string = row.getValue("start");
      const dt = DateTime.fromISO(start);

      return <time>{dt.toLocaleString(DateTime.DATETIME_MED)}</time>;
    },
  },
  {
    accessorKey: "end",
    header: () => <div className="">End</div>,
    cell: ({ row }) => {
      const end: string = row.getValue("end");
      const dt = DateTime.fromISO(end);

      return <time>{dt.toLocaleString(DateTime.DATETIME_MED)}</time>;
    },
  },
  // {
  //   accessorKey: "assignee",
  //   header: () => <div className="text-right">Assignee</div>,
  //   cell: ({ row }) => {
  //     const user: User = row.getValue("assignee");
  //     return (
  //       <div className="flex flex-row-reverse">
  //         <Avatar className="h-8 w-8 rounded-lg">
  //           <AvatarFallback className="rounded-lg">{`${user.firstName[0]}${user.lastName[0]}`}</AvatarFallback>
  //         </Avatar>
  //       </div>
  //     );
  //   },
  // },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      return <MissionTableRowActions row={row} />;
    },
  },
];
