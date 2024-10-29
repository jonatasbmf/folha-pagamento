"use client"
import Pagina from "@/components/Layout/pagina/pagina";
import empresa_service from "@/service/empresa-service/empresaService";
import { Table, TextInputField } from "evergreen-ui";
import { SetStateAction, useEffect, useState } from "react";

export default function Page() {
    const [empresa, setEmpresa] = useState("");
    const [empresas, setEmpresas] = useState<Empresa[]>([]);

    useEffect(() => {
        const buscarPorNome = async () => {
            try {
                const buscoPorNome = await empresa_service.buscarPorNome(empresa)
                if (buscoPorNome.status == 200)
                    setEmpresas(buscoPorNome.data.json)
            } catch (error) {
                console.log(error)
            }
        }
        buscarPorNome();
    }, [empresa])

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

    return (
        <Pagina>
            <div className="py-3 font-bold flex pb-5">
                <h3>Cadastro de empresa</h3>
            </div>
            <TextInputField
                label="Busca por nome"
                description="Informe um nome para busca."
                placeholder="Informe um nome para busca."
                value={empresa}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                    setEmpresa(e.target.value)
                }
            />
            <div>
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
                                <Table.Row key={empresa.id} isSelectable onSelect={() => alert(empresa.nome)}>
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
