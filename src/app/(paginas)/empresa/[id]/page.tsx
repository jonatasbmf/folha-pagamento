"use client"
import Pagina from "@/components/Layout/pagina/pagina";
import { Button, FastBackwardIcon, Heading, Pane } from "evergreen-ui";
import { useEditarEmpresa } from "../../../../hooks/empresa/useEditarEmpresa.hook";
import { FormEditarEmpresa } from "./formEditarEmpresa";

export default function Page() {
    const { voltarPaginaAnterior } = useEditarEmpresa();

    return (
        <Pagina>
            <div className="mb-3">
                <div className="flex flex-1 mb-3">
                    <Heading size={600}>Editar Empresa</Heading>
                </div>
                <Pane padding={16} background="tint2" borderRadius={3}>
                    <Pane className="flex items-center justify-between  gap-4">
                        <Button
                            className="w-36"
                            marginY={8}
                            marginRight={12}
                            iconAfter={FastBackwardIcon}
                            onClick={voltarPaginaAnterior}>
                            Voltar
                        </Button>
                    </Pane>
                </Pane>
            </div>
            <div>
                <FormEditarEmpresa />
            </div>
        </Pagina>
    )
}