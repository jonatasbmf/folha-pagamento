import { api_back } from "@/service/api/api";

const inserir = async () => {
    // POST http://localhost:4001/inss
    return await api_back.post('inss');
}

const atualizar = async () => {
    // PATCH http://localhost:4001/inss/7

}

const deletar = async (id: number) => {
    // DELETE http://localhost:4001/inss/7

}

const listarTodos = async () => {
    // GET http://localhost:4001/inss

}

const buscarPorId = async (id: number) => {
    // GET http://localhost:4001/inss/buscar/id/3

}

const buscarPorAno = async (ano: number) => {
    // GET http://localhost:4001/inss/buscar/ano?ano=2024

}

const buscarPorAnoDistinto = async (ano: number) => {
    // GET http://localhost:4001/inss/anos-distintos

}