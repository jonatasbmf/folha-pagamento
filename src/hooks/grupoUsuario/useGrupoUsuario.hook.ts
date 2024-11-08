import grupoUsuarioService from "@/service/module/grupoUsuario/grupoUsuario.service";

import { useState } from "react";
import { toast } from "react-toastify";
import validarGrupoUsuario from "./utils/validarGrupoUsuario";

export const useGrupoUsuario = () => {
    const [id, setId] = useState<number>(0);
    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [grupoUsuarios, setGrupoUsuarios] = useState<GrupoUsuario[]>([]);
    const [grupoUsuario, setGrupoUsuario] = useState<GrupoUsuario | null>(null);
    const [permissoes, setPermissoes] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);
    const [termo, setTermo] = useState<string>('');

    const listarTodos = async (): Promise<void> => {
        setLoading(true);
        try {
            const resposta = await grupoUsuarioService.listarTodos();
            if (resposta.status === 200) {
                setGrupoUsuarios(resposta.data);
            } else {
                toast.info("Não foi possível listar todos os grupos de usuários.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Erro ao listar grupos de usuários.");
        } finally {
            setLoading(false);
        }
    };

    const buscarPorNome = async (): Promise<void> => {
        setLoading(true);
        try {
            const resposta = await grupoUsuarioService.buscarPorNome(termo);
            if (resposta.status === 200) {
                setGrupoUsuarios(resposta.data);
            } else {
                toast.info("Não foi possível encontrar o grupo de usuários.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Erro ao buscar grupo de usuários.");
        } finally {
            setLoading(false);
        }
    };

    const salvar = async (): Promise<void> => {
        setLoading(true);
        try {
            const novoGrupoUsuario: GrupoUsuario = {
                nome: nome,
                descricao: descricao,
                permissoes: permissoes
            };
            console.log(novoGrupoUsuario)
            if (!validarGrupoUsuario(nome, descricao)) {
                toast.error('[validacao] Formulário inválido.');
                return;
            }

            await grupoUsuarioService.incluir(novoGrupoUsuario);
            toast.success("Grupo de usuário salvo com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao salvar grupo de usuário.");
        } finally {
            setLoading(false);
        }
    };

    const atualizar = async (): Promise<void> => {
        setLoading(true);
        try {
            const grupoUsuarioAtualizado: GrupoUsuario = {
                id: id,
                nome: nome,
                descricao: descricao,
                permissoes: permissoes
            };
            console.log(grupoUsuarioAtualizado)

            if (!validarGrupoUsuario(nome, descricao)) {
                toast.error('[validacao] Formulário inválido.');
                return;
            }

            await grupoUsuarioService.atualizar(grupoUsuarioAtualizado);
            toast.success("Grupo de usuário atualizado com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao atualizar grupo de usuário.");
        } finally {
            setLoading(false);
        }
    };

    const excluir = async (id: number): Promise<void> => {
        setLoading(true);
        try {
            await grupoUsuarioService.excluir(id);
            toast.warn("Grupo de usuário excluído com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("Erro ao excluir grupo de usuário.");
        } finally {
            setLoading(false);
        }
    };

    const limparFormulario = (): void => {
        setId(0);
        setNome('');
        setDescricao('');
    }

    return {
        id, setId,
        nome, setNome,
        descricao, setDescricao,
        grupoUsuarios,
        grupoUsuario,
        setGrupoUsuario,
        permissoes, setPermissoes,
        termo,
        setTermo,
        loading,
        listarTodos,
        buscarPorNome,
        salvar,
        atualizar,
        excluir,
        limparFormulario
    };
};

export default useGrupoUsuario;