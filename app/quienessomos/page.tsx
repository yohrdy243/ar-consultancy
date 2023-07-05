import { Logo } from "../components/Logo";

export default function page() {
    return (
        <div className="py-32">
            <div className="flex flex-col justify-center gap-10 lg:px-32 px-8">
                <h1 className="flex justify-start text-3xl font-bold">
                    Quienes Somos
                </h1>

                <div className="grid lg:grid-cols-3 grid-cols-1 mb-10">
                    <div className="col-span-1 lg:col-span-2 flex flex-col gap-4 font-normal antialiased text-justify mr-4">
                        <p className="indent-12">
                            AR Consultoría es una empresa de asesoría contable
                            compuesta por un equipo altamente calificado y
                            comprometido. Nuestro enfoque se basa en brindar
                            servicios de calidad y soluciones personalizadas que
                            ayuden a nuestros clientes a alcanzar sus metas
                            financieras y cumplir con sus responsabilidades
                            contables y fiscales. Valoramos la transparencia, la
                            integridad y la confianza en todas nuestras
                            interacciones, estableciendo relaciones sólidas y a
                            largo plazo con nuestros clientes.
                        </p>
                        <p className="indent-12">
                            Bajo la liderazgo de Miguel Albújar Rafaile como
                            Socio Director y Partner Managing, y con la
                            contribución de Oscar Albújar Rafaile como Socio y
                            Partner, nos esforzamos por mantenernos actualizados
                            en las últimas regulaciones y mejores prácticas
                            contables. Nuestro objetivo es proporcionar un
                            servicio excepcional, asesorando a nuestros clientes
                            en la toma de decisiones financieras clave y
                            apoyándolos en su crecimiento y rentabilidad. Como
                            su socio confiable, en AR Consultoría estamos
                            comprometidos con el éxito y la tranquilidad
                            financiera de nuestros clientes.
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <Logo size={200} />
                    </div>
                </div>
            </div>

            <h1 className="flex justify-center text-4xl font-bold text-green-950">
                &
            </h1>

            <div className="flex flex-col justify-center gap-6 lg:px-32 px-8 mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-20 font-normal antialiased text-justify">
                    <div className="col-span-1 flex flex-col gap-8">
                        <h1 className="text-3xl font-bold not-italic">
                            Nuestra Misión
                        </h1>
                        <p className="indent-12">
                            En AR Consultoría, nuestra misión es brindar
                            servicios de asesoría contable de calidad y
                            excelencia a nuestros clientes. Nos comprometemos a
                            ofrecer soluciones integrales y personalizadas que
                            ayuden a las empresas a alcanzar sus objetivos
                            financieros y a cumplir con sus responsabilidades
                            legales y fiscales. A través de nuestro conocimiento
                            experto y nuestra dedicación, nos esforzamos por ser
                            un socio de confianza y contribuir al crecimiento y
                            éxito continuo de nuestros clientes.
                        </p>
                    </div>
                    <div className="col-span-1 flex flex-col gap-8">
                        <h1 className="text-3xl font-bold not-italic flex justify-end">
                            Nuestra Visión
                        </h1>
                        <p className="indent-12">
                            Nuestra visión en AR Consultoría es convertirnos en
                            la empresa líder en asesoría contable, reconocida
                            por nuestra excelencia, innovación y compromiso con
                            la satisfacción del cliente. Aspiramos a ser un
                            referente en nuestro sector, ofreciendo servicios de
                            vanguardia respaldados por un equipo altamente
                            calificado y orientado al cliente. Buscamos
                            establecer relaciones a largo plazo con nuestros
                            clientes, basadas en la confianza mutua y el éxito
                            compartido. Nos esforzamos por mantenernos
                            actualizados con los cambios en las regulaciones y
                            las mejores prácticas contables, con el objetivo de
                            brindar un servicio excepcional que supere las
                            expectativas de nuestros clientes en todo momento
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
