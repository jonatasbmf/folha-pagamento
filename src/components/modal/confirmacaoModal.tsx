import { Dialog } from 'evergreen-ui';

interface ConfirmacaoModalProps {
    tituloModal: string;
    textoModal: string;
    modalAberto: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmacaoModal = (props: ConfirmacaoModalProps) => {
    const {
        tituloModal,
        textoModal,
        modalAberto,
        onClose,
        onConfirm
    } = props;

    return (
        <Dialog
            isShown={modalAberto}
            title={tituloModal}
            onCloseComplete={onClose}
            onConfirm={onConfirm}
            confirmLabel="Confirmar"
            cancelLabel="Cancelar"
            hasClose={true}
            shouldCloseOnEscapePress={false}
            shouldCloseOnOverlayClick={false}
        >
            {textoModal}
        </Dialog>
    );
};

export default ConfirmacaoModal;
