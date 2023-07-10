import PageHeader from "../components/PageHeader";
import { ListServices } from "../components/Services";

export default function page() {
    return (
        <>  
            <PageHeader title="Nuestros Servicios"/>
            <section className="lg:px-32 px-8 py-20">
                <ListServices />
            </section>
        </>
    );
}
