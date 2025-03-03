import { mediplanApiCall } from "@/lib/api";
import { AuthToken } from "@/lib/definitions";

const AUTH_PATH = "/auth";

export async function login(credentials: { email: string; password: string }) {
  const data = await mediplanApiCall<AuthToken>(`${AUTH_PATH}/login`, "POST", {
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
    publicRoute: true,
  });

  return data;
}
