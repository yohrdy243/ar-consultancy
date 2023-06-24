import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Playfair_Display, Open_Sans } from "next/font/google";

const open = Open_Sans({ subsets: ["latin"], variable: "--font-open" });

export const metadata = {
    title: "Albujar Rafaile & Asociados",
    description: "AR & Asociados",
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
        <html lang="en">
            <body className={`${playfair.variable} ${open.variable}`}>
                <Navbar />
                <div className="mt-20">
                {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
