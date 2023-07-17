import { ReactNode, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({
    children,
    show,
    handleClose,
    title,
}: {
    children: ReactNode;
    show: boolean;
    handleClose: () => void;
    title: string;
}) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleClose();
            }
        };

        if (show) {
            document.body.style.overflow = "hidden";
            window.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.body.style.overflow = "";
            window.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            window.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [show, handleClose]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
            <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={handleClose}
            ></div>
            <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center">
                <div
                    ref={modalRef}
                    className="p-6 bg-white min-w-[80%] lg:min-w-[60%] rounded-md max-w-screen-md overflow-y-auto"
                >
                    <div className="flex justify-between mb-8">
                        <h1 className="font-bold text-xl">{title}</h1>
                        <div
                            className="hover:border rounded-md p-1 text-gray-400"
                            onClick={handleClose}
                        >
                            <AiOutlineClose />
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
