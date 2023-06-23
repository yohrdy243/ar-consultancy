import { ReactNode } from "react";
import { IoIosArrowForward } from "react-icons/io"

export function Card({ children }: { children: ReactNode }) {
    return (
        <div className="border rounded-md p-8 flex flex-col gap-4 shadow-sm hover:shadow-md ">
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
            <h1 className="hover:text-green-700 text-xl font-bold inline-flex items-center gap-2">{title}<IoIosArrowForward/></h1>
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

export default function Cards() {
    return (
        <div className="px-32">
            <div className="flex justify-center items-center py-10">
                <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {servicesData.map((serviceData) => (
                    <ServiceCard {...serviceData} />
                ))}
            </div>
        </div>
    );
}