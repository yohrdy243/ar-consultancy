import { Playfair_Display, Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsApp from "./components/WhatsApp";
import "./globals.css";

const open = Open_Sans({ subsets: ["latin"], variable: "--font-open" });

export const metadata = {
    title: "AR Consultoria",
    description: "Toda la Asesoria Empresarial que nesecitas!",
};

export const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
});

const TruenoRegular = localFont({
    src: "../public/fonts/TruenoRegular.otf",
    variable: "--font-trueno",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <head>
                <meta name="view-transition" content="same-origin" />
            </head>
            <body className={`${TruenoRegular.className}`}>
                <Navbar />
                <main className="mt-20">{children}</main>
                <WhatsApp />
                <Footer />
            </body>
        </html>
    );
}
