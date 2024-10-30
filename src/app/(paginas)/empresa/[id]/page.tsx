"use client"
import Pagina from "@/components/Layout/pagina/pagina";
import { Button, FastBackwardIcon } from "evergreen-ui";
import { useEditarEmpresa } from "../../../../hooks/empresa/useEditarEmpresa.hook";
import { FormEditarEmpresa } from "./formEditarEmpresa";

export default function Page() {
    const { voltarPaginaAnterior } = useEditarEmpresa();

    return (
        <Pagina>
            <div className="py-3 px-4 font-bold flex flex-col pb-5">
                <h3>Editar empresa</h3>
                <Button
                    className="w-36"
                    marginY={8}
                    marginRight={12}
                    iconAfter={FastBackwardIcon}
                    onClick={voltarPaginaAnterior}>
                    Voltar
                </Button>
            </div>
            <div className=" py-3 px-4">
                <FormEditarEmpresa />
            </div>
        </Pagina>
    )
}