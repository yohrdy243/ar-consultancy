import Image from "next/image";
import miguelPhoto from "../../public/images/1607652223448.jpeg";
import oscarPhoto from "../../public/images/1620270650375.jpeg";
function TeamCard({ imageSrc, name }: { imageSrc: string; name: string }) {
    return (
        <div
            className="border rounded-tl-[80px] rounded-br-[80px]  w-96 h-[60vh] lg:hover:scale-105 transition ease-in-out duration-300"
            style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex h-full items-end  font-semibold justify-start text-white p-4">
                <div className="flex flex-col">
                    <h2 className="text-3xl">{name}</h2>
                    <p>Socio Director / Partner Managing</p>
                </div>
            </div>
        </div>
    );
}

export default function page() {
    return (
        <div className="py-16 px-4 lg:px-48 flex flex-col lg:flex-row justify-center items-center w-full gap-10 lg:gap-36">
            <TeamCard imageSrc={miguelPhoto.src} name="Miguel Albujar" />
            <TeamCard imageSrc={oscarPhoto.src} name="Oscar Albujar" />
        </div>
    );
}
