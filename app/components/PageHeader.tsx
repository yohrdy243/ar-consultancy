export default function PageHeader({ title }: { title: string }) {
    return (
        <section className="bg-stone-800">
            <div className="py-10 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
                <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    {title}
                </h1>
            </div>
        </section>
    );
}
