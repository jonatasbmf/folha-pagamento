import { Button, TextInputField } from "evergreen-ui";
import { SetStateAction } from "react";

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

    return (
        <div className="border rounded-lg bg-white p-3">
            <input style={{ display: 'none' }} type="number" disabled value={id} />
            <TextInputField
                label="Nome"
                placeholder="Digite o Nome da empresa..."
                value={nome}
                required
                onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNome(e.target.value)}
            />
            <TextInputField
                label="Razão Social"
                placeholder="Digite a Razão Social da empresa..."
                value={razaoSocial}
                required
                onChange={(e: { target: { value: SetStateAction<string>; }; }) => setRazaoSocial(e.target.value)}
            />
            <TextInputField
                label="E-mail"
                placeholder="Digite o e-mail da empresa..."
                value={email}
                required
                onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
            <div className="flex justify-end gap-2">
                <Button marginRight={16}
                    onClick={id ? atualizarEmpresa : salvarNovaEmpresa}
                    intent="success">
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
        </div>
    )
}