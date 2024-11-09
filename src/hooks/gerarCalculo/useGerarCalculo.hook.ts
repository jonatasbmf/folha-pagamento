import gerarCalculoService from "@/service/module/gerarCalculoService/gerarCalculo.service";
import { useState } from "react";
import { toast } from "react-toastify";

const useGerarCalculo = () => {
    const [funcionarioId, setFuncionarioId] = useState(0);
    const [folhaPagamento, setFolhaPagamento] = useState<FolhaPagamento>()

    const gerarComBaseNoId = async () => {
        if (funcionarioId === 0) {
            toast.error('Selecione um funcionário!');
            return;
        }
        const resultado = await gerarCalculoService.gerarCalculo(funcionarioId);
        setFolhaPagamento(resultado)
    }

    return {
        funcionarioId,
        setFuncionarioId,
        gerarComBaseNoId,
        folhaPagamento,
        setFolhaPagamento
    }
};

export default useGerarCalculo;