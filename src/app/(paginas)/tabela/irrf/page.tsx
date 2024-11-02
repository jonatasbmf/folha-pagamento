'use client'
import CabecalhoPaginaComBusca from "@/components/cabecalhoPagina/cabecalhoPaginaComBusca";
import { PlusIcon } from "evergreen-ui";

export default function Page() {
    return (
        <>
            <CabecalhoPaginaComBusca
                labelCabecalho="Listagem de tabelas de aliquotas de IRRF"
                endPointBotao=""
                funcaoDeBusca={() => { }}
                iconeBotao={PlusIcon}
                labelBotao="Nova tabela"
                loading
                placeHolderBusca="Informe o ano e clique na busca..."
                setTermoBusca={() => { }}
                termoBusca=""
            />
        </>
    )
}