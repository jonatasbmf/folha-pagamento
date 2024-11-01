// src/components/InputPassword.tsx
import { TextInputField } from "evergreen-ui";
import { forwardRef, useImperativeHandle, useState } from "react";

interface InputPasswordProps {
    required?: boolean;
    label?: string;
    placeholder?: string;
    description?: string;
    validationMessage?: string;
    disabled?: boolean;
    value: string;
    setValue: (value: string) => void;
}

export interface InputPasswordRef {
    isValid: boolean;
}

const InputPassword = forwardRef<InputPasswordRef, InputPasswordProps>((props, ref) => {
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
            const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!value || !regex.test(value)) {
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
            type="password"
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

export default InputPassword;