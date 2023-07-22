import { ControlPanel } from "../components/ControlPanel";
import { TEvent } from "../components/EventCard";
import { getEvents } from "../services/eventsServices";

export default async function Page() {
    const eventsData : TEvent[] = await getEvents();
    return <ControlPanel eventsData={eventsData} />;
}
