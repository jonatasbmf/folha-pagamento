import { api_back } from "@/service/api/api";

interface RetornoApi {
    statusCode: number;
    resultado: any;
}

const salvar = async (permissao: Permissao): Promise<RetornoApi> => {
    var result = await api_back.post('/permissao', permissao);
    return {
        statusCode: result.status,
        resultado: result.data
    }
}

const atualizar = async (permissao: Permissao): Promise<RetornoApi> => {
    var result = (await api_back.patch(`/permissao/${permissao.id}`, permissao));
    return {
        statusCode: result.status,
        resultado: result.data
    }
}

const exluir = async (id: number): Promise<void> => {
    await api_back.delete(`/permissao/${id}`);
}

const obterPorNome = async (nome: string): Promise<RetornoApi> => {
    var result = await api_back.get(`/permissao/buscar/${nome}`);
    return {
        statusCode: result.status,
        resultado: result.data
    }
}

const listarTodos = async (): Promise<RetornoApi> => {
    var result = (await api_back.get('/permissao'));
    return {
        statusCode: result.status,
        resultado: result.data
    }
}


const permissaoService = {
    salvar,
    atualizar,
    exluir,
    obterPorNome,
    listarTodos,
}

export default permissaoService;