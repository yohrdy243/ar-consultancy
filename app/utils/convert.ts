import { Timestamp } from "firebase/firestore";

export function dateToString(timestamp: Timestamp) {
    const date = new Date(
        timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
    );
    return date.toLocaleDateString("es-PE", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        hour: "2-digit",
        minute: "numeric",
        hour12: true,
    });
}

export function timestampToDate(timestamp: Timestamp) {
    return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
}
