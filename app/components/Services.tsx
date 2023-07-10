import { ReactNode } from "react";
import { LuExternalLink } from "react-icons/lu";
import { HiOutlineBriefcase } from "react-icons/hi";
import { TService, servicesData } from "../data/services";
import Link from "next/link";
export function Card({ children }: { children: ReactNode }) {
    return (
        <div className="hover:text-green-700 transition-colors duration-100 ease-in-out border rounded-md p-8 flex flex-col gap-4 shadow-sm hover:shadow-md cursor-pointer">
            {children}
        </div>
    );
}

function ServiceCard({ title, path, icon }: TService) {
    const IconComponent = icon || HiOutlineBriefcase;

    return (
        <Link href={`/servicios/${path}`}>
            <Card>
                <IconComponent size={50} />

                <h5 className="mb-2 text-2xl font-semibold tracking-tight h-20 overflow-hidden">
                    <div className="line-clamp-2">{title}</div>
                </h5>

                <div className="inline-flex gap-2 items-center hover:text-blue-600">
                    Ver Más
                    <LuExternalLink />
                </div>
            </Card>
        </Link>
    );
}
export function ListServices() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {servicesData.map((serviceData, index) => (
                <ServiceCard
                    {...serviceData}
                    key={`SERVICE_CARD_KEY_${index}`}
                />
            ))}
        </div>
    );
}
export default function Services() {
    return (
        <section className="lg:px-32 px-8">
            <div className="flex justify-center items-center pb-10">
                <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
            </div>
            <ListServices />
        </section>
    );
}
