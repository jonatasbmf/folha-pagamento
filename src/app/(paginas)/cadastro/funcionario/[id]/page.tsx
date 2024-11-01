'use client'
import CabecalhoPaginaComNavegacao from "@/components/cabecalhoPagina/cabecalhoPaginaNavegacao";
import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { FastBackwardIcon } from "evergreen-ui";

export default function EditarFuncionario() {
    const { voltarPaginaAnterior } = useNavegacao();
    return (
        <>
            <CabecalhoPaginaComNavegacao
                labelCabecalho="Listagem de Funcionários"
                labelBotao="Voltar"
                iconeBotao={FastBackwardIcon}
                acaoBotao={voltarPaginaAnterior}
            />
        </>
    )
}