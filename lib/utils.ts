import { clsx, type ClassValue } from "clsx";
import { DateTime, DateTimeFormatOptions } from "luxon";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: string,
  format: DateTimeFormatOptions = DateTime.DATETIME_MED
): string {
  const dt = DateTime.fromISO(date);
  return dt.toLocaleString(format);
}
