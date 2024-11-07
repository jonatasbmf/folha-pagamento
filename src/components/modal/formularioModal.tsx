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
            isShown={modalAberto}
            title={tituloModal}
            minHeightContent={400}
            width={'80%'}
            onCloseComplete={onClose}
            hasFooter={false}
        >
            {formulario}
        </Dialog>
    );
};

export default FormularioModal;
