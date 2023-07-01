import { ReactNode } from "react";
import { IoIosArrowForward } from "react-icons/io";

export function Card({ children }: { children: ReactNode }) {
    return (
        <div className="hover:text-green-700 border rounded-md p-8 flex flex-col gap-4 shadow-sm hover:shadow-md cursor-pointer">
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
        title: "Asesoria Contable",
        subtitle:
            "En nuestro equipo de consultoría contamos con expertos en normas contables, regulaciones fiscales y prácticas financieras. Trabajamos de cerca con nuestros clientes para comprender sus necesidades y metas específicas, y así poder ofrecer soluciones personalizadas y estratégicas.",
        link: "",
    },
    {
        title: "Asesoria Financiera",
        subtitle:
            "En nuestro equipo de consultoría contamos con expertos en normas contables, regulaciones fiscales y prácticas financieras. Trabajamos de cerca con nuestros clientes para comprender sus necesidades y metas específicas, y así poder ofrecer soluciones personalizadas y estratégicas.",
        link: "",
    },
    {
        title: "Asesoria Laboral",
        subtitle:
            "En nuestro equipo de consultoría contamos con expertos en normas contables, regulaciones fiscales y prácticas financieras. Trabajamos de cerca con nuestros clientes para comprender sus necesidades y metas específicas, y así poder ofrecer soluciones personalizadas y estratégicas.",
        link: "",
    },
    {
        title: "Impuestos",
        subtitle:
            "En nuestro equipo de consultoría contamos con expertos en normas contables, regulaciones fiscales y prácticas financieras. Trabajamos de cerca con nuestros clientes para comprender sus necesidades y metas específicas, y así poder ofrecer soluciones personalizadas y estratégicas.",
        link: "",
    },
    {
        title: "Periodos de Devenge",
        subtitle:
            "En nuestro equipo de consultoría contamos con expertos en normas contables, regulaciones fiscales y prácticas financieras. Trabajamos de cerca con nuestros clientes para comprender sus necesidades y metas específicas, y así poder ofrecer soluciones personalizadas y estratégicas.",
        link: "",
    },
    {
        title: "Asientos Contables",
        subtitle:
            "En nuestro equipo de consultoría contamos con expertos en normas contables, regulaciones fiscales y prácticas financieras. Trabajamos de cerca con nuestros clientes para comprender sus necesidades y metas específicas, y así poder ofrecer soluciones personalizadas y estratégicas.",
        link: "",
    },
    {
        title: "Rectificaciones",
        subtitle:
            "En nuestro equipo de consultoría contamos con expertos en normas contables, regulaciones fiscales y prácticas financieras. Trabajamos de cerca con nuestros clientes para comprender sus necesidades y metas específicas, y así poder ofrecer soluciones personalizadas y estratégicas.",
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
