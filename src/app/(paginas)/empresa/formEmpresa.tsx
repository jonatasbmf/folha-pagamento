import InputEmail from "@/components/inputs/inputEmail";
import InputTexto, { InputTextoRef } from "@/components/inputs/inputTexto";
import { Button, Pane } from "evergreen-ui";
import { SetStateAction, useRef, useState } from "react";

interface FormEmpresaProps {
    id?: number;
    nome: string;
    razaoSocial: string;
    email: string;
    setNome: (e: SetStateAction<string>) => void;
    setRazaoSocial: (e: SetStateAction<string>) => void;
    setEmail: (e: SetStateAction<string>) => void;
    salvarNovaEmpresa?: () => void;
    limparFormCadastro: () => void;
    atualizarEmpresa?: () => void;
}

export default function FormEmpresa(props: FormEmpresaProps) {
    const {
        id,
        nome,
        razaoSocial,
        email,
        setNome,
        setRazaoSocial,
        setEmail,
        salvarNovaEmpresa,
        limparFormCadastro,
        atualizarEmpresa } = props;

    const [formValido, setFormValido] = useState(true);

    const inputNomeRef = useRef<InputTextoRef>(null);
    const inputRazaoSocialRef = useRef<InputTextoRef>(null);
    const inputEmailRef = useRef<InputTextoRef>(null);

    const verificarValidadeFormulario = () => {
        const nomeValido = inputNomeRef.current?.isValid ?? false;
        const razaoSocialValido = inputRazaoSocialRef.current?.isValid ?? false;
        const emailValido = inputEmailRef.current?.isValid ?? false;

        const formularioValido = nomeValido && razaoSocialValido && emailValido;
        setFormValido(formularioValido);
    };

    return (
        <>
            <Pane padding={16} background="tint2" borderRadius={3}>
                <input style={{ display: 'none' }} type="number" disabled value={id} />
                <InputTexto
                    label="Nome"
                    placeholder="Digite o Nome da empresa..."
                    validationMessage="Campo não pode ser vazio."
                    value={nome}
                    required={true}
                    setValue={setNome}
                    ref={inputNomeRef}
                />
                <InputTexto
                    label="Razão Social"
                    placeholder="Digite a Razão Social da empresa..."
                    validationMessage="Campo não pode ser vazio."
                    value={razaoSocial}
                    required={true}
                    ref={inputRazaoSocialRef}
                    setValue={setRazaoSocial}
                />
                <InputEmail
                    label="E-mail"
                    placeholder="Digite o e-mail da empresa..."
                    value={email}
                    required={true}
                    validationMessage="E-mail precisa ser válido"
                    ref={inputEmailRef}
                    setValue={setEmail}
                />
            </Pane>
            <Pane marginTop={10} padding={16} background="tint2" borderRadius={3}>
                <div className="flex justify-end gap-2">
                    <Button marginRight={16}
                        onClick={id ? atualizarEmpresa : salvarNovaEmpresa}
                        intent="success"
                    >
                        Salvar
                    </Button>
                    <Button marginRight={16}
                        onClick={limparFormCadastro}
                        intent="none">
                        Limpar
                    </Button>
                    {id ? (<Button marginRight={16}
                        onClick={limparFormCadastro}
                        intent="danger">
                        Excluir
                    </Button>) : null}
                </div>
            </Pane>
        </>
    )
}