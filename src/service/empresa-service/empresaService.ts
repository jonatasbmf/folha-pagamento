import { api_back } from "../api/api";

const buscarPorNome = async (nome: string) => {
    const params = new URLSearchParams({ nome: nome }).toString();
    return await api_back.post(`/empresa?${params}`);
}

const listarTodas = async () => {
    return await api_back.get('/empresa');
}

const empresa_service = {
    listarTodas,
    buscarPorNome
}

export default empresa_service;