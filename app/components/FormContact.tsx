"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLoading } from "../hooks/useLoading";
import Swal from "sweetalert2";
import { servicesData } from "../data/services";
import Modal from "./Modal";

function Spinner() {
    return (
        <div role="status">
            <svg
                fill="blue"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <style
                    dangerouslySetInnerHTML={{
                        __html: ".spinner_ZCsl{animation:spinner_qV4G 1.2s cubic-bezier(0.52,.6,.25,.99) infinite}.spinner_gaIW{animation-delay:.6s}@keyframes spinner_qV4G{0%{r:0;opacity:1}100%{r:11px;opacity:0}}",
                    }}
                />
                <circle className="spinner_ZCsl" cx={12} cy={12} r={0} />
                <circle
                    className="spinner_ZCsl spinner_gaIW"
                    cx={12}
                    cy={12}
                    r={0}
                />
            </svg>

            <span className="sr-only">Cargando...</span>
        </div>
    );
}

type TModalFromContact = {
    show: boolean;
    title: string;
    handleClose: () => void;
};

export function ModalFormContact({
    show,
    title,
    handleClose,
}: TModalFromContact) {
    return (
        <Modal show={show} handleClose={handleClose} title={title}>
            <FormContact />
        </Modal>
    );
}

export default function FormContact({
    size = "2cols",
}: {
    size?: "1col" | "2cols";
}) {
    const form = useRef<HTMLFormElement>(null);
    const { isLoading, startLoading, endLoading } = useLoading();

    const sendEmail = (e: any) => {
        startLoading();
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAIL_SERVICE_CODE ?? "",
                    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_CODE ?? "",
                    form.current,
                    process.env.NEXT_PUBLIC_EMAIL_KEY ?? ""
                )
                .then(
                    () => {
                        endLoading();
                        form.current?.reset();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Tu Solicitud fue enviada!",
                            text: "Pronto nos comunicaremos contigo",
                            showConfirmButton: false,
                            timer: 2200,
                        });
                    },
                    () => {
                        endLoading();
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
        <form ref={form} onSubmit={sendEmail}>
            <div
                className={`grid gap-6 mb-6 grid-cols-1 ${
                    size === "2cols" && "lg:grid-cols-2"
                }`}
            >
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
                        placeholder="Ingresa tus Nombres"
                        required
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
                        placeholder="Ingresa tus Apellidos"
                        required
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
                        placeholder="Ingresa el Nombre de tu Empresa"
                        required
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
                        placeholder="941333456"
                        maxLength={9}
                        minLength={9}
                        required
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
                        required
                    >
                        <option value="">Elegir Servicio</option>
                        {servicesData.map(({ title, path }) => (
                            <option
                                value={title}
                                key={`SERVICE_OPTION_${path}`}
                            >
                                {title}
                            </option>
                        ))}
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
                        placeholder="Ingresa tu email"
                        required
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 text-blue-700 border border-blue-300 focus:ring-4 focus:outline-none hover:bg-blue-400 hover:text-white focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-3 py-2.5 text-center"
                >
                    {isLoading ? (
                        <>
                            <Spinner />
                            Enviando Datos
                        </>
                    ) : (
                        "Contactar"
                    )}
                </button>
            </div>
        </form>
    );
}
