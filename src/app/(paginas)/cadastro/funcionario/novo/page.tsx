"use client"
import CabecalhoPaginaComBusca from "@/components/cabecalhoPagina/cabecalhoPaginaComBusca";
import Pagina from "@/components/Layout/pagina/pagina";
import { PlusIcon } from "evergreen-ui";

export default function Page() {
    return (
        <Pagina>
            <CabecalhoPaginaComBusca
                labelCabecalho="Listagem de Funcionários"
                labelBotao="Novo funcionário"
                iconeBotao={PlusIcon}
                funcaoDeBusca={() => { }}
                loading
                placeHolderBusca="Informe um termo e clique na lupa..."
                setTermoBusca={() => { }}
                termoBusca={"termo"}
                endPointBotao="/"
            />
            Novo funcionário
        </Pagina>
    )
}