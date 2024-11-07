import { api_back } from "@/service/api/api";

const salvar = async (permissao: Permissao): Promise<Permissao> => {
    return await api_back.post('/permissao', permissao);
}

const atualizar = async (permissao: Permissao): Promise<Permissao> => {
    return await api_back.patch(`/permissao/${permissao.id}`, permissao);
}

const exluir = async (id: number): Promise<void> => {
    await api_back.delete(`/permissao/${id}`);
}

const obterPorNome = async (nome: string): Promise<Permissao[]> => {
    return await api_back.get(`/permissao/buscar/nome?nome=${nome}`);
}

const listarTodos = async (): Promise<Permissao[]> => {
    return await api_back.get('/permissao');
}


const permissaoService = {
    salvar,
    atualizar,
    exluir,
    obterPorNome,
    listarTodos,
}

export default permissaoService;