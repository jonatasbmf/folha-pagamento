import { api_back } from "@/service/api/api";

const inserir = async (irrf: Irrf) => {
    // POST http://localhost:4001/irrf
    return await api_back.post('/irrf', irrf);
}

const atualizar = async (irrf: Irrf) => {
    // PATCH http://localhost:4001/irrf/7
    return await api_back.patch(`/irrf/${irrf.id}`, irrf);
}

const excluir = async (id: number) => {
    // DELETE http://localhost:4001/irrf/7
    return await api_back.delete(`/irrf/${id}`);
}

const listarTodos = async () => {
    // GET http://localhost:4001/irrf
    return await api_back.get(`/irrf`);
}

const buscarPorId = async (id: number) => {
    // GET http://localhost:4001/irrf/buscar/id/3
    return await api_back.get(`/irrf/buscar/id/${id}`);
}

const buscarPorAno = async (ano: number) => {
    // GET http://localhost:4001/irrf/buscar/ano?ano=2024
    return await api_back.get(`/irrf/buscar/ano?ano=${ano}`);
}

const buscarPorAnoDistinto = async () => {
    // GET http://localhost:4001/irrf/anos-distintos
    return await api_back.get(`/irrf/anos-distintos`);
}

const irrfService = {
    inserir,
    atualizar,
    excluir,
    listarTodos,
    buscarPorId,
    buscarPorAno,
    buscarPorAnoDistinto,
}

export default irrfService;