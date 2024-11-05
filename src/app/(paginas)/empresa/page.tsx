"use client"
import CabecalhoPaginaComBusca from "@/components/cabecalhoPagina/cabecalhoPaginaComBusca";
import Loading from "@/components/loading/loading";
import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { PlusIcon, Table } from "evergreen-ui";
import { useEffect } from "react";
import { useEmpresa } from "../../../hooks/empresa/useEmpresa.hook";

export default function Page() {
    const {
        empresas,
        empresa,
        setEmpresa,
        buscarPorNome,
        loading,
        listarEmpresas
    } = useEmpresa();

    const { irParaPagina } = useNavegacao();

    useEffect(() => {
        listarEmpresas();
    }, []);

    return (
        <>
            {loading && <Loading />}
            <CabecalhoPaginaComBusca
                labelCabecalho="Listagem de empresas"
                endPointBotao="/empresa/nova"
                iconeBotao={PlusIcon}
                labelBotao="Nova Empresa"
                placeHolderBusca="Informe um termo e clique na lupa..."
                termoBusca={empresa}
                setTermoBusca={setEmpresa}
                funcaoDeBusca={buscarPorNome}
                loading={loading}
            />

            <Table>
                <Table.Head paddingX={10}>
                    <Table.TextHeaderCell>Nome</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Razão Social</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={240}>
                    {empresas.length === 0 ? (
                        <Table.Row>
                            <Table.Cell>Nenhuma empresa localizada!</Table.Cell>
                        </Table.Row>
                    ) : (
                        empresas.map((empresa) => (
                            <Table.Row height={40} paddingX={10} key={empresa.id} isSelectable onSelect={() => irParaPagina(`/empresa/${empresa.id!}`)}>
                                <Table.TextCell>{empresa.nome}</Table.TextCell>
                                <Table.TextCell>{empresa.razaoSocial}</Table.TextCell>
                            </Table.Row>
                        ))
                    )}
                </Table.Body>
            </Table>
        </>
    );
}
