import { Inss } from "@/interface/Inss";
import { api_back } from "@/service/api/api";

const inserir = async (inss: Inss) => {
    // POST http://localhost:4001/inss
    return await api_back.post('/inss', inss);
}

const atualizar = async (inss: Inss) => {
    // PATCH http://localhost:4001/inss/7
    return await api_back.patch(`/inss/${inss.id}`, inss);
}

const deletar = async (id: number) => {
    // DELETE http://localhost:4001/inss/7
    return await api_back.delete(`/inss/${id}`);
}

const listarTodos = async () => {
    // GET http://localhost:4001/inss
    return await api_back.get(`/inss`);
}

const buscarPorId = async (id: number) => {
    // GET http://localhost:4001/inss/buscar/id/3
    return await api_back.get(`/inss/buscar/id/${id}`);
}

const buscarPorAno = async (ano: number) => {
    // GET http://localhost:4001/inss/buscar/ano?ano=2024
    return await api_back.get(`/inss/buscar/ano?ano=${ano}`);
}

const buscarPorAnoDistinto = async () => {
    // GET http://localhost:4001/inss/anos-distintos
    return await api_back.get(`/inss/anos-distintos`);
}