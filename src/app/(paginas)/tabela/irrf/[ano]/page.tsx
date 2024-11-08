'use client'
import CabecalhoPaginaComNavegacao from "@/components/cabecalhoPagina/cabecalhoPaginaNavegacao";
import Loading from "@/components/loading/loading";
import { converterFloatParaMoedaString } from "@/helpers/conversorMoeda";
import useIrrf from "@/hooks/irrf/useIrrf.hook";
import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { FastBackwardIcon, Table, Text } from "evergreen-ui";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import FormIrrf from "../formIrrf";

export default function Page() {
    const param = useParams<{ ano: string }>()
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
        atualizar, excluir, limparFormulario
    } = useIrrf();

    useEffect(() => {
        alimentarDadosTela()
    }, []);

    const alimentarDadosTela = async () => {
        await buscarPorAno(Number(param.ano));
    }

    const carregarFormEdicao = (irrf: Irrf): void => {
        setId(irrf.id!);
        setAno(irrf.ano);
        setAliquotaString(irrf.aliquota.toString());
        setFaixaMinString(converterFloatParaMoedaString(irrf.faixaMin));
        setFaixaMaxString(converterFloatParaMoedaString(irrf.faixaMax));
        setDeducaoString(converterFloatParaMoedaString(irrf.deducao));
    }

    const atulizarAtualizarGrid = async () => {
        await atualizar();
        await alimentarDadosTela();
    }

    const excluirAtualizarGrid = async () => {
        await excluir(id);
        await alimentarDadosTela();
    }

    return (
        <>
            {loading && <Loading />}
            <CabecalhoPaginaComNavegacao
                labelCabecalho="Edição de tabela de aliquotas de IRRF por ano"
                labelBotao="Voltar"
                iconeBotao={FastBackwardIcon}
                acaoBotao={voltarPaginaAnterior}
            />
            <div className="mb-5">
                {id ? (
                    <FormIrrf
                        id={id}
                        ano={ano}
                        faixaMin={faixaMinString}
                        faixaMax={faixaMaxString}
                        aliquota={aliquotaString}
                        atualizar={atulizarAtualizarGrid}
                        excluir={excluirAtualizarGrid}
                        limparFormulario={limparFormulario}
                        setAno={setAno}
                        setFaixaMin={setFaixaMinString}
                        setFaixaMax={setFaixaMaxString}
                        setAliquota={setAliquotaString}
                        deducao={deducaoString}
                        setDeducao={setDeducaoString}
                    />) : null}
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