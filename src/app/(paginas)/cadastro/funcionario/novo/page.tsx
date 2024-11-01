"use client"
import CabecalhoPaginaComNavegacao from "@/components/cabecalhoPagina/cabecalhoPaginaNavegacao";
import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { FastBackwardIcon } from "evergreen-ui";
import { FormNovoFuncionario } from "./formNovoFuncionario";

export default function Page() {
    const { voltarPaginaAnterior } = useNavegacao();
    return (
        <>
            <CabecalhoPaginaComNavegacao
                labelCabecalho="Listagem de Funcionários"
                labelBotao="Voltar"
                iconeBotao={FastBackwardIcon}
                acaoBotao={voltarPaginaAnterior}
            />
            <FormNovoFuncionario />
        </>
    )
}