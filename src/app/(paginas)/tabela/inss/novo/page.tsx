'use client'
import CabecalhoPaginaComNavegacao from "@/components/cabecalhoPagina/cabecalhoPaginaNavegacao";
import Loading from "@/components/loading/loading";
import { converterFloatParaMoedaString } from "@/helpers/conversorMoeda";
import useInss from "@/hooks/inss/useInss.hook";
import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { FastBackwardIcon, Table, Text } from "evergreen-ui";
import { useState } from "react";
import FormInss from "../formInss";

export default function Page() {
    const { voltarPaginaAnterior } = useNavegacao();

    const {
        loading,
        buscarPorAno,
        listaInss,
        ano, setAno,
        id, setId,
        faixaMinString, setFaixaMinString,
        faixaMaxString, setFaixaMaxString,
        aliquotaString, setAliquotaString,
        inserir, atualizar, excluir, limparFormulario
    } = useInss();
    const [anoReferencia, setAnoReferencia] = useState(0);

    const alimentarDadosTela = async () => {
        await buscarPorAno(anoReferencia);
    }

    const salvar = async () => {
        setAnoReferencia(ano);
        await inserir();
        setAno(anoReferencia);
        await alimentarDadosTela();
    }

    const excluirAtualizarGrid = async () => {
        setAnoReferencia(ano);
        await excluir(id);
        setAno(anoReferencia);
        await alimentarDadosTela();
    }

    const carregarFormEdicao = (inss: Inss): void => {
        setId(inss.id!);
        setAno(inss.ano);
        setAliquotaString(inss.aliquota.toString());
        setFaixaMinString(converterFloatParaMoedaString(inss.faixaMin));
        setFaixaMaxString(converterFloatParaMoedaString(inss.faixaMax));
    }

    return (
        <>
            {loading && <Loading />}
            <CabecalhoPaginaComNavegacao
                labelCabecalho="Inclusão de tabela de aliquotas de INSS por ano"
                labelBotao="Voltar"
                iconeBotao={FastBackwardIcon}
                acaoBotao={voltarPaginaAnterior}
            />
            <div className="mb-5">
                <FormInss
                    id={id}
                    ano={ano}
                    faixaMin={faixaMinString}
                    faixaMax={faixaMaxString}
                    aliquota={aliquotaString}
                    salvar={salvar}
                    atualizar={atualizar}
                    excluir={excluirAtualizarGrid}
                    limparFormulario={limparFormulario}
                    setAno={setAno}
                    setFaixaMin={setFaixaMinString}
                    setFaixaMax={setFaixaMaxString}
                    setAliquota={setAliquotaString}
                />
            </div>

            <Text >Selecione uma linha da tabela para edição!</Text>
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
                            <Table.Row height={40} paddingX={10} key={aliquota.id} isSelectable onSelect={() => carregarFormEdicao(aliquota)} >
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