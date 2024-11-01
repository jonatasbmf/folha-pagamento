"use client"
import CabecalhoPaginaComNavegacao from "@/components/cabecalhoPagina/cabecalhoPaginaNavegacao";
import { FastBackwardIcon } from "evergreen-ui";
import { useEditarEmpresa } from "../../../../hooks/empresa/useEditarEmpresa.hook";
import { FormEditarEmpresa } from "./formEditarEmpresa";

export default function Page() {
    const { voltarPaginaAnterior } = useEditarEmpresa();

    return (
        <>
            <CabecalhoPaginaComNavegacao
                labelCabecalho="Editar cadastro da Empresa"
                labelBotao="Voltar"
                iconeBotao={FastBackwardIcon}
                acaoBotao={voltarPaginaAnterior}
            />
            <div>
                <FormEditarEmpresa />
            </div>
        </>
    )
}