'use client'
import CabecalhoPaginaComBusca from "@/components/cabecalhoPagina/cabecalhoPaginaComBusca";
import Loading from "@/components/loading/loading";
import useIrrf from "@/hooks/irrf/useIrrf.hook";
import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { PlusIcon, Table, Text } from "evergreen-ui";
import { useEffect } from "react";

export default function Page() {
    const {
        buscarAnoDistinto,
        filtrarPorAno,
        listaAno,
        loading,
        termo, setTermo
    } = useIrrf();

    const {
        irParaPagina
    } = useNavegacao();

    useEffect(() => {
        buscarAnoDistinto();
    }, []);

    return (
        <>
            {loading && <Loading />}
            <CabecalhoPaginaComBusca
                labelCabecalho="Listagem de tabelas de aliquotas de IRRF"
                endPointBotao="/tabela/irrf/novo"
                funcaoDeBusca={filtrarPorAno}
                iconeBotao={PlusIcon}
                labelBotao="Nova tabela"
                loading={loading}
                placeHolderBusca="Informe o ano e clique na busca..."
                setTermoBusca={setTermo}
                termoBusca={termo}
            />
            <Table>
                <Table.Head paddingX={10}>
                    <Table.TextHeaderCell>Ano de referencia</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={240}>
                    {listaAno.length === 0 ? (
                        <Table.Row>
                            <Table.Cell>
                                <Text>
                                    Nenhuma tabela de INSS cadastrada!
                                </Text>
                            </Table.Cell>
                        </Table.Row>
                    ) : (
                        listaAno.map((ano) => (
                            <Table.Row height={40} paddingX={10} key={ano.ano} isSelectable onSelect={() => irParaPagina(`/tabela/irrf/${ano.ano!}`)}>
                                <Table.TextCell>{ano.ano}</Table.TextCell>
                            </Table.Row>
                        ))
                    )}
                </Table.Body>
            </Table>
        </>
    )
}