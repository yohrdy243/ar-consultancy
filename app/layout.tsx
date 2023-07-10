import { Playfair_Display, Open_Sans } from "next/font/google";
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
            <body className={`${playfair.variable} ${open.variable}`}>
                <Navbar />
                <main className="mt-20">{children}</main>
                <WhatsApp />
                <Footer />
            </body>
        </html>
    );
}
