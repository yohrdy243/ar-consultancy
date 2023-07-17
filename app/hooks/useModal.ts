import { useState } from "react";

export type UseModalType = {
    show: boolean;
    handleShow: () => void;
    handleClose: () => void;
};

export function useModal(): UseModalType {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }
    function handleShow() {
        setShow(true);
    }
    return { show, handleShow, handleClose };
}
