"use client";

import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

function SlidesControls({
    next,
    prev,
}: {
    next?: () => void;
    prev?: () => void;
}) {
    return (
        <>
            <button
                type="button"
                className="absolute hover:text-white ease-in-out transition-all top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prev}
            >
                <BsArrowLeftCircle size={30} />
            </button>
            <button
                type="button"
                className="absolute hover:text-white ease-in-out transition-all top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={next}
            >
                <BsArrowRightCircle size={30} />
            </button>
        </>
    );
}

function Slide({
    src,
    title,
    subtitle,
}: {
    src: string;
    title: string;
    subtitle: string;
}) {
    return (
        <div
            className="bg-center w-full bg-no-repeat bg-cover bg-gray-500 bg-blend-multiply transition-all duration-500"
            style={{
                backgroundImage: `url(${src})`,
                height: "100%",
                opacity: 1,
            }}
        >
            <div className="px-10 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    {title}
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}

function nextSlide(currentSlide: number, nSlides: number): number {
    const lastSlideIndex: number = nSlides - 1;
    if (lastSlideIndex === currentSlide) return 0;
    return currentSlide + 1;
}

function prevSlide(currentSlide: number, nSlides: number): number {
    const lastSlideIndex: number = nSlides - 1;
    if (currentSlide === 0) return lastSlideIndex;
    return currentSlide - 1;
}

const slidesData = [
    {
        src: "https://c0.wallpaperflare.com/preview/533/923/694/accounting-business-close-up-computation.jpg",
        title: "Impuestos, Declaraciones?",
        subtitle:
            "Toda la asesoria que nesecitas para que no tengas problemas y vivas tranquilo.",
    },
    {
        src: "https://c0.wallpaperflare.com/preview/886/686/347/achievement-analysis-brainstorming-business.jpg",
        title: "Problemas con SUNAT?",
        subtitle:
            "Te Asesoramos y buscamos la solucion mas rapida y efectiva para tus problemas.",
    },
];

export default function Header() {
    const [activeSlide, setActiveSlide] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((currentSlide) =>
                nextSlide(currentSlide, slidesData.length)
            );
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section className="relative w-full transition-all duration-200">

            <Slide {...slidesData[activeSlide]} />

            <SlidesControls
                next={() => {
                    setActiveSlide((currentIndex) =>
                        nextSlide(currentIndex, slidesData.length)
                    );
                }}
                prev={() => {
                    setActiveSlide((currentIndex) =>
                        prevSlide(currentIndex, slidesData.length)
                    );
                }}
            />
        </section>
    );
}
