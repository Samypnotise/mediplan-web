import { DateTime } from "luxon";

export default function Date({ dateString }: { dateString: string }) {
  const date = DateTime.fromISO(dateString).toLocaleString(
    DateTime.DATETIME_FULL
  );
  return <time dateTime={date}>{date}</time>;
}
