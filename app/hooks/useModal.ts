import { useState } from "react";

export function useModal() {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }
    function handleShow() {
        setShow(true);
    }
    return { show, handleShow, handleClose };
}
