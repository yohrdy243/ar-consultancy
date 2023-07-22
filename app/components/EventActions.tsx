import Modal from "./Modal";
import FormEvent from "./FormEvent";
import { UseModalType } from "../hooks/useModal";
import { TEvent } from "../components/EventCard";

export function AddEvent({ modal }: { modal: UseModalType }) {
    return (
        <Modal title="Agregar Evento" {...modal}>
            <FormEvent />
        </Modal>
    );
}

export function EditEvent({
    modal,
    event,
}: {
    modal: UseModalType;
    event: TEvent;
}) {
    return (
        <Modal title="Editar Evento" {...modal}>
            <FormEvent event={event} />
        </Modal>
    );
}
