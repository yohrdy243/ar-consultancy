"use client";
import { CiMenuBurger } from "react-icons/ci";
import { FullLogo, Logo } from "./Logo";
import { useState } from "react";
import Link from "next/link";

const items = ["inicio", "servicios", "eventos","nuestro equipo", "quienes somos"];

function NavItems({ handleClose }: { handleClose?: () => void }) {
    return items.map((name) => (
        <li
            key={`NAV_ITEM_${name}`}
            className="hover:scale-110 transition ease-in-out duration-100"
            onClick={handleClose}
        >
            <Link href={`/${name === "inicio" ? "" : name.replace(/\s/g, "")}`}>
                {name}
            </Link>
        </li>
    ));
}

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    function handleMenu() {
        setMenu((currentState) => !currentState);
    }
    return (
        <>
            <nav className="fixed w-full h-20 top-0 z-30 text-[#112c45] bg-white">
                <div className="flex justify-between items-center lg:px-20 px-4 w-full h-full">
                    <div className="flex items-center justify-start">
                        <Link href={"/"}>
                            <FullLogo size={200} />
                        </Link>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="flex text-sm uppercase gap-8 cursor-pointer ">
                            <NavItems />
                        </ul>
                    </div>
                    <div className="lg:hidden mr-8">
                        <CiMenuBurger onClick={handleMenu} size={25} />
                    </div>
                </div>

                {menu ? (
                    <div className="lg:hidden">
                        <ul className="bg-white uppercase gap-2 w-full flex flex-col justify-center items-center cursor-pointer py-6">
                            <NavItems handleClose={handleMenu} />
                        </ul>
                    </div>
                ) : null}
            </nav>
        </>
    );
}
