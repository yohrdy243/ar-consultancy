import Modal from "./Modal";
import FormEvent from "./FormEvent";
import { UseModalType } from "../hooks/useModal";
import { TEvent } from "../components/EventCard";

export function AddEvent({
    modal: { show, handleClose },
}: {
    modal: UseModalType;
}) {
    return (
        <Modal title="Agregar Evento" isOpen={show} handleClose={handleClose}>
            <FormEvent />
        </Modal>
    );
}

export function EditEvent({
    modal: { show, handleClose },
    event,
}: {
    modal: UseModalType;
    event: TEvent;
}) {
    return (
        <Modal title="Editar Evento" isOpen={show} handleClose={handleClose}>
            <FormEvent event={event} />
        </Modal>
    );
}
