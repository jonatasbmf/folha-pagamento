// src/components/InputMoeda.tsx
import { TextInputField } from "evergreen-ui";
import { forwardRef, useImperativeHandle, useState } from "react";
import { NumericFormat } from 'react-number-format';

interface InputMoedaProps {
    required?: boolean;
    label?: string;
    placeholder?: string;
    description?: string;
    validationMessage?: string;
    disabled?: boolean;
    value: string;
    setValue: (value: string) => void;
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

        const [valido, setValido] = useState(true);

        const validarCampo = () => {
            // Remove caracteres não numéricos, exceto vírgulas e pontos, validar se deve
            // ser ponto a casa decimal ou virgula, a correção será aqui na validação do campo
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