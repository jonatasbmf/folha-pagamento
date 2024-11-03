'use client'
import CabecalhoPaginaComNavegacao from "@/components/cabecalhoPagina/cabecalhoPaginaNavegacao";
import { converterFloatParaMoedaString } from "@/helpers/conversorMoeda";
import useInss from "@/hooks/inss/useInss.hook";
import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { FastBackwardIcon, Table, Text } from "evergreen-ui";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import FormInss from "../formInss";

export default function Page() {
    const param = useParams<{ ano: string }>()
    const { voltarPaginaAnterior } = useNavegacao();

    const {
        buscarPorAno,
        listaInss,
        ano, setAno,
        id, setId,
        aliquota, setAliquota,
        faixaMin, setFaixaMin,
        faixaMax, setFaixaMax,
        inserir, atualizar, excluir, limparFormulario
    } = useInss();

    useEffect(() => {
        alimentarDadosTela()
    }, []);

    const alimentarDadosTela = async () => {
        await buscarPorAno(Number(param.ano));
    }

    return (
        <>
            <CabecalhoPaginaComNavegacao
                labelCabecalho="Edição de Tabela de aliquotas de INSS por ano"
                labelBotao="Voltar"
                iconeBotao={FastBackwardIcon}
                acaoBotao={voltarPaginaAnterior}
            />
            <div className="mb-5">
                <Text >Selecione uma linha da tabela para edição!</Text>
                <div className=" ">
                    <FormInss
                        id={id}
                        ano={ano}
                        faixaMin={faixaMin}
                        faixaMax={faixaMax}
                        aliquota={aliquota}
                        salvar={inserir}
                        atualizar={atualizar}
                        excluir={excluir}
                        limparFormulario={limparFormulario}
                        setAno={setAno}
                        setFaixaMin={setFaixaMin}
                        setFaixaMax={setFaixaMax}
                        setAliquota={setAliquota}
                    />
                </div>
            </div>
            <Table>
                <Table.Head paddingX={10}>
                    <Table.TextHeaderCell>Ano</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Faixa Mínima</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Faixa Máxima</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Aliquota</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={240}>
                    {listaInss.length === 0 ? (
                        <Table.Row>
                            <Table.Cell>Nenhum aliquota cadastrada!</Table.Cell>
                        </Table.Row>
                    ) : (
                        listaInss.map((aliquota) => (
                            <Table.Row height={40} paddingX={10} key={aliquota.id} isSelectable onSelect={() => { }} >
                                <Table.TextCell>{aliquota.ano}</Table.TextCell>
                                <Table.TextCell>{converterFloatParaMoedaString(aliquota.faixaMin)}</Table.TextCell>
                                <Table.TextCell>{converterFloatParaMoedaString(aliquota.faixaMax)}</Table.TextCell>
                                <Table.TextCell>{aliquota.aliquota}</Table.TextCell>
                            </Table.Row>
                        ))
                    )}
                </Table.Body>
            </Table >
        </>
    )
}