"use client";
import { FiExternalLink } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import { AiOutlineClockCircle } from "react-icons/ai";
import { dateToString } from "../utils/convert";
import { useEffect, useState, CSSProperties } from "react";
import { getEvents } from "../services/eventsServices";

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
    const [imageLoaded, setImageLoaded] = useState(false);

    const imageContainerStyle: CSSProperties = {
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%" /* 16:9 aspect ratio (9/16 * 100) */,
        overflow: "hidden",
        visibility: imageLoaded ? "visible" : "hidden",
    };

    const imageStyle: CSSProperties = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover",
    };

    const loadingIconStyle: CSSProperties = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    return (
        <div className=" border border-gray-200 rounded-lg shadow hover:shadow-lg">
            <a href={url} target="_blank">
                <div style={imageContainerStyle}>
                    <div style={loadingIconStyle}>
                        <svg
                            className={`animate-pulse w-10 h-10 text-black`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                        >
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                    <img
                        style={imageStyle}
                        loading="eager"
                        src={
                            urlImage
                                ? urlImage
                                : "https://www.uctoday.com/wp-content/uploads/2022/03/What-is-a-webinar.jpg"
                        }
                        alt=""
                        onLoad={() => setImageLoaded(true)}
                    />
                </div>
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
                            {/* dateToString(startDate) and dateToString(endDate) functions need to be implemented */}
                            {startDate.toISOString()}
                        </div>
                        <div className="flex items-center gap-2">
                            <AiOutlineClockCircle />
                            {endDate.toISOString()}
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

const LoadingCard = () => (
    <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg animate-pulse">
        <div
            className="flex items-center justify-center bg-gray-300 rounded"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                overflow: "hidden",
            }}
        >
            <div
                className="flex justify-center items-center"
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            >
                <svg
                    className="w-10 h-10 text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            </div>
        </div>

        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-green-600">
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4" />
            </h5>

            <p className="mb-3 font-normal text-gray-700">
                <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5" />
                <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5" />
                <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5" />
            </p>
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <div className="flex items-center place-items-center  gap-2">
                        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4" />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4" />
                    </div>
                </div>

                <FiExternalLink />
            </div>
        </div>
    </div>
);
export default function Eventos() {
    const [eventsData, setEventsData] = useState<TEvent[]>([]);

    useEffect(() => {
        getEvents().then((events) => setEventsData(events));
    }, []);

    return (
        <section>
            <PageHeader title="Proximos Eventos" />
            <div className="py-10 mt-20 lg:px-32 px-8 grid grid-cols-3 gap-x-8 gap-y-4">
                {eventsData.length !== 0 ? (
                    eventsData.map((data) => <EventCard {...data} />)
                ) : (
                    <>
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                        <LoadingCard />
                    </>
                )}
            </div>
        </section>
    );
}
