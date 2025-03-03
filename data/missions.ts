import { mediplanApiCall } from "@/lib/api";
import { Mission, Paginable } from "@/lib/definitions";

const MISSIONS_PATH = "/missions";
type MissionSortOption =
  | "title_asc"
  | "title_desc"
  | "start_asc"
  | "start_desc"
  | "end_asc"
  | "end_desc";

export const getMissions = async ({
  search,
  page,
  sort,
}: {
  search?: string;
  page?: number;
  sort?: MissionSortOption;
}) => {
  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (page) params.set("page", page.toString());
  if (sort) params.set("sort", sort);

  const response = await mediplanApiCall<Paginable<Mission>>(
    MISSIONS_PATH,
    "GET",
    {
      params: params.toString(),
    }
  );

  if (!response.success) throw new Error(response.error.title);
  return response.data;
};

export const getMission = async (id: string): Promise<Mission | null> => {
  const response = await mediplanApiCall<Mission>(
    `${MISSIONS_PATH}/${id}`,
    "GET"
  );

  if (!response.success) return null;

  return response.data;
};

export const deleteMission = async (id: string) => {
  const response = await mediplanApiCall<void>(
    `${MISSIONS_PATH}/${id}`,
    "DELETE"
  );

  if (!response.success) {
    const error = response.error;
    return {
      code: `${error.code}`,
      message: `${error.title} : ${error.detail}`,
    };
  }
};
