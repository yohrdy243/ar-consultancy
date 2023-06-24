import { ReactNode } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Clients from "./components/Clients";

export default function Home() {
    return (
        <main className="flex flex-col gap-12 pb-10">
            <Header />
            <Cards />
            <Clients/>
        </main>
    );
}
