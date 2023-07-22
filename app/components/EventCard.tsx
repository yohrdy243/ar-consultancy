import { Timestamp } from "firebase/firestore";
import { CSSProperties } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export type TEvent = {
    title: string;
    startDate: Timestamp;
    endDate: Timestamp;
    description?: string;
    urlImage?: string;
    url?: string;
    id?: string;
};

export default function EventCard({
    title,
    description,
    startDate,
    endDate,
    url,
    urlImage,
}: TEvent) {
    
    const imageContainerStyle: CSSProperties = {
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%" /* 16:9 aspect ratio (9/16 * 100) */,
        overflow: "hidden",
    };

    const imageStyle: CSSProperties = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover",
    };


    return (
        <div className=" border border-gray-200 rounded-lg shadow hover:shadow-lg">
            <a href={url} target="_blank">
                <div style={imageContainerStyle}>
                    <img
                        style={imageStyle}
                        loading="eager"
                        src={
                            urlImage
                                ? urlImage
                                : "https://www.uctoday.com/wp-content/uploads/2022/03/What-is-a-webinar.jpg"
                        }
                        alt=""
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
                            {startDate.toDate().toLocaleDateString("es-PE", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                            })}
                        </div>
                        <div className="flex items-center gap-2">
                            <AiOutlineClockCircle />
                            {endDate.toDate().toLocaleDateString("es-PE", {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true,
                            })}
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
