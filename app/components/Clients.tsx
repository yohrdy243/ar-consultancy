import { FaReact } from "react-icons/fa";

const clients = new Array(10);
export default function Clients() {
    return (
        <div className="lg:px-32 py-12 bg-green-950 text-white">
            <h1 className=" text-4xl font-bold text-center">
                Nuestros Clientes
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 px-10 py-12 gap-6 text-gray-500">
                <div className="p-4 flex flex-col gap-2 justify-center items-center hover:text-white transition-colors duration-150">
                    <FaReact size={100} />
                    <p className="uppercase">Empresa 1</p>
                </div>
                <div className="p-4 flex flex-col gap-2 justify-center items-center hover:text-white transition-colors duration-150">
                    <FaReact size={100} />
                    <p className="uppercase">Empresa 1</p>
                </div>
                <div className="p-4 flex flex-col gap-2 justify-center items-center hover:text-white transition-colors duration-150">
                    <FaReact size={100} />
                    <p className="uppercase">Empresa 1</p>
                </div>
                <div className="p-4 flex flex-col gap-2 justify-center items-center hover:text-white transition-colors duration-150">
                    <FaReact size={100} />
                    <p className="uppercase">Empresa 1</p>
                </div>
            </div>
        </div>
    );
}
