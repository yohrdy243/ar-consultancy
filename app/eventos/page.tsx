"use client";
import { FiExternalLink } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import { AiOutlineClockCircle } from "react-icons/ai";
import { dateToString } from "../utils/convert";
import { useEffect, useState } from "react";
import { getEvents } from "../services/eventsServices";
import Image from "next/image";

export type TEvent = {
    title: string;
    startDate: Date;
    endDate: Date;
    description?: string;
    urlImage?: string;
    url?: string;
    id?: string;
};

function EventCard({
    title,
    description,
    startDate,
    endDate,
    url,
    urlImage,
}: TEvent) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg">
            <a href={url} target="_blank">
                <img
                    className="rounded-t-lg"
                    loading="lazy"
                    src={
                        urlImage
                            ? urlImage
                            : "https://www.uctoday.com/wp-content/uploads/2022/03/What-is-a-webinar.jpg"
                    }
                    alt=""
                />
            </a>
            <div className="p-5">
                <a href={url} target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-green-600">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <AiOutlineClockCircle />
                            {dateToString(startDate)}
                        </div>
                        <div className="flex items-center gap-2">
                            <AiOutlineClockCircle />
                            {dateToString(endDate)}
                        </div>
                    </div>
                    <a
                        href={url}
                        target="_blank"
                        className="inline-flex gap-2 w-auto items-center px-3 py-2 text-sm text-gray-700 hover:text-blue-600 font-medium text-center focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Ir
                        <FiExternalLink />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Eventos() {
    const [eventsData, setEventsData] = useState<TEvent[]>([]);

    useEffect(() => {
        getEvents().then((events) => setEventsData(events));
    }, []);

    return (
        <section>
            <PageHeader title="Proximos Eventos" />
            <div className="py-10 mt-20 lg:px-32 px-8 grid grid-cols-3 gap-x-8 gap-y-4">
                {eventsData.map((data) => (
                    <EventCard {...data} />
                ))}
            </div>
        </section>
    );
}
