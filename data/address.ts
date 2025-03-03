import { AddressSearchResult } from "@/lib/definitions";

const baseUrl = process.env.ADDRESS_API_URL;

export const searchAddress = async (
  query: string,
  limit = 15
): Promise<AddressSearchResult | null> => {
  const SEARCH_PATH = "/search";

  const response = await fetch(
    `${baseUrl}${SEARCH_PATH}/?q=${query}&limit=${limit}`
  );

  if (response.ok) return (await response.json()) as AddressSearchResult;
  return null;
};
