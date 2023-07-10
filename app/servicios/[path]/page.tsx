import FormContact from "@/app/components/FormContact";
import PageHeader from "@/app/components/PageHeader";
import { servicesData } from "@/app/data/services";

type TPageParams = {
    params: { path: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
    return servicesData.map(({ path }) => ({ path }));
}

function getServiceData(pathQuery: string) {
    return servicesData.find(({ path }) => path === pathQuery);
}

export default function Page({ params: { path } }: TPageParams) {
    const { title, description } = getServiceData(path) ?? {
        title: "",
        description: <></>,
    };
    return (
        <section>
            <PageHeader title={title} />
            <div className="lg:px-32 px-8 py-20">
                <div className="antialiased text-justify grid grid-cols-1 lg:grid-cols-3 lg:divide-x gap-8">
                    <div className="col-span-2">{description}</div>
                    <div className="col-span-1 pl-16">
                        <h2 className="text-2xl font-bold text-center mb-8">
                            Contactanos
                        </h2>
                        <div className=" flex justify-center items-center">
                            <FormContact size="1col" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
