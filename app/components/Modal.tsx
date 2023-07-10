import { ReactNode } from "react";
export default function Modal({
    children,
    show,
    handleClose,
}: {
    children: ReactNode;
    show: boolean;
    handleClose: () => void;
}) {
    if (!show) return null;
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-xl flex justify-center items-center">
            <div
                className="p-6 bg-white rounded-md scroll-auto"
                onClick={handleClose}
            >
                {children}
            </div>
        </div>
    );
}
