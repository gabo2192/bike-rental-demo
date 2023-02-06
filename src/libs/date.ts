export default function dateParser(date: Date): string {
  return date.toISOString().split("T")[0];
}
