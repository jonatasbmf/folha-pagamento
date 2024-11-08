'use client'

import usePermissao from "@/hooks/permiisao/usePermissao.hook";
import { Checkbox, Pane, Text } from "evergreen-ui";
import { useEffect, useState } from "react";

const SelecaoPermissao = () => {
    const [permissoesSelecionadas, setPermissoesSelecionadas] = useState<number[]>([])
    const { listarTodas, permissoes } = usePermissao();

    useEffect(() => {
        listarTodas();
    }, []);

    const handleCheckboxChange = (id: number) => {
        setPermissoesSelecionadas((prev) =>
            prev.includes(id) ? prev.filter((permissaoId) => permissaoId !== id) : [...prev, id]
        );
    };

    return (
        <Pane className="shadow-md" marginTop={10} padding={16} background="tint2" borderRadius={3} boxShadow={2}>
            <Text>Selecione as permissões associadas a esse Grupo:</Text>
            {
                permissoes.length === 0 ? (
                    <Text>Favor cadastrar permissões, nenhuma disponível para seleção!</Text>
                ) : (
                    <div className="flex flex-1 gap-3 mt-3 flex-wrap" >
                        {permissoes.map((permissao) =>
                            <div className="border rounded-md h-5 py-4 flex  justify-center items-center" style={{ width: '30%' }} key={permissao.id}>
                                <Checkbox
                                    label={permissao.nome}
                                    checked={permissoesSelecionadas.includes(permissao.id!)}
                                    onChange={() => handleCheckboxChange(permissao.id!)}
                                />
                            </div>
                        )}

                    </div>
                )
            }
        </Pane>
    );
}

export default SelecaoPermissao;