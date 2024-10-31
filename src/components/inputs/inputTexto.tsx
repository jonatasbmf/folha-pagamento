import { TextInputField } from "evergreen-ui";
import { forwardRef, useImperativeHandle, useState } from "react";

interface InputTextoProps {
    required?: boolean;
    label?: string;
    placeholder?: string;
    description?: string;
    validationMessage?: string;
    disabled?: boolean;
    value: string;
    setValue: (value: string) => void;
}

export interface InputTextoRef {
    isValid: boolean;
}

const InputTexto = forwardRef<InputTextoRef, InputTextoProps>((props, ref) => {
    const {
        required,
        label,
        placeholder,
        description,
        validationMessage,
        disabled,
        value,
        setValue
    } = props;

    const [valido, setValido] = useState(true);

    const validarCampo = () => {
        if (required) {
            if (!value || value.trim().length === 0) {
                setValido(false);
            } else {
                setValido(true);
            }
        }
    };

    useImperativeHandle(ref, () => ({
        isValid: valido
    }));

    return (
        <TextInputField
            onBlur={validarCampo}
            isInvalid={!valido}
            disabled={disabled}
            required={required}
            label={label}
            description={description}
            placeholder={placeholder}
            validationMessage={!valido && validationMessage ? validationMessage : null}
            value={value}
            onChange={(e: { target: { value: string; }; }) => setValue(e.target.value)}
        />
    );
});

export default InputTexto;