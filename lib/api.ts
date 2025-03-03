import { verifySession } from "@/lib/session";
import { Error } from "@/lib/definitions";

export type Headers = HeadersInit;

export type ApiCallOptions = {
  params?: string;
  body?: unknown;
  headers?: Headers;
  publicRoute?: boolean;
};

type ApiResponse<T> =
  | { success: true; data: T | null }
  | { success: false; error: Error };

type AvailableApiMethods = "GET" | "POST" | "DELETE";

export async function mediplanApiCall<T>(
  path: string,
  method: AvailableApiMethods,
  { params, body, headers, publicRoute }: ApiCallOptions = {}
): Promise<ApiResponse<T>> {
  if (!publicRoute) {
    // Verify user's session
    const { authToken } = await verifySession();
    headers = {
      ...headers,
      Authorization: `Bearer ${authToken}`,
    };
  }

  const baseUrl = process.env.API_URL;

  const response = await fetch(`${baseUrl}${path}?${params}`, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return {
      success: false,
      error: await response.json(),
    };
  }

  let data: T | null = null;
  try {
    data = await response.json();
  } catch (error) {
    // If the error is not due to empty response body
    if (
      !(error instanceof SyntaxError) ||
      error.message != "Unexpected end of JSON input"
    )
      throw error;
  }

  return {
    success: true,
    data: data,
  };
}
