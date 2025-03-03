import { mediplanApiCall } from "@/lib/api";
import { User } from "@/lib/definitions";

const USERS_PATH = "/users";

/**
 * Get the currently authenticated user
 */
export const getAuthenticatedUser = async (): Promise<User> => {
  const response = await mediplanApiCall<User>(`${USERS_PATH}/me`, "GET");

  if (!response.success) throw new Error(response.error.title);

  return response.data;
};

/**
 * Get user by id
 * @param id the user id
 * @returns the correct user, null if not found
 */
export const getuser = async (id: string): Promise<User | null> => {
  const response = await mediplanApiCall<User>(`${USERS_PATH}/${id}`, "GET");

  if (!response.success) return null;
  return response.data;
};
