"use client"
import Pagina from "@/components/Layout/pagina/pagina";
import empresa_service from "@/service/empresa-service/empresaService";
import { Group, IconButton, SearchIcon, Spinner, Table, TextInput } from "evergreen-ui";
import { SetStateAction, useEffect, useState } from "react";

export default function Page() {
    const [empresa, setEmpresa] = useState("");
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [isLoading, seIsLoading] = useState(false);

    useEffect(() => {
        const listarEmpresas = async () => {
            try {
                const buscaEmpresas = await empresa_service.listarTodas();
                if (buscaEmpresas.status === 200) {
                    setEmpresas(buscaEmpresas.data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        listarEmpresas();
    }, []);

    const buscarPorNome = async () => {
        try {
            const buscoPorNome = await empresa_service.buscarPorNome(empresa);
            console.log(buscoPorNome)
            if (buscoPorNome.status == 200)
                setEmpresas(buscoPorNome.data);
        } catch (error) {
            console.log(error);
        }
    }

    const buscarPorId = async (id: number) => {
        try {
            const buscaPorId = await empresa_service.buscaPorId(id);
            if (buscaPorId.status == 200)
                setEmpresas([buscaPorId.data]);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Pagina>
            <div className="py-3 px-4 font-bold flex pb-5">
                <h3>Cadastro de empresa</h3>
            </div>

            <div className="w-full pb-6 px-4">
                <Group>
                    <TextInput disabled={isLoading}
                        value={empresa}
                        onChange={(e: { target: { value: SetStateAction<string> } }) =>
                            setEmpresa(e.target.value)
                        }
                        placeholder="Informe um nome para busca..." />

                    <IconButton disabled={isLoading} icon={isLoading ? Spinner : SearchIcon} onClick={buscarPorNome} />
                </Group>
            </div>

            <div className="px-4">
                <Table>
                    <Table.Head>
                        <Table.SearchHeaderCell />
                        <Table.TextHeaderCell>Razão Social</Table.TextHeaderCell>
                    </Table.Head>
                    <Table.Body height={240}>
                        {empresas.length === 0 ? (
                            <Table.Row>
                                <Table.Cell>Nenhuma empresa localizada!</Table.Cell>
                            </Table.Row>
                        ) : (
                            empresas.map((empresa) => (
                                <Table.Row key={empresa.id} isSelectable onSelect={() => buscarPorId(empresa.id)}>
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
