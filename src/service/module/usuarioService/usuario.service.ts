import { api_back } from "@/service/api/api";

const usuarioService = () => {
    const salvar = async (usario: Usuario): Promise<Usuario> => {
        return api_back.post('/usuario', usario);
    }

    const atualizar = async (usuario: Usuario): Promise<Usuario> => {
        return api_back.patch(`/usuario/${usuario.id}`, usuario);
    }

    const listarTodos = async (): Promise<Usuario[]> => {
        return api_back.get('/usuario');
    }

    const buscarPorNome = async (nome: string): Promise<Usuario[]> => {
        return api_back.get(`/usuario/buscar/${nome}`)
    }

    const excluir = async (id: number): Promise<void> => {
        return api_back.delete(`/usuario/${id}`)
    }

    return {
        salvar,
        atualizar,
        listarTodos,
        buscarPorNome,
        excluir
    }
}

export default usuarioService;