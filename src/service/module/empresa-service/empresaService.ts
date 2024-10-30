import { api_back } from "@/service/api/api";

const buscarPorNome = async (nome: string) => {
    const params = new URLSearchParams({ nome: nome }).toString();
    return await api_back.get(`/empresa?${params}`);
}

const buscaPorId = async (id: number) => {
    return await api_back.get(`/empresa/${id}`)
}

const listarTodas = async () => {
    return await api_back.get('/empresa');
}

const salvarNovaEmpresa = async (empresa: Empresa) => {
    return await api_back.post('/empresa', empresa)
}

const empresa_service = {
    buscaPorId,
    listarTodas,
    buscarPorNome,
    salvarNovaEmpresa
}

export default empresa_service;