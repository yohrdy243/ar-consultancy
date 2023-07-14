import { FiExternalLink } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import { AiOutlineClockCircle } from "react-icons/ai";
import { dateToString } from "../utils/convert";

type TEventCardProps = {
    title: string;
    startDate: Date;
    endDate: Date;
    description?: string;
    url?: string;
};

function EventCard({
    title,
    description,
    startDate,
    endDate,
}: TEventCardProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg">
            <a href="#" target="_blank">
                <img
                    className="rounded-t-lg"
                    src="https://www.uctoday.com/wp-content/uploads/2022/03/What-is-a-webinar.jpg"
                    alt=""
                />
            </a>
            <div className="p-5">
                <a href="#" target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:text-green-600">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <AiOutlineClockCircle />
                            {dateToString(startDate)}
                        </div>
                        <div className="flex items-center gap-2">
                            <AiOutlineClockCircle />
                            {dateToString(endDate)}
                        </div>
                    </div>
                    <a
                        href="#"
                        target="_blank"
                        className="inline-flex gap-2 w-auto items-center px-3 py-2 text-sm text-gray-700 hover:text-blue-600 font-medium text-center focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                        Ir
                        <FiExternalLink/>
                    </a>
                </div>
            </div>
        </div>
    );
}

const eventsData: TEventCardProps[] = [
    {
        title: "Fundamentos de contabilidad",
        startDate: new Date(),
        endDate: new Date(),
        description:
            "Repaso de los principios contables fundamentales y su aplicación en el entorno empresarial actual.",
        url: "#",
    },
    {
        title: "Contabilidad estratégica",
        startDate: new Date(),
        endDate: new Date(),
        description:
            "Cómo aprovechar la contabilidad como una herramienta estratégica para la toma de decisiones informadas y el crecimiento empresarial.",

        url: "#",
    },
    {
        title: "Automatización contable",
        startDate: new Date(),
        endDate: new Date(),
        description:
            "Descubre cómo la tecnología puede simplificar y acelerar los procesos contables, minimizando errores y optimizando la eficiencia.",

        url: "#",
    },
    {
        title: "Análisis financiero",
        startDate: new Date(),
        endDate: new Date(),
        description:
            "Aprende a interpretar y utilizar los informes financieros para evaluar el rendimiento de tu empresa y tomar medidas correctivas.",

        url: "#",
    },

    {
        title: "Cumplimiento normativo y fiscal",
        startDate: new Date(),
        endDate: new Date(),
        description:
            "Conoce las últimas regulaciones contables y fiscales, y cómo asegurar el cumplimiento adecuado para evitar sanciones y riesgos legales.",

        url: "#",
    },
    {
        title: "Mejores prácticas contables",
        startDate: new Date(),
        endDate: new Date(),
        description:
            "Explora estrategias y técnicas comprobadas para mejorar la calidad de tus registros contables, asegurar la integridad de los datos y fomentar la transparencia financiera.",

        url: "#",
    },
];

export default function Eventos() {
    return (
        <section>
            <PageHeader title="Proximos Eventos" />
            <div className="py-10 mt-20 lg:px-32 px-8 grid grid-cols-3 gap-x-8 gap-y-4">
                {eventsData.map((data) => (
                    <EventCard {...data} />
                ))}
            </div>
        </section>
    );
}
