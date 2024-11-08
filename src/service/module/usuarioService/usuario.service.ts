import { api_back } from "@/service/api/api";

const salvar = async (usuario: Usuario): Promise<Usuario> => {
    const response = await api_back.post('/usuario', usuario);
    if (response.status === 201) {
        return response.data;
    } else {
        throw new Error(`Erro ao salvar usuário: ${response.statusText}`);
    }
}

const atualizar = async (usuario: Usuario): Promise<Usuario> => {
    const response = await api_back.patch(`/usuario/${usuario.id}`, usuario);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`Erro ao atualizar usuário: ${response.statusText}`);
    }
}

const listarTodos = async (): Promise<Usuario[]> => {
    const response = await api_back.get('/usuario');
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`Erro ao listar usuários: ${response.statusText}`);
    }
}

const buscarPorNome = async (nome: string): Promise<Usuario[]> => {
    const response = await api_back.get(`/usuario/buscar/${nome}`);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`Erro ao buscar usuário por nome: ${response.statusText}`);
    }
}

const buscarPorEmail = async (email: string): Promise<Usuario[]> => {
    const response = await api_back.get(`/usuario/buscar/email/${email}`);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`Erro ao buscar usuário por email: ${response.statusText}`);
    }
}

const excluir = async (id: number): Promise<void> => {
    const response = await api_back.delete(`/usuario/${id}`);
    if (response.status === 200) {
        return;
    } else {
        throw new Error(`Erro ao excluir usuário: ${response.statusText}`);
    }
}

const usuarioService = {
    salvar,
    atualizar,
    listarTodos,
    buscarPorNome,
    buscarPorEmail,
    excluir
}

export default usuarioService;