export function dateToString(date: Date) {
    return date.toLocaleDateString("es-PE", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        hour: "2-digit",
        minute: "numeric",
        hour12: true,
    });
}
