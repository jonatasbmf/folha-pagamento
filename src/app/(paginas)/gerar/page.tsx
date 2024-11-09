
'use client'
import { converterFloatParaMoedaString } from "@/helpers/conversorMoeda";
import { useFuncionario } from "@/hooks/funcionario/useFuncionario.hook";
import useGerarCalculo from "@/hooks/gerarCalculo/useGerarCalculo.hook";
import { Button, Heading, Pane, SelectField, Table, Text } from "evergreen-ui";
import { useEffect } from "react";

const page = () => {
    const { listarTodos, funcionarios } = useFuncionario();
    const {
        funcionarioId,
        setFuncionarioId,
        gerarComBaseNoId,
        folhaPagamento
    } = useGerarCalculo();

    useEffect(() => {
        listarTodos();
    }, []);

    const calculoSalarioBruto = (): number => {
        const salarioBruto = folhaPagamento?.salario! - folhaPagamento?.inss! - folhaPagamento?.irrf!
        return Math.max(salarioBruto, 0)
    }

    return (
        <>
            <div className="mb-5">
                <div className="flex flex-1 mb-3">
                    <Heading size={600}>Gerar calculo dos descontos.</Heading>
                </div>
                <Pane className="shadow-md" padding={16} background="tint2" borderRadius={3}>
                    <Pane className="flex items-center justify-between gap-4">
                        <SelectField
                            width={350}
                            label="Selecione um funcionário para calculo"
                            value={funcionarioId}
                            onChange={e => setFuncionarioId(+e.target.value)}
                        >
                            <option value="0">
                                Selecione...
                            </option>
                            {funcionarios ? funcionarios.map(
                                (funcionarioSelecionado) => {
                                    return (<option key={funcionarioSelecionado.id} value={funcionarioSelecionado.id} >
                                        {funcionarioSelecionado.nome}
                                    </option>)
                                }
                            ) : null}
                        </SelectField>
                        <Button marginRight={16}
                            onClick={gerarComBaseNoId}
                            intent="success"
                        >
                            Gerar calculo
                        </Button>
                    </Pane>
                </Pane>
            </div><div className="mb-5">
                <Pane className="shadow-md" padding={16} background="tint2" borderRadius={3}>
                    <Text> Resultado do calculo </Text>
                    <Table>
                        <Table.Head>
                            <Table.HeaderCell>Nome</Table.HeaderCell>
                            <Table.HeaderCell>Salário</Table.HeaderCell>
                            <Table.HeaderCell>INSS</Table.HeaderCell>
                            <Table.HeaderCell>IRRF</Table.HeaderCell>
                            <Table.HeaderCell>R$ Bruto</Table.HeaderCell>
                        </Table.Head>
                        <Table.Body>
                            <Table.Row>
                                <Table.TextCell>{folhaPagamento?.nome}</Table.TextCell>
                                <Table.TextCell>{converterFloatParaMoedaString(folhaPagamento?.salario)}</Table.TextCell>
                                <Table.TextCell>{converterFloatParaMoedaString(folhaPagamento?.inss)}</Table.TextCell>
                                <Table.TextCell>{converterFloatParaMoedaString(folhaPagamento?.irrf)}</Table.TextCell>
                                <Table.TextCell>{converterFloatParaMoedaString(calculoSalarioBruto())}</Table.TextCell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Pane>
            </div>
        </>
    );
}

export default page;