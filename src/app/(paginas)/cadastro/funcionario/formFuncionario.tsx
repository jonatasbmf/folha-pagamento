import InputMoeda from "@/components/inputs/inputMoeda";
import InputTexto from "@/components/inputs/inputTexto";
import { useFuncionario } from "@/hooks/funcionario/useFuncionario.hook";
import { Button, Pane, SelectField } from "evergreen-ui";
import { useEffect } from "react";

export default function FormFuncionario() {
    const {
        id, setId,
        nome, setNome,
        salario, setSalario,
        empresaId, setEmpresaId,
        funcionarios, setFuncionarios,
        termo, setTermo,
        loading,
        salvar,
        atualizar,
        apagar,
        listarTodos,
        buscarPorNome,
        empresas,
        listarEmpresas,
        limparFormulario
    } = useFuncionario();

    useEffect(() => {
        listarEmpresas();
    }, []);

    return (
        <>
            <Pane padding={16} background="tint2" borderRadius={3}>
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
                    value={salario}
                    required
                    setValue={setSalario}
                    validationMessage="Valor precisa ser informado e maior que zero."
                    placeholder="R$ 0,00"
                />

                <SelectField
                    label="Empresa"
                    required
                    value={empresaId}
                    onChange={e => setEmpresaId(+e.target.value)}
                >
                    <option value="0" selected>
                        Selecione uma empresa
                    </option>
                    {empresas ? empresas.map(
                        (empresa) => {
                            return (<option value={empresa.id} selected>
                                {empresa.nome}
                            </option>)
                        }
                    ) : null}
                </SelectField>
            </Pane>

            <Pane marginTop={10} padding={16} background="tint2" borderRadius={3}>
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
                        onClick={id && apagar ? () => apagar(+id) : undefined}
                        intent="danger">
                        Excluir
                    </Button>) : null}
                </div>
            </Pane>
        </>
    )
}