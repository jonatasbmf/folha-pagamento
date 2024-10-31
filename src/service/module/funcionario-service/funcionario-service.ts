import { api_back } from "@/service/api/api";

const buscarPorNome = async (nome: string) => {
    const params = new URLSearchParams({ nome: nome }).toString();
    return await api_back.get(`/funcionario?${params}`);
}

const buscaPorId = async (id: number) => {
    return await api_back.get(`/funcionario/${id}`)
}

const listarTodos = async () => {
    return await api_back.get('/funcionario');
}

const salvarNovo = async (funcionario: Funcionario) => {
    return await api_back.post('/funcionario', funcionario)
}

const atualizar = async (funcionario: Funcionario) => {
    await api_back.patch(`/funcionario/${funcionario.id}`, funcionario)
}

const apagar = async (id: number) => {
    await api_back.delete(`/funcionario/${id}`);
}

const funcionario_service = {
    buscaPorId,
    listarTodos,
    buscarPorNome,
    salvarNovo,
    atualizar,
    apagar,
}

export default funcionario_service;