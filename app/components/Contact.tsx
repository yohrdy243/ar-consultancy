"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    "service_7fu5knt",
                    "template_beky257",
                    form.current,
                    "wMeRDDfOx2ntELaa9"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
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
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Nombres
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Apellidos
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
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
                                    <option value="Asesoria Contable">
                                        Asesoria Contable
                                    </option>
                                    <option value="Asesoria Financiera">
                                        Asesoria Financiera
                                    </option>
                                    <option value="Asesoria Laboral">
                                        Asesoria Laboral{" "}
                                    </option>
                                    <option value="Impuestos">Impuestos</option>
                                    <option value="Periodos de Devenge">
                                        Periodos de Devenge
                                    </option>
                                    <option value="Asientos Contables">
                                        Asientos Contables
                                    </option>
                                    <option value="Rectificaciones">
                                        Rectificaciones
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
