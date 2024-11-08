'use client'

import usePermissao from "@/hooks/permiisao/usePermissao.hook";
import { Checkbox, Pane, Text } from "evergreen-ui";
import { Dispatch, SetStateAction, useEffect } from "react";

interface SelecaoPermissaoProps {
    permissoesSelecionadas: number[];
    setPermissoesSelecionadas: Dispatch<SetStateAction<number[]>>
}

const SelecaoPermissao = (props: SelecaoPermissaoProps) => {
    const { setPermissoesSelecionadas, permissoesSelecionadas } = props;
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
        <Pane className="shadow-md" marginTop={10} paddingY={16} background="tint2" borderRadius={3} boxShadow={2}>
            <Text>Selecione as permissões associadas a esse Grupo:</Text>
            {
                permissoes.length === 0 ? (
                    <Text>Favor cadastrar permissões, nenhuma disponível para seleção!</Text>
                ) : (
                    <div className="flex mt-3 flex-wrap" >
                        {permissoes.map((permissao) =>
                            <div className="flex w-4/12 h-5 px-2 py-4 items-center" key={permissao.id}>
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