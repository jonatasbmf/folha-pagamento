"use client"
import Pagina from "@/components/Layout/pagina/pagina";
import { Button, Group, IconButton, PlusIcon, SearchIcon, Spinner, Table, TextInput } from "evergreen-ui";
import { SetStateAction } from "react";
import { useEmpresa } from "./useEmpresa.hook";

export default function Page() {
    const { empresas,
        empresa,
        setEmpresa,
        buscarPorNome,
        novaEmpresa,
        loading,
        editarEmpresa } = useEmpresa();

    return (
        <Pagina>
            <div className="py-3 px-4 font-bold flex flex-col pb-5">
                <h3>Listagem de empresas</h3>
                <Button
                    className="w-36"
                    marginY={8}
                    marginRight={12}
                    iconAfter={PlusIcon}
                    onClick={novaEmpresa}>
                    Nova Empresa
                </Button>
            </div>
            <div className="flex justify-end pb-6 px-4 ">
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
            </div>

            <div className="px-4">
                <Table>
                    <Table.Head>
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
                                <Table.Row key={empresa.id} isSelectable onSelect={() => editarEmpresa(empresa.id!)}>
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
