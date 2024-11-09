import { api_back } from "@/service/api/api";

const gerarCalculo = async (id: number): Promise<FolhaPagamento> => {
    const result = await api_back.get(`/folha-pagamento/${id}`);
    if (result.status === 200) {
        return result.data;
    }
    else {
        throw "Não foi possivel gerar o calculo.";
    }
}

const gerarCalculoService = {
    gerarCalculo
}

export default gerarCalculoService;