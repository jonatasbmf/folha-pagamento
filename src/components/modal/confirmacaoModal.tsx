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
            confirmLabel="Confirmar"
            cancelLabel="Cancelar"
            onConfirm={onConfirm}
        >
            {textoModal}
        </Dialog>
    );
};

export default ConfirmacaoModal;
