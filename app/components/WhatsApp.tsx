"use client";

import { BsWhatsapp } from "react-icons/bs";

const handleWhatsAppClick = () => {
    const phoneNumber = "+51943506975";
    const message = "Hola AR Consultoría";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
    )}`;

    window.open(url, "_blank");
};

export default function WhatsApp() {
    return (
        <button
            className="fixed bottom-4 right-4 z-10 p-4 rounded-full bg-[#25D366] text-white shadow-lg"
            onClick={handleWhatsAppClick}
        >
            <BsWhatsapp size={30}/>
        </button>
    );
}
