import Image from "next/image";
import miguelPhoto from "../../public/images/1607652223448.jpeg";
import oscarPhoto from "../../public/images/1620270650375.jpeg";
import { BsCalendarCheckFill } from "react-icons/bs";

type TExperience = {
    title: string;
    subTitle?: string;
    description?: string;
};

type TTeamData = {
    imageSrc: string;
    name: string;
    role: string;
    email: string;
    experience: TExperience[];
    certifications: TExperience[];
};

const teamData: TTeamData[] = [
    {
        imageSrc: miguelPhoto.src,
        name: "Miguel Albújar Rafaile",
        role: "Socio Director / Partner Managing",
        email: "malbujar@arconsultoria.pe",
        experience: [
            {
                title: "Auditor Tributario 2015 - 2019",
                subTitle:
                    "Superintendencia Nacional de Aduanas y de Administración Tributaria (SUNAT)",
            },
            {
                title: "Jefe de Contabilidad Tributaria 2019 - Presente",
                subTitle: "Grupo Rocio",
                description:
                    "Responsable de la determinación de impuestos y planificación fiscal de 9 empresas de los sectores agroexportación, avícola, ganadero así como exportación de servicios a empresas de Europa, América y Asia.",
            },
            {
                title: "Presidente de la Comisión de Agricultura 2021 - 2022",
                subTitle:
                    "Instituto Peruano de Investigación y Derecho Tributario (IPIDET)",
            },
            {
                title: "Vocal del Comité de Tributación 2022-2023",
                subTitle: "Colegio de Contadores de La Libertad (CCPLL)",
            },
            {
                title: "Docente Universitario 2023 - Actualidad",
                subTitle: "Universidad Privada del Norte (UPN)",
            },
            {
                title: "Mentor en Planificacion Tributaria 2023 - Actualidad",
                subTitle: "Universidad ESAN",
            },
        ],
        certifications: [
            {
                title: "Contador Público con una Especialización en Impuestos 2013",
                subTitle: "Universidad de Lima",
            },
            {
                title: "Certificado como Representante Aduanero ",
                subTitle:
                    "Superintendencia Nacional de Aduanas y de Administración Tributaria (SUNAT)",
            },
            {
                title: "Miembro  Adherente de la Asociación Interamericana de Contabilidad 2020 - Presente",
                subTitle: "IAC",
            },
            {
                title: "Facilitador en temas Tributarios",
                subTitle: "Cámara de Comercio de Trujillo",
            },
            {
                title: "Expositor Tributario",
                subTitle: "Cámara de Comercio del Santa",
            },
        ],
    },
    {
        imageSrc: oscarPhoto.src,
        name: "Oscar Albújar Rafaile",
        role: "Socio / Partner",
        email: "oalbujar@arconsultoria.pe",
        experience: [
            {
                title: "Asesor Legal",
                subTitle: "Gobierno Regional de Ancash",
                description: "Redes de Salud Pacífico Sur y Huaylas Norte",
            },
            {
                title: "Especialista Legal 2020 - 2021",
                subTitle: "Contraloría General de la República",
                description:
                    "Órgano de Control Interno de la Municipalidad de Huaraz",
            },
            {
                title: "Asesor Legal en temas Laborales, Civiles y Societarios 2022 - Presente",
                subTitle: "Repsol Lubricantes - Distribuidor Norte",
            },
        ],
        certifications: [
            {
                title: "Abogado General 2016",
                subTitle: "Universidad San Pedro",
                description:
                    "Facultad de Derecho y Ciencias Políticas  -  Colegio de Abogados de Lima",
            },
            {
                title: "Especialista en Derecho Laboral Empresarial",
                subTitle: "Universidad ESAN",
            },
        ],
    },
];

function TimeLine({ data }: { data: TExperience[] }) {
    return data.map(({ title, subTitle, description }) => (
        <ol className="relative text-gray-500 border-l border-gray-200 cursor-pointer hover:text-green-700">
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white ">
                    <BsCalendarCheckFill />
                </span>
                <h3 className="font-medium  leading-tight">{title}</h3>
                {subTitle ? <p className="text-sm">{subTitle} </p> : null}
                {description ? (
                    <p className="text-xs   ">{description}</p>
                ) : null}
            </li>
        </ol>
    ));
}

function TeamCard({
    imageSrc,
    name,
    role,
    email,
    experience,
    certifications,
}: TTeamData) {
    return (
        <div className="px-10 col-span-1 flex flex-col items-center">
            <div className="mb-20">
                <Image
                    className="rounded-xl"
                    src={imageSrc}
                    alt={name}
                    width={350}
                    height={350}
                />
                <div>
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <p>{role}</p>
                    <p className="text-sm text-gray-500">{email}</p>
                </div>
            </div>
            <div className="px-1 grid grid-cols-1 lg:grid-cols-2 gap-3 ">
                <div className="col-span-1 flex flex-col gap-y-6">
                    <h1 className="text-xl font-semibold">Experiencia</h1>
                    <div className="px-6 flex flex-col justify-start">
                        <TimeLine data={experience} />
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-y-6">
                    <h1 className="text-xl font-semibold">Certificaciones</h1>
                    <div className="px-6 flex flex-col justify-start">
                        <TimeLine data={certifications} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function page() {
    return (
        <section className="py-10">
            <div className="lg:px-32 px-8">
                <div className="pb-16 flex justify-center">
                    <h1 className="text-4xl font-bold">Nuestro Equipo</h1>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x gap-20 lg:gap-0">
                        {teamData.map((data) => (
                            <TeamCard {...data} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
