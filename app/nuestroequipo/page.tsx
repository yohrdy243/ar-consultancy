import Image from "next/image";
import miguelPhoto from "../../public/images/1607652223448.jpeg";
import oscarPhoto from "../../public/images/1620270650375.jpeg";

const teamData = [
    {
        imageSrc: miguelPhoto.src,
        name: "Miguel Albújar Rafaile",
        role: "Socio Director / Partner Managing",
        email: "malbujar@arconsultoria.pe",
    },
    {
        imageSrc: oscarPhoto.src,
        name: "Oscar Albújar Rafaile",
        role: "Socio / Partner",
        email: "oalbujar@arconsultoria.pe",
    },
];

function TeamCard({
    imageSrc,
    name,
    role,
    email,
}: {
    imageSrc: string;
    name: string;
    role: string;
    email: string;
}) {
    return (
        <div className="flex flex-col gap-1">
            <Image
                className="rounded-xl"
                src={imageSrc}
                alt={name}
                width={350}
                height={350}
            />
            <div className="px-1">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <p>{role}</p>
                <p className="text-sm text-gray-500">{email}</p>
            </div>
        </div>
    );
}

export default function page() {
    return (
        <section className="py-10">
            <div className="lg:px-32 px-8 flex flex-col">
                <div className="pb-16 flex justify-center">
                    <h1 className="text-4xl font-bold">Nuestro Equipo</h1>
                </div>
                <div className="flex justify-center gap-20">
                    {teamData.map((data) => (
                        <TeamCard {...data} />
                    ))}
                </div>
                <div className="flex justify-around"></div>
            </div>
        </section>
    );
}
