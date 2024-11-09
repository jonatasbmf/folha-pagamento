'use client'
import InputMoeda from "@/components/inputs/inputMoeda";
import InputTexto from "@/components/inputs/inputTexto";
import ConfirmacaoModal from "@/components/modal/confirmacaoModal";
import { Button, Pane, SelectField } from "evergreen-ui";
import { SetStateAction, useState } from "react";

interface FormFuncionarioProps {
    id?: number;
    nome: string;
    setNome: (e: SetStateAction<string>) => void;
    salarioString: string;
    setSalarioString: (e: string) => void;
    empresaId: number
    setEmpresaId: (value: number) => void;
    empresas: Empresa[];
    atualizar?: () => void;
    salvar?: () => void;
    limparFormulario: () => void
    apagar?: (value: number) => {}
    deducao: string;
    setDeducao: (e: string) => void;
}

export default function FormFuncionario(props: FormFuncionarioProps) {
    const [modalAberto, setModalAberto] = useState<boolean>(false);

    const {
        id,
        nome,
        setNome,
        salarioString,
        setSalarioString,
        empresaId,
        setEmpresaId,
        empresas,
        atualizar,
        salvar,
        limparFormulario,
        apagar,
        deducao,
        setDeducao
    } = props;

    return (
        <>
            <ConfirmacaoModal
                textoModal="Confirma exclusão do funcionário?"
                tituloModal="Excluir Funcionario"
                modalAberto={modalAberto}
                onClose={() => setModalAberto(false)}
                onConfirm={() => {
                    if (apagar) {
                        apagar(id!);
                    }
                }}
            />
            <Pane className="shadow-md" padding={16} background="tint2" borderRadius={3}>
                <input style={{ display: 'none' }} type="number" disabled value={id} />
                <InputTexto
                    label="Nome"
                    placeholder="Informe nome do Funcionário."
                    validationMessage="Campo não pode ficar vazio"
                    value={nome}
                    required
                    setValue={setNome}
                />
                <InputMoeda
                    label="Salário"
                    value={salarioString}
                    required
                    setValue={setSalarioString}
                    validationMessage="Valor precisa ser informado e maior que zero."
                    placeholder="R$ 0,00"
                />
                <InputMoeda
                    label="Dedução"
                    value={deducao}
                    required
                    setValue={setDeducao}
                    validationMessage="Valor precisa ser informado e maior que zero."
                    placeholder="R$ 0,00"
                />

                <SelectField
                    label="Empresa"
                    required
                    value={empresaId}
                    onChange={e => setEmpresaId(+e.target.value)}
                >
                    <option value="0" >
                        Selecione uma empresa
                    </option>
                    {empresas ? empresas.map(
                        (empresa) => {
                            return (<option key={empresa.id} value={empresa.id} >
                                {empresa.nome}
                            </option>)
                        }
                    ) : null}
                </SelectField>
            </Pane>

            <Pane className="shadow-md" marginTop={10} padding={16} background="tint2" borderRadius={3}>
                <div className="flex justify-end gap-2">
                    <Button marginRight={16}
                        onClick={id ? atualizar : salvar}
                        intent="success"
                    >
                        Salvar
                    </Button>
                    <Button marginRight={16}
                        onClick={limparFormulario}
                        intent="none">
                        Limpar
                    </Button>
                    {id ? (<Button marginRight={16}
                        onClick={id && apagar ? () => setModalAberto(true) : undefined}
                        intent="danger">
                        Excluir
                    </Button>) : null}
                </div>
            </Pane>
        </>
    )
}