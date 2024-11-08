import usuarioService from "@/service/module/usuarioService/usuario.service";
import { useState } from "react";
import { toast } from "react-toastify";

const useUsuario = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [grupoUsuarioId, setGrupoUsuarioId] = useState(0);
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [termo, setTermo] = useState('');
    const [loading, setLoading] = useState(false);

    const salvar = async () => {
        var novoUsuario: Usuario = {
            nome, email, senha
        }

        if (!validarUsuario(nome, email, senha)) {
            toast.error('[validacao] Não passou pela validação.');
            return;
        }

        try {
            await usuarioService.salvar(novoUsuario);
            limparFormulario();
            toast.success('Usuário gravado com sucesso.');
        } catch (error) {
            console.error(error);
            toast.error('[catch] Não foi possivel gravar usuário, verifique os logs.')
        }

    }

    const atualizar = async () => {
        var usuarioAtualizado: Usuario = {
            id, nome, email, senha
        }

        if (!validarUsuario(nome, email, senha)) {
            toast.error('[validacao] Não passou pela validação.');
            return;
        }

        try {
            await usuarioService.atualizar(usuarioAtualizado);
            limparFormulario();
            toast.success('Usuário atualizado com sucesso.');
        } catch (error) {
            console.error(error);
            toast.error('[catch] Não foi possivel atualizar usuário, verifique os logs.')
        }
    }

    const excluir = async (id: number) => {
        try {
            await usuarioService.excluir(id);
            limparFormulario();
            toast.warn('Usuário excluído com sucesso.');
        } catch (error) {
            console.error(error);
            toast.error('[catch] Não foi possivel excluir usuário, verifique os logs.')
        }
    }

    const buscarPorEmail = async () => {
        try {
            const resultado = await usuarioService.buscarPorEmail(email);
            setUsuarios(resultado);
        } catch (error) {
            console.error(error);
            toast.error('[catch] Não foi possivel encontrar usuário, verifique os logs.')
        }
    }

    const buscarPorNome = async () => {
        try {
            const resultado = await usuarioService.buscarPorNome(termo);
            setUsuarios(resultado);
        } catch (error) {
            console.error(error);
            toast.error('[catch] Não foi possivel encontrar usuário, verifique os logs.')
        }
    }

    const listarTodos = async () => {
        try {
            const resultado = await usuarioService.listarTodos();
            setUsuarios(resultado);
        } catch (error) {
            console.error(error);
            toast.error('[catch] Não foi possivel listar usuários, verifique os logs.')
        }
    }

    const limparFormulario = () => {
        setId(0);
        setNome('');
        setEmail('');
        setSenha('');
    }

    const validarUsuario = (nome: string, email: string, senha: string): boolean => {
        if (nome.length < 3) {
            toast.error('Nome deve ter no mínimo 3 caracteres.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Email inválido.');
            return false;
        }

        if (senha.length < 6) {
            toast.error('Senha deve ter no mínimo 6 caracteres.');
            return false;
        }

        const senhaRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).+$/;
        if (!senhaRegex.test(senha)) {
            toast.error('Senha deve conter pelo menos um caractere maiúsculo, um caractere especial e um número.');
            return false;
        }

        return true;
    }

    return {
        id, setId,
        nome, setNome,
        email, setEmail,
        senha, setSenha,
        usuarios,
        termo, setTermo,
        loading, setLoading,
        grupoUsuarioId, setGrupoUsuarioId,
        salvar,
        atualizar,
        excluir,
        buscarPorEmail,
        buscarPorNome,
        listarTodos,
        limparFormulario,

    }
}
export default useUsuario;