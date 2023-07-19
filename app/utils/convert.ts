import { Timestamp } from "firebase/firestore";

export function dateToString(timestamp: Timestamp) {
    const date = timestamp.toDate()
    return date.toLocaleDateString("es-PE", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        hour: "2-digit",
        minute: "numeric",
        hour12: true,
    });
}
