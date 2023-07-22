"use client";
import { FiEdit } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AddEvent, EditEvent } from "../components/EventActions";
import PageHeader from "../components/PageHeader";
import { TEvent } from "../components/EventCard";
import { useModal } from "../hooks/useModal";
import { dateToString } from "../utils/convert";
import { useState } from "react";
import { Timestamp } from "firebase/firestore";

export function ControlPanel({ eventsData }: { eventsData: TEvent[] }) {
    const addEventModalProps = useModal();
    const editEventModalProps = useModal();

    const [currentEvent, setCurrentEvent] = useState<TEvent>({
        title: "",
        description: "",
        startDate: Timestamp.fromDate(new Date()),
        endDate: Timestamp.fromDate(new Date()),
    });

    return (
        <>
            <AddEvent modal={addEventModalProps} />
            <EditEvent modal={editEventModalProps} event={currentEvent} />
            <section>
                <PageHeader title="Dashboard" />
                <div className="lg:px-32 px-8 my-20 min-h-screen">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-between px-4">
                            <div>
                                <h2 className="text-3xl font-bold">
                                    Lista de Eventos
                                </h2>
                            </div>
                            <button
                                type="button"
                                onClick={() => addEventModalProps.handleShow()}
                                className="flex items-center gap-2  focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                            >
                                Añadir Evento
                                <IoMdAddCircleOutline size={20} />
                            </button>
                        </div>
                        <div>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-green-100">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Titulo
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Descripcion
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Fecha y hora de Inicio
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Fecha y hora de Fin
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Editar
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eventsData.map((event, index) => (
                                            <tr
                                                className="bg-white border-b"
                                                key={`ROW_TABLE_EVENTS_${index}`}
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                                >
                                                    {event.title}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {event.description}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {dateToString(
                                                        event.startDate
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {dateToString(
                                                        event.endDate
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setCurrentEvent(
                                                                event
                                                            );
                                                            editEventModalProps.handleShow();
                                                        }}
                                                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2.5 mr-2 mb-2"
                                                    >
                                                        <FiEdit />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
