"use client"
import Pagina from "@/components/Layout/pagina/pagina";
import { Button, FastBackwardIcon } from "evergreen-ui";
import { FormNovaEmpresa } from "./formNovaEmpresa";
import { useNovaEmpresa } from "./useNovaEmpresa.hook";

export default function Page() {
    const { voltarPaginaAnterior } = useNovaEmpresa()
    return (
        <Pagina>
            <div className="py-3 px-4 font-bold flex flex-col pb-5">
                <h3>Cadastro de empresas</h3>
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
                <FormNovaEmpresa />
            </div>
        </Pagina>
    )
}