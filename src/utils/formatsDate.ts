function formatDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short"
  });
}

function getDurationInMonths(startDate: string, endDate: string): string {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  return `${years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ""}${
    remMonths > 0 ? ` ${remMonths} month${remMonths > 1 ? "s" : ""}` : ""
  }`.trim();
}

export { formatDate, getDurationInMonths };
