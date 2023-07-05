import { ReactNode } from "react";
import { IoIosArrowForward } from "react-icons/io";

export function Card({ children }: { children: ReactNode }) {
    return (
        
        <div className="hover:text-green-700 transition-colors duration-100 ease-in-out border rounded-md p-8 flex flex-col gap-4 shadow-sm hover:shadow-md cursor-pointer">
            {children}
        </div>
    );
}

function ServiceCard({
    title,
    subtitle,
    link,
}: {
    title: string;
    subtitle: string;
    link?: string;
}) {
    return (
        <Card>
            <h1 className=" text-xl font-bold inline-flex items-center gap-2">
                {title}
                <IoIosArrowForward />
            </h1>
            <p className="line-clamp-3">{subtitle}</p>
        </Card>
    );
}

const servicesData = [
    {
        title: "Apoyo en Procedimientos de Fiscalización o Verificación",
        subtitle:
            "Este servicio desarrolla una estrategia fiscal con la finalidad de que nuestros clientes puedan afrontar un proceso de verificación o auditoría de la SUNAT con los mayores beneficios, salvaguardando sus derechos establecidos en las normas legales. Incluye el análisis y evaluación previa de la documentación contable y tributaria de nuestros clientes. Asimismo, nuestro equipo de profesionales acompaña permanentemente todo el proceso de fiscalización, evaluación y dando respuesta a los requerimientos del auditor fiscal",
        link: "",
    },
    {
        title: "Auditoría Tributaria Preventiva",
        subtitle:
            "Este servicio tiene como finalidad verificar la correcta determinación de los impuestos a los que se encuentran afectas las empresas de forma preventiva partiendo del análisis de las operaciones económicas registradas en la contabilidad, aplicando lo establecido en las normas tributarias vigentes en cada período tributario, de manera que no existan contingencias o reparos frente a un posible proceso de fiscalización de la SUNAT.",
        link: "",
    },
    {
        title: "Asesoría Tributaria Mensual",
        subtitle:
            "Brindamos servicios de asesoría tributaria de forma ilimitada por vía telefónica, correo electrónico o reuniones presenciales para poder resolver cualquier duda que puedan tener las empresas sobre las operaciones que se llevan a cabo.",
        link: "",
    },
    {
        title: "Recuperación de Drawback y Saldo a favor del Exportador",
        subtitle:
            "Brindamos servicios de asesoría tributaria de forma ilimitada por vía telefónica, correo electrónico o reuniones presenciales para poder resolver cualquier duda que puedan tener las empresas sobre las operaciones que se llevan a cabo.",
        link: "",
    },
    {
        title: "Asesoría en Importaciones",
        subtitle:
            "Brindamos servicios de asesoría tributaria de forma ilimitada por vía telefónica, correo electrónico o reuniones presenciales para poder resolver cualquier duda que puedan tener las empresas sobre las operaciones que se llevan a cabo.",
        link: "",
    },
];

export default function Services() {
    return (
        <section className="lg:px-32 px-8">
            <div className="flex justify-center items-center pb-10">
                <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {servicesData.map((serviceData, index) => (
                    <ServiceCard
                        {...serviceData}
                        key={`SERVICE_CARD_KEY_${index}`}
                    />
                ))}
            </div>
        </section>
    );
}
