export default function Contact() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 lg:px-32">
            <div className="flex justify-center items-center">
                <h1 className="text-4xl font-bold">Contactanos!</h1>
            </div>
            <div className="p-4">
                <div className=" rounded-md p-12">
                    <form>
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
                                    id="first_name"
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
                                    id="last_name"
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
                                    id="company"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    DNI / RUC
                                </label>
                                <input
                                    type="tel"
                                    id="number"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder=""
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="countries"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Servicio
                                </label>
                                <select
                                    id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                    <option>Elegir Servicio</option>
                                    <option value="US">
                                        Asesoria Contable
                                    </option>
                                    <option value="CA">
                                        Asesoria Financiera
                                    </option>
                                    <option value="FR">
                                        Asesoria Laboral{" "}
                                    </option>
                                    <option value="DE">Impuestos</option>
                                    <option>Periodos de Devenge</option>
                                    <option value="">Asientos Contables</option>
                                    <option value="">Rectificaciones</option>
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
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="text-blue-700 border border-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Enviar Solicitud
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
