'use client'
import CabecalhoPaginaComNavegacao from "@/components/cabecalhoPagina/cabecalhoPaginaNavegacao";
import Loading from "@/components/loading/loading";
import { converterFloatParaMoedaString } from "@/helpers/conversorMoeda";
import useIrrf from "@/hooks/irrf/useIrrf.hook";
import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { FastBackwardIcon, Table, Text } from "evergreen-ui";
import { useState } from "react";
import FormIrrf from "../formIrrf";

export default function Page() {
    const { voltarPaginaAnterior } = useNavegacao();

    const {
        loading,
        buscarPorAno,
        listaIrrf,
        ano, setAno,
        id, setId,
        faixaMinString, setFaixaMinString,
        faixaMaxString, setFaixaMaxString,
        aliquotaString, setAliquotaString,
        deducaoString, setDeducaoString,
        inserir, atualizar, excluir, limparFormulario
    } = useIrrf();
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

    const carregarFormEdicao = (irrf: Irrf): void => {
        setId(irrf.id!);
        setAno(irrf.ano);
        setAliquotaString(irrf.aliquota.toString());
        setFaixaMinString(converterFloatParaMoedaString(irrf.faixaMin));
        setFaixaMaxString(converterFloatParaMoedaString(irrf.faixaMax));
        setDeducaoString(converterFloatParaMoedaString(irrf.deducao));
    }

    return (
        <>
            {loading && <Loading />}
            <CabecalhoPaginaComNavegacao
                labelCabecalho="Inclusão de tabela de aliquotas de IRRF por ano"
                labelBotao="Voltar"
                iconeBotao={FastBackwardIcon}
                acaoBotao={voltarPaginaAnterior}
            />
            <div className="mb-5">
                <FormIrrf
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
                    setDeducao={setDeducaoString}
                    deducao={deducaoString}
                />
            </div>

            <Text >Selecione uma linha da tabela para edição!</Text>
            <Table className="shadow-md" >
                <Table.Head paddingX={10}>
                    <Table.TextHeaderCell>Ano</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Faixa Mínima</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Faixa Máxima</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Aliquota</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Dedução</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body maxHeight={240}>
                    {listaIrrf.length === 0 ? (
                        <Table.Row>
                            <Table.Cell>Nenhum aliquota cadastrada!</Table.Cell>
                        </Table.Row>
                    ) : (
                        listaIrrf.map((aliquota) => (
                            <Table.Row height={40} paddingX={10} key={aliquota.id} isSelectable onSelect={() => carregarFormEdicao(aliquota)} >
                                <Table.TextCell>{aliquota.ano}</Table.TextCell>
                                <Table.TextCell>{converterFloatParaMoedaString(aliquota.faixaMin)}</Table.TextCell>
                                <Table.TextCell>{converterFloatParaMoedaString(aliquota.faixaMax)}</Table.TextCell>
                                <Table.TextCell>{aliquota.aliquota}</Table.TextCell>
                                <Table.TextCell>{aliquota.deducao}</Table.TextCell>
                            </Table.Row>
                        ))
                    )}
                </Table.Body>
            </Table >
        </>
    )
}