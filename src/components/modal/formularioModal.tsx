import { Dialog } from "evergreen-ui";

interface FormularioModalProps {
    tituloModal: string;
    formulario: React.ReactNode;
    modalAberto: boolean;
    onClose: () => void;
}

const FormularioModal = (props: FormularioModalProps) => {
    const {
        tituloModal,
        formulario,
        modalAberto,
        onClose,
    } = props;

    return (
        <Dialog
            hasClose={true}
            shouldCloseOnEscapePress={false}
            shouldCloseOnOverlayClick={false}
            isShown={modalAberto}
            title={tituloModal}
            width={'80%'}
            onCloseComplete={onClose}
            hasFooter={false}
        >
            {formulario}
        </Dialog>
    );
};

export default FormularioModal;
