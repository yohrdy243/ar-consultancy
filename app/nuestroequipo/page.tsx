"use client";
import Image from "next/image";
import miguelPhoto from "../../public/images/1607652223448.jpeg";
import oscarPhoto from "../../public/images/1620270650375.jpeg";
import { BsCalendarCheckFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";
import { HiOutlineMail } from "react-icons/hi";
import { useModal } from "../hooks/useModal";
import { ModalFormContact } from "../components/FormContact";
import Modal, { TModalProps } from "../components/Modal";
import { FaBriefcase } from "react-icons/fa";
import { useState } from "react";

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

function Personal({
    imageSrc,
    name,
    experiences,
    certifications,
    modal: { handleClose, isOpen },
}: {
    imageSrc: string;
    name: string;
    experiences: TExperience[];
    certifications: TExperience[];
    modal: TModalProps;
}) {
    const [step, setStep] = useState(0);
    return (
        <Modal
            isOpen={isOpen}
            handleClose={handleClose}
            title="Perfil Profesional"
        >
            <div className="flex flex-row gap-4 w-full">
                <div className="flex flex-col p-4">
                    <Image
                        className="rounded-t-xl"
                        src={imageSrc}
                        alt={name}
                        width={400}
                        height={400}
                    />
                    <div className="flex flex-col gap-1 justify-center items-center pt-2">
                        <h1 className="text-2xl font-semibold">{name}</h1>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <div
                            className="flex gap-2 border rounded-md px-2 py-1 w-fit hover:text-[#ff6915]"
                            onClick={() => setStep(0)}
                        >
                            <span>Experiencia</span>
                        </div>
                        <div
                            className="flex gap-2 items-center border rounded-md px-2 py-1 w-fit hover:text-[#ff6915]"
                            onClick={() => setStep(1)}
                        >
                            <span>Certificaciones</span>
                        </div>
                    </div>
                </div>
                <div>
                    {step === 0 ? (
                        <>
                            <h1 className="text-xl py-2 font-bold">Experiencia</h1>
                            <TimeLine data={experiences} />
                        </>
                    ) : (
                        <>
                            <h1 className="text-xl py-2 font-bold">Certificaciones</h1>
                            <TimeLine data={certifications} />
                        </>
                    )}
                </div>
            </div>
        </Modal>
    );
}

function TimeLine({ data }: { data: TExperience[] }) {
    const chunkSize = 4;
    const chunks = [];

    for (let i = 0; i < data.length; i += chunkSize) {
        chunks.push(data.slice(i, i + chunkSize));
    }

    return (
        <div className="grid grid-cols-2 gap-4 w-full">
            {chunks.map((chunk, chunkIndex) => (
                <ol
                    key={`TIMELINE_CHUNK_${chunkIndex}`}
                    className="relative text-gray-500 border-l border-gray-200 cursor-pointer hover:text-green-700"
                >
                    {chunk.map(({ title, subTitle, description }, index) => (
                        <li
                            className="mb-10 ml-6"
                            key={`EXPERIENCE_${chunkIndex}_${index}`}
                        >
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white">
                                <BsCalendarCheckFill />
                            </span>
                            <h3 className="font-medium leading-tight">
                                {title}
                            </h3>
                            {subTitle ? (
                                <p className="text-sm">{subTitle}</p>
                            ) : null}
                            {description ? (
                                <p className="text-xs">{description}</p>
                            ) : null}
                        </li>
                    ))}
                </ol>
            ))}
        </div>
    );
}

function TeamCard({
    imageSrc,
    name,
    role,
    email,
    experience,
    certifications,
}: TTeamData) {
    const { show, handleShow, handleClose } = useModal();
    const {
        show: isOpen,
        handleShow: handleShowPerson,
        handleClose: handleClosePerson,
    } = useModal();

    return (
        <>
            <ModalFormContact
                title={`Contactar ${name}`}
                {...{ show, handleClose }}
            />
            <Personal
                modal={{ isOpen, handleClose: handleClosePerson }}
                imageSrc={imageSrc}
                name={name}
                certifications={certifications}
                experiences={experience}
            />
            <div className="transition-all ease-in-out duration-400 col-span-1 flex flex-col items-center border mx-4 rounded-xl shadow-md hover:shadow-[#112c45] hover:scale-105 cursor-pointer">
                <Image
                    className="rounded-t-xl"
                    src={imageSrc}
                    alt={name}
                    width={350}
                    height={350}
                />
                <div className="flex flex-col gap-1 justify-center items-center p-4 mx-2">
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <p>{role}</p>
                    <div className="text-sm text-[#112c45] items-center gap-3">
                        {email}
                    </div>
                    <div className="flex gap-2 mt-2">
                        <div
                            className="flex gap-2 border rounded-md px-2 py-1 w-fit hover:text-[#ff6915]"
                            onClick={handleShowPerson}
                        >
                            <span>Ver Perfil</span>
                            <FaBriefcase size={18} />
                        </div>
                        <div
                            className="flex gap-2 items-center border rounded-md px-2 py-1 w-fit hover:text-[#ff6915]"
                            onClick={handleShow}
                        >
                            <span>Conactar</span>
                            <HiOutlineMail size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function page() {
    return (
        <section>
            <PageHeader title="Nuestro Equipo" />
            <div className="my-20">
                <div className="lg:px-32 px-8">
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x gap-20 lg:gap-0">
                            {teamData.map((data) => (
                                <TeamCard
                                    {...data}
                                    key={`TEAM_MEMBER_${data.name}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
