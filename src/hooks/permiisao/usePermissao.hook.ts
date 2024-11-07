import permissaoService from "@/service/module/permissaoService/permissao.service";
import { useState } from "react";
import { toast } from "react-toastify";
import validarPermissao from "./utils/validarPermissao";

const usePermissao = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [termo, setTermo] = useState('');
    const [permissoes, setPermissoes] = useState<Permissao[]>([]);
    const [permissao, setPermissao] = useState<Permissao>();
    const [loading, setLoading] = useState(false);

    const limparFormulario = () => {
        setId(0);
        setNome('');
        setDescricao('');
    }

    const salvar = async () => {
        const novaPermissao: Permissao = {
            nome,
            descricao
        }

        if (!validarPermissao(nome, descricao)) {
            toast.error('[validacao] Verifique novamente os dados do formulário!');
            return;
        }

        try {
            setLoading(true);
            await permissaoService.salvar(novaPermissao);
            toast.success('Permissão salva com sucesso!');
        } catch (error) {
            console.error(error);
            toast.error('[catch] Erro na gravação da permissão!');
        } finally {
            setLoading(false);
        }
    }

    const atualizar = async () => {
        const permissaoAtualizada = {
            id,
            nome,
            descricao
        }

        if (!validarPermissao(nome, descricao)) {
            toast.error('[validacao] Verifique novamente os dados do formulário!');
            return;
        }

        try {
            setLoading(true);
            await permissaoService.atualizar(permissaoAtualizada);
            toast.success('Permissão atualizada com sucesso!');
        } catch (error) {
            console.error(error);
            toast.error('[catch] Não foi possivel gravar Permissão, avalie o log.')
        } finally {
            setLoading(false);
        }
    }

    const excluir = async (id: number) => {
        try {
            setLoading(true);
            await permissaoService.exluir(id);
            toast.warn('Permissão excluida com sucesso!');
        } catch (error) {
            console.error(error);
            toast.error('[catch] Não foi possivel excluir permissão, verifique o log');
        } finally {
            setLoading(false);
        }
    }

    const obterPorNome = async () => {
        try {
            setLoading(true);
            const permissoesResult = await permissaoService.obterPorNome(termo);

            if (permissoesResult.statusCode === 200)
                setPermissoes(permissoesResult.resultado);
            else
                toast.warn(`Não encontramos permissão com termo informado: ${termo}`);

        } catch (error) {
            console.error(error);
            toast.error('[catch] Não foi possivel excluir permissão, verifique o log');
        } finally {
            setLoading(false);
        }
    }

    const listarTodas = async () => {
        try {
            setLoading(true);

            const permissoesResult = await permissaoService.listarTodos();
            if (permissoesResult.statusCode === 200)
                setPermissoes(permissoesResult.resultado);
            else
                toast.warn(`Não encontramos permissão com termo informado: ${nome}`);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return {
        id, setId,
        nome, setNome,
        descricao, setDescricao,
        termo, setTermo,
        permissoes, setPermissoes,
        permissao, setPermissao,
        loading,
        limparFormulario,
        salvar,
        atualizar,
        excluir,
        obterPorNome,
        listarTodas
    }
}

export default usePermissao;