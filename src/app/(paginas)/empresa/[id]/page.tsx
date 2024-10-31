"use client"
import CabecalhoPaginaComNavegacao from "@/components/cabecalhoPagina/cabecalhoPaginaNavegacao";
import Pagina from "@/components/Layout/pagina/pagina";
import { FastBackwardIcon } from "evergreen-ui";
import { useEditarEmpresa } from "../../../../hooks/empresa/useEditarEmpresa.hook";
import { FormEditarEmpresa } from "./formEditarEmpresa";

export default function Page() {
    const { voltarPaginaAnterior } = useEditarEmpresa();

    return (
        <Pagina>
            <CabecalhoPaginaComNavegacao
                labelCabecalho="Editar cadastro da Empresa"
                labelBotao="Voltar"
                iconeBotao={FastBackwardIcon}
                acaoBotao={voltarPaginaAnterior}
            />
            <div>
                <FormEditarEmpresa />
            </div>
        </Pagina>
    )
}