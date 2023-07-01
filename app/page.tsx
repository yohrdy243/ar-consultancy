import Header from "./components/Header";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Services from "./components/Services";

export default function Home() {
    return (
        <section className="flex flex-col gap-12 pb-10">
            <Header />
            <Services />
            <Clients />
            <Contact />
        </section>
    );
}
