import { Formik, Form, Field } from "formik";
import {
    collection,
    addDoc,
    Timestamp,
    updateDoc,
    doc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { database, storage } from "../../database";
import { TEvent } from "../eventos/page";
import Swal from "sweetalert2";
import { useState } from "react";

async function uploadImage(
    file: File | null,
    name: string
): Promise<string | undefined> {
    if (file === null) return undefined;
    try {
        const storageRef = ref(storage, "eventsImages/" + name);
        await uploadBytes(storageRef, file);
        return await getDownloadURL(storageRef);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

async function updateEvent(prevEvent: any, event: any, file: File | null) {
    Swal.fire({
        title: `¿Deseas Agregar el evento ${event.title}?`,
        text: "Se guardará en la base de datos",
        showDenyButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `Cancelar`,
        icon: "question",
        preConfirm: async () => {
            Swal.showLoading();

            try {
                let datosUpdate = event;

                Object.keys(datosUpdate).forEach((key) => {
                    if (key !== "urlImage") {
                        if (datosUpdate[key] === prevEvent[key]) {
                            delete datosUpdate[key];
                        }
                    }
                });

                if (file) {
                    const urlImage = await uploadImage(file, prevEvent.title);
                    const newEvent = {
                        ...datosUpdate,
                        urlImage: urlImage,
                    };
                    await updateDoc(
                        doc(database, "events", prevEvent.id),
                        newEvent
                    );
                } else {
                    await updateDoc(
                        doc(database, "events", prevEvent.id),
                        datosUpdate
                    );
                }

                Swal.fire({
                    title: "Guardado",
                    icon: "success",
                    text: `Se actualizó el evento ${
                        datosUpdate.title ?? prevEvent.title
                    }`,
                });
            } catch (e) {
                console.log(e);
                Swal.fire({
                    title: "No se pudo actualizar el evento",
                    icon: "error",
                });
            }
        },
    });
}

async function addEvent(event: any, file: File | null) {
    Swal.fire({
        title: `¿Deseas Agregar el evento ${event.title}?`,
        text: "Se guardará en la base de datos",
        showDenyButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `Cancelar`,
        icon: "question",
        preConfirm: async () => {
            Swal.showLoading();
            try {
                const urlImage = await uploadImage(file, event.title);
                const newEvent = {
                    ...event,
                    urlImage: urlImage,
                };

                await addDoc(collection(database, "events"), newEvent);

                Swal.fire({
                    title: "Guardado",
                    icon: "success",
                    text: `Se guardo el evento ${event.title}`,
                });
            } catch (e) {
                console.log(e);
                Swal.fire({
                    title: "No se pudo guardar el evento",
                    icon: "error",
                });
            }
        },
    });
}

function convertToLocalISOString(timestamp: Timestamp) {
    const date = timestamp.toDate()
    const offset = date.getTimezoneOffset();
    const localDate = new Date(date.getTime() - offset * 60000);
    return localDate.toISOString().slice(0, 16);
}

export default function FormEvent({ event }: { event?: TEvent }) {
    const [image, setImage] = useState<File | null>(null);

    const initialValues = event
        ? {
              ...event,
              startDate: event.startDate
                  ? convertToLocalISOString(event.startDate)
                  : "",
              endDate: event.endDate
                  ? convertToLocalISOString(event.endDate)
                  : "",
          }
        : {};

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={({
                    title,
                    description,
                    startDate,
                    endDate,
                    url,
                }: any) => {
                    const newEvent = {
                        title,
                        description,
                        startDate: Timestamp.fromDate(new Date(startDate)),
                        endDate: Timestamp.fromDate(new Date(endDate)),
                        url,
                    };
                    if (!event) {
                        addEvent(newEvent, image);
                    } else {
                        updateEvent(event, newEvent, image);
                    }
                }}
            >
                <Form>
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Titulo del Evento
                            </label>
                            <Field
                                type="text"
                                name="title"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingresa el Titulo del evento"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Descripcion
                            </label>
                            <Field
                                name="description"
                                type="text"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Ingresa la descripcion del Evento"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Subir Imagen
                            </label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2"
                                placeholder="Sube el archivo de Imagen"
                                accept=".png, .jpg, .jpeg"
                                type="file"
                                onChange={({ target }) => {
                                    if (target.files?.length) {
                                        setImage(target.files[0]);
                                    }
                                }}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Fecha y Hora de Inicio
                            </label>
                            <Field
                                name="startDate"
                                type="datetime-local"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Elige la fecha y hora de inicio"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Fecha y Hora de Fin
                            </label>
                            <Field
                                name="endDate"
                                type="datetime-local"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Elige la fecha y hora de Fin"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                Link del evento
                            </label>
                            <Field
                                type="text"
                                name="url"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Ingresa el Link del evento"
                            />
                        </div>
                        <div className="border-t pt-3 flex gap-2 justify-end">
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2"
                            >
                                Guardar
                            </button>
                            {event ? (
                                <button
                                    type="button"
                                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2"
                                >
                                    Eliminar
                                </button>
                            ) : null}
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}
