"use client";

import FormContact from "./FormContact";

export default function Contact() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 lg:px-32">
            <div className="flex justify-center items-center">
                <h1 className="text-4xl font-bold">Contactanos!</h1>
            </div>
            <div className="p-4 ">
                <div className="p-12">
                    <FormContact />
                </div>
            </div>
        </section>
    );
}
