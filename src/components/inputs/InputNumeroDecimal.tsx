// src/components/InputNumeroDecimal.tsx
import { TextInputField } from "evergreen-ui";
import { forwardRef, useImperativeHandle, useState } from "react";
import { NumericFormat } from 'react-number-format';

interface InputNumeroDecimalProps {
    required?: boolean;
    label?: string;
    placeholder?: string;
    description?: string;
    validationMessage?: string;
    disabled?: boolean;
    value: string;
    setValue: (value: string) => void;
    decimalScale?: number;
}

export interface InputNumeroDecimalRef {
    isValid: boolean;
}

const InputNumeroDecimal = forwardRef<InputNumeroDecimalRef, InputNumeroDecimalProps>((props, ref) => {
    const {
        required,
        label,
        placeholder,
        description,
        validationMessage,
        disabled,
        value,
        setValue,
        decimalScale = 2
    } = props;

    const [valido, setValido] = useState(true);

    const validarCampo = () => {
        const numericValue = parseFloat(value.replace(/[^\d,-]/g, '').replace(',', '.'));

        if (required) {
            if (isNaN(numericValue) || numericValue <= 0) {
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
        <NumericFormat
            value={value}
            onValueChange={(values) => {
                const { formattedValue } = values;
                setValue(formattedValue);
            }}
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={decimalScale}
            fixedDecimalScale
            customInput={TextInputField}
            inputMode="decimal"
            onBlur={validarCampo}
            isInvalid={!valido}
            disabled={disabled}
            required={required}
            label={label}
            description={description}
            placeholder={placeholder}
            style={{ textAlign: 'right' }}
            validationMessage={!valido && validationMessage ? validationMessage : null}
        />
    );
});

export default InputNumeroDecimal;
