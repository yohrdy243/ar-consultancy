import PageHeader from "../components/PageHeader";
import { getEvents } from "../services/eventsServices";
import EventCard from "../components/EventCard";

export default async function Eventos() {
    const eventsData = await getEvents();
    return (
        <section>
            <PageHeader title="Proximos Eventos" />
            <div className="py-10 mt-20 lg:px-32 px-8 grid grid-cols-3 gap-x-8 gap-y-4">
                {eventsData.map((data, index) => (
                    <EventCard {...data} key={`EVENT_CARD_${index}`} />
                ))}
            </div>
        </section>
    );
}
