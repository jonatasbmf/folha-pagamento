"use client"
import Pagina from "@/components/Layout/pagina/pagina";
import { Button, FastBackwardIcon, Heading, Pane } from "evergreen-ui";
import { useNovaEmpresa } from "../../../../hooks/empresa/useNovaEmpresa.hook";
import { FormNovaEmpresa } from "./formNovaEmpresa";

export default function Page() {
    const { voltarPaginaAnterior } = useNovaEmpresa()
    return (
        <Pagina>
            <div className="mb-3">
                <div className="flex flex-1 mb-3">
                    <Heading size={600}>Cadastro de empresas</Heading>
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
                <FormNovaEmpresa />
            </div>
        </Pagina>
    )
}