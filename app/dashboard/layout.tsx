"use client";
import { ReactNode, useState } from "react";
import Login from "../components/Login";

export default function Layout({ children }: { children: ReactNode }) {
    const [hasLoged, setHasLoged] = useState<boolean>(false);
    function setLoged() {
        setHasLoged(true);
    }
    if (hasLoged) return <div>{children};</div>;
    return (
        <div className="lg:px-32 px-8 lg:py-32 my-20 h-screen flex justify-center text-[#112D45]">
            <div className="w-[80%] lg:w-[30%] px-8 flex flex-col gap-12">
                <h1 className="text-3xl font-bold text-center">Ingresar</h1>
                <Login setLoged={setLoged} />
            </div>
        </div>
    );
}
