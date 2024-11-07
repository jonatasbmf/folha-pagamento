"use client"
import CabecalhoPaginaComBusca from "@/components/cabecalhoPagina/cabecalhoPaginaComBusca";
import Loading from "@/components/loading/loading";
import { converterFloatParaMoedaString } from "@/helpers/conversorMoeda";
import { useFuncionario } from "@/hooks/funcionario/useFuncionario.hook";
import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { PlusIcon, Table, Text } from "evergreen-ui";
import { useEffect } from "react";

export default function Page() {
    const {
        termo,
        setTermo,
        buscarPorNome,
        loading,
        listarTodos,
        funcionarios
    } = useFuncionario();

    const { irParaPagina } = useNavegacao()

    useEffect(() => {
        listarTodos();
    }, []);


    return (
        <>
            {loading && <Loading />}
            <CabecalhoPaginaComBusca
                labelCabecalho="Listagem de Funcionários"
                labelBotao="Novo funcionário"
                iconeBotao={PlusIcon}
                funcaoDeBusca={() => buscarPorNome}
                loading={loading}
                placeHolderBusca="Informe um termo e clique na lupa..."
                setTermoBusca={setTermo}
                termoBusca={termo}
                endPointBotao="funcionario/novo"
            />

            <Table>
                <Table.Head paddingX={10}>
                    <Table.TextHeaderCell>Nome</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Salário</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Empresa</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={240}>
                    {funcionarios.length === 0 ? (
                        <Table.Row>
                            <Table.Cell>
                                <Text>
                                    Nenhum funcionário localizado!
                                </Text>
                            </Table.Cell>
                        </Table.Row>
                    ) : (
                        funcionarios.map((funcionario) => (
                            <Table.Row height={40} paddingX={10} key={funcionario.id} isSelectable onSelect={() => irParaPagina(`funcionario/${funcionario.id!}`)}>
                                <Table.TextCell>{funcionario.nome}</Table.TextCell>
                                <Table.TextCell>{converterFloatParaMoedaString(funcionario.salario)}</Table.TextCell>
                                <Table.TextCell>{funcionario.empresa?.nome}</Table.TextCell>
                            </Table.Row>
                        ))
                    )}
                </Table.Body>
            </Table>
        </>
    )
}