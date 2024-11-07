import { api_back } from "@/service/api/api";

const incluir = async (grupoUsuario: GrupoUsuario) => {
    return await api_back.post('/grupo-usuario', grupoUsuario);
}

const atualizar = async (grupoUsuario: GrupoUsuario) => {
    return await api_back.patch(`/grupo-usuario/${grupoUsuario.id}`, grupoUsuario);
}

const excluir = async (id: number) => {
    return await api_back.delete(`/grupo-usuario/${id}`);
}

const listarTodos = async () => {
    return await api_back.get('/grupo-usuario');
}

const buscarPorId = async (id: number) => {
    return await api_back.get(`/grupo-usuario/${id}`);
}

const buscarPorNome = async (nome: string) => {
    return await api_back.get(`/grupo-usuario/buscar/${nome}`);
}

const grupoUsuarioService = {
    incluir,
    atualizar,
    excluir,
    listarTodos,
    buscarPorId,
    buscarPorNome,
}

export default grupoUsuarioService;