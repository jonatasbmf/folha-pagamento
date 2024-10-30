"use client"
import Pagina from "@/components/Layout/pagina/pagina";
import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { Button, Group, Heading, IconButton, Pane, PlusIcon, SearchIcon, Spinner, Table, TextInput } from "evergreen-ui";
import { SetStateAction } from "react";
import { useEmpresa } from "../../../hooks/empresa/useEmpresa.hook";

export default function Page() {
    const { empresas,
        empresa,
        setEmpresa,
        buscarPorNome,
        loading } = useEmpresa();

    const { irParaPagina } = useNavegacao();

    return (
        <Pagina>
            <div className="px-4 mt-4 mb-5">
                <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
                    <Pane flex={1} alignItems="center" display="flex">
                        <Heading size={600}>Listagem de empresas</Heading>
                    </Pane>
                    <Pane className="flex items-center gap-4">
                        <Button
                            className="w-36"
                            marginY={8}
                            marginRight={12}
                            iconAfter={PlusIcon}
                            onClick={() => irParaPagina('/empresa/nova')}>
                            Nova Empresa
                        </Button>
                        <Group>
                            <TextInput disabled={loading}
                                value={empresa}
                                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                                    setEmpresa(e.target.value)
                                }
                                placeholder="Informe um nome para busca..." />

                            <IconButton
                                disabled={loading}
                                icon={loading ? Spinner : SearchIcon}
                                onClick={buscarPorNome} />
                        </Group>
                    </Pane>
                </Pane>
            </div>

            <div className="px-4">
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
                                    <Table.TextCell>{empresa.razao_social}</Table.TextCell>
                                </Table.Row>
                            ))
                        )}
                    </Table.Body>
                </Table>
            </div>
        </Pagina>
    );
}
