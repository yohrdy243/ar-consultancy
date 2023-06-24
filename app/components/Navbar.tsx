import { CiMenuBurger } from "react-icons/ci";
export default function Navbar() {
    return (
        <>
            <nav className="fixed w-full h-20 top-0 z-10 lg:px-20 px-4 py-2 text-white bg-stone-800 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl">LOGO</h1>
                    <h2>Albujar Rafaile & Asociados</h2>
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex text-sm uppercase gap-4 cursor-pointer">
                        <li>inicio</li>
                        <li>quienes somos</li>
                        <li>clientes</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div className="lg:hidden ml-8">
                    <CiMenuBurger size={25} />
                </div>
            </nav>
            {/*
            <div className="mt-20">
                <ul className=" bg-stone-800 text-white uppercase gap-2 w-full flex flex-col justify-center items-center">
                    <li>Inicio</li>
                    <li>quienes somos</li>
                    <li>clientes</li>
                    <li>Contacto</li>
                </ul>
            </div>
                */}
        </>
    );
}
