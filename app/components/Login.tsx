"use client"
import React from "react";
import Swal from "sweetalert2";

export default function Login({ setLoged }: { setLoged: () => void }) {

    return (
        <div>
            <form
                onSubmit={(e: any) => {
                    e.preventDefault();
                    const email = e.target[0].value;
                    const password = e.target[1].value;
                    if (
                        email === process.env.NEXT_PUBLIC_EMAIL &&
                        password === process.env.NEXT_PUBLIC_PASSWORD
                    ) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Bienvenido",
                            showConfirmButton: false,
                            timer: 1500,
                        }).then(() => setLoged());
                    } else {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "El email o contraseña son incorrectos",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                }}
            >
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                    Iniciar Sesion
                </button>
            </form>
        </div>
    );
}
