import { TEvent } from "../eventos/page";
import { collection, query, getDocs } from "firebase/firestore";
import { database } from "@/database";

export async function getEvents(): Promise<TEvent[]> {
    let events: TEvent[] = [];
    const q = query(collection(database, "events"));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((response) => {
        const eventData = response.data();
        events.push({
            title: eventData.title ?? "",
            description: eventData.description ?? "",
            startDate: eventData.startDate,
            endDate: eventData.endDate,
            url: eventData.url,
            urlImage: eventData.urlImage,
            id: response.id,
        });
    });
    return events;
}
