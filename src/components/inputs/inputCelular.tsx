// src/components/InputCelular.tsx
import { TextInputField } from "evergreen-ui";
import { forwardRef, useImperativeHandle, useState } from "react";
import InputMask from 'react-input-mask';

interface InputCelularProps {
    required?: boolean;
    label?: string;
    placeholder?: string;
    description?: string;
    validationMessage?: string;
    disabled?: boolean;
    value: string;
    setValue: (value: string) => void;
}

export interface InputCelularRef {
    isValid: boolean;
}

const InputCelular = forwardRef<InputCelularRef, InputCelularProps>((props, ref) => {
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
        <InputMask
            mask="(99) 99999-9999"
            value={value}
            onChange={(e: { target: { value: string; }; }) => setValue(e.target.value)}
            onBlur={validarCampo}
        >
            <TextInputField
                isInvalid={!valido}
                disabled={disabled}
                required={required}
                label={label}
                description={description}
                placeholder={placeholder}
                validationMessage={!valido && validationMessage ? validationMessage : null}
                value={value}
            />
        </InputMask>
    );
});

export default InputCelular;