import { useState } from "react";
import { toast } from "react-toastify";

const useUsuario = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [termo, setTermo] = useState('');

    const salvar = () => {
        var novoUsuario: Usuario = {
            nome, email, senha
        }

        if (!validarUsuario(nome, email, senha)) {
            toast.error('[validacao] Não passou pela validação.');
            return;
        }

        try {

        } catch (error) {
            console.error(error);
            toast.error('[catch] Não foi possivel gravar usuário, verifique os logs.')
        }

    }

    const atualizar = () => { }
    const excluir = () => { }
    const buscarPorEmail = () => { }
    const buscarPorNome = () => { }
    const listarTodos = () => { }
    const limparFormulario = () => { }
    const validarUsuario = (nome: string, email: string, senha: string): boolean => {
        return true;
    }

    return {

    }
}
export default useUsuario;