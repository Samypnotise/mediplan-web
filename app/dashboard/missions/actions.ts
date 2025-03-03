"use server";

import { deleteMission as deleteMissionApi } from "@/data/missions";
import { revalidatePath } from "next/cache";

export async function deleteMission(missionId: string) {
  await deleteMissionApi(missionId);
  revalidatePath("/dashboard/missions");
}
