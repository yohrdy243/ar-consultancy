"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    "service_256rktc",
                    "template_l5anyg9",
                    form.current,
                    "3EL6IqG99bUhnCrrF"
                )
                .then(
                    (result) => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Tu Solicitud fue enviada!",
                            text: "Pronto nos comunicaremos contigo",
                            showConfirmButton: false,
                            timer: 2200,
                        });
                    },
                    (error) => {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "Hubo un error al Enviar la Solicitud!",
                            text: "Intentalo más tarde",
                            showConfirmButton: false,
                            timer: 2200,
                        });
                    }
                );
        }
    };

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 lg:px-32">
            <div className="flex justify-center items-center">
                <h1 className="text-4xl font-bold">Contactanos!</h1>
            </div>
            <div className="p-4 ">
                <div className=" rounded-md p-12">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Nombres
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Apellidos
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="company"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Telefono
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder=""
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="service"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Servicio
                                </label>
                                <select
                                    name="service"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                    <option>Elegir Servicio</option>
                                    <option value="Apoyo en Procedimientos de Fiscalización o Verificación">
                                        Apoyo en Procedimientos de Fiscalización
                                        o Verificación
                                    </option>
                                    <option value="Auditoría Tributaria Preventiva">
                                        Auditoría Tributaria Preventiva
                                    </option>
                                    <option value="Asesoría Tributaria Mensual">
                                        Asesoría Tributaria Mensual
                                    </option>
                                    <option value="Recuperación de Drawback y Saldo a favor del Exportador">
                                        Recuperación de Drawback y Saldo a favor
                                        del Exportador
                                    </option>
                                    <option value="Asesoría en Importaciones">
                                        Asesoría en Importaciones
                                    </option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="text-blue-700 border border-blue-500 focus:ring-4 focus:outline-none hover:bg-blue-400 hover:text-white focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                            >
                                Enviar Solicitud
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
