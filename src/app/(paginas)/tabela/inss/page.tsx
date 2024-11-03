'use client'
import CabecalhoPaginaComBusca from "@/components/cabecalhoPagina/cabecalhoPaginaComBusca";
import useInss from "@/hooks/inss/useInss.hook";
import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { PlusIcon, Table } from "evergreen-ui";
import { useEffect } from "react";

export default function Page() {
    const {
        buscarAnoDistinto,
        filtrarPorAno,
        listaAno,
        loading,
        termo, setTermo
    } = useInss();

    const {
        irParaPagina
    } = useNavegacao();

    useEffect(() => {
        buscarAnoDistinto();
    }, []);

    return (
        <>
            <CabecalhoPaginaComBusca
                labelCabecalho="Listagem de tabelas de aliquotas de INSS"
                endPointBotao=""
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
                            <Table.Cell>Nenhuma tabela de INSS cadastrada!</Table.Cell>
                        </Table.Row>
                    ) : (
                        listaAno.map((ano) => (
                            <Table.Row height={40} paddingX={10} key={ano.ano} isSelectable onSelect={() => irParaPagina(`/tabela/inss/${ano.ano!}`)}>
                                <Table.TextCell>{ano.ano}</Table.TextCell>
                            </Table.Row>
                        ))
                    )}
                </Table.Body>
            </Table>
        </>
    )
}