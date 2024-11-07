import { useState } from "react";

const usePermissao = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [permissoes, setPermissoes] = useState<Permissao[]>([]);
    const [permissao, setPermissao] = useState<Permissao>();
    const [modalFormularioAberto, setModalFormularioAberto] = useState(false);

    const limparFormulario = () => {
        setId(0);
        setNome('');
        setDescricao('');
    }

    const salvar = () => {


    }

    return {
        id, setId,
        nome, setNome,
        descricao, setDescricao,
        permissoes, setPermissoes,
        permissao, setPermissao,
        modalFormularioAberto, setModalFormularioAberto,
        limparFormulario,
        salvar,

    }
}

export default usePermissao;