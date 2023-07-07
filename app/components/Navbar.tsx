"use client";
import { CiMenuBurger } from "react-icons/ci";
import { Logo } from "./Logo";
import { useState } from "react";
import Link from "next/link";

const items = ["inicio", "servicios", "nuestro equipo", "quienes somos"];

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
            <nav className="fixed w-full h-20 top-0 z-30  text-white bg-stone-800">
                <div className="flex justify-between items-center lg:px-20 px-4 py-2">
                    <div className="flex items-center justify-start">
                        <Link href={"/"}>
                            <Logo size={60} />
                        </Link>
                        <h1>AR Consultoría</h1>
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
                        <ul className="bg-stone-800 uppercase gap-2 w-full flex flex-col justify-center items-center cursor-pointer py-6">
                            <NavItems handleClose={handleMenu} />
                        </ul>
                    </div>
                ) : null}
            </nav>
        </>
    );
}
