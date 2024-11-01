// src/components/InputMoeda.tsx
import { converterFloatParaMoedaString, converterMoedaStringParaFloat } from "@/helpers/conversorMoeda";
import { TextInputField } from "evergreen-ui";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { NumericFormat } from 'react-number-format';

interface InputMoedaProps {
    required?: boolean;
    label?: string;
    placeholder?: string;
    description?: string;
    validationMessage?: string;
    disabled?: boolean;
    value: number;
    setValue: (value: number) => void;
}

export interface InputMoedaRef {
    isValid: boolean;
}

const
    InputMoeda = forwardRef<InputMoedaRef, InputMoedaProps>((props, ref) => {
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

        const [salarioString, setSalarioString] = useState("");

        const [valido, setValido] = useState(true);

        useEffect(() => {
            if (value)
                setSalarioString(converterFloatParaMoedaString(value));
        }, []);

        const validarCampo = () => {
            const numericValue = converterMoedaStringParaFloat(salarioString);

            if (required) {
                if (isNaN(numericValue) || numericValue <= 0) {
                    setValido(false);
                } else {
                    setValido(true);
                    setValue(numericValue);
                }
            }
        };

        useImperativeHandle(ref, () => ({
            isValid: valido
        }));

        return (
            <NumericFormat
                value={salarioString}
                onValueChange={(values) => {
                    const { formattedValue } = values;
                    setSalarioString(formattedValue);
                }}
                thousandSeparator="."
                decimalSeparator=","
                decimalScale={2}
                fixedDecimalScale
                prefix="R$ "
                customInput={TextInputField}
                onBlur={validarCampo}
                isInvalid={!valido}
                disabled={disabled}
                required={required}
                label={label}
                description={description}
                placeholder={placeholder}
                validationMessage={!valido && validationMessage ? validationMessage : null}
            />
        );
    });

export default InputMoeda;