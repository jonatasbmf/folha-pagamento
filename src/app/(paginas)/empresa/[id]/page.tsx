"use client"
import Pagina from "@/components/Layout/pagina/pagina";
import { Button, FastBackwardIcon } from "evergreen-ui";
import { useEffect } from "react";
import { FormEditarEmpresa } from "./formEditarEmpresa";
import { useEditarEmpresa } from "./useEditarEmpresa.hook";

export default function Page() {
    const { voltarPaginaAnterior, pegarIdDaRota } = useEditarEmpresa();

    useEffect(() => {
        pegarIdDaRota()
    }, [])

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