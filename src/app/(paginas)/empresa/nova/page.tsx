"use client"
import CabecalhoPaginaComNavegacao from "@/components/cabecalhoPagina/cabecalhoPaginaNavegacao";
import { FastBackwardIcon } from "evergreen-ui";
import { useNovaEmpresa } from "../../../../hooks/empresa/useNovaEmpresa.hook";
import { FormNovaEmpresa } from "./formNovaEmpresa";

export default function Page() {
    const { voltarPaginaAnterior } = useNovaEmpresa();

    return (
        <>
            <CabecalhoPaginaComNavegacao
                labelCabecalho="Cadastro de empresas"
                labelBotao="Voltar"
                iconeBotao={FastBackwardIcon}
                acaoBotao={voltarPaginaAnterior}
            />
            <div>
                <FormNovaEmpresa />
            </div>
        </>
    )
}