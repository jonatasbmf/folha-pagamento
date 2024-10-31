import funcionario_service from "@/service/module/funcionario-service/funcionario-service";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavegacao } from "../useNavegacao.hook";
import { validarFuncionario } from "./helpers/validacaoFuncionario";

export const useFuncionario = () => {
    const [id, setId] = useState<number>(0);
    const [nome, setNome] = useState<string>('');
    const [salario, setSalario] = useState<number>(0);
    const [empresaId, setEmpresaId] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
    const [termo, setTermo] = useState<string>('');

    const { voltarPaginaAnterior } = useNavegacao();

    const salvar = async () => {
        const novoFuncionario = {
            nome,
            salario,
            empresaId
        }

        if (!validarFuncionario(nome, salario, empresaId))
            toast.error("Não foi possível salvar um novo funcionário");

        try {
            setLoading(true);
            await funcionario_service.salvarNovo(novoFuncionario);
            toast.success("Funcionário salvo com sucesso!")
            voltarPaginaAnterior();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const atualizar = async () => {
        const atualizarFuncionario = {
            id,
            nome,
            salario,
            empresaId
        }

        if (!validarFuncionario(nome, salario, empresaId))
            toast.error("Não foi possível salvar um novo funcionário");

        try {
            setLoading(true);
            await funcionario_service.atualizar(atualizarFuncionario);
            toast.success("Funcionário atualizado com sucesso!")
            voltarPaginaAnterior();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const apagar = async () => {
        try {
            setLoading(true);
            await funcionario_service.apagar(id);
            toast.warn("Funcionário foi excluido!")
            voltarPaginaAnterior();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const buscarPorNome = async (termo: string) => {
        try {
            setLoading(true);
            const funcionariosResponse = await funcionario_service.buscarPorNome(termo)
            if (funcionariosResponse.status == 200) {
                setFuncionarios(funcionariosResponse.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const listarTodos = async () => {
        try {
            setLoading(true);
            const funcionariosResponse = await funcionario_service.listarTodos()
            if (funcionariosResponse.status == 200) {
                setFuncionarios(funcionariosResponse.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return {
        id, setId,
        nome, setNome,
        salario, setSalario,
        empresaId, setEmpresaId,
        funcionarios, setFuncionarios,
        termo, setTermo,
        loading,
        salvar,
        atualizar,
        apagar,
        listarTodos,
        buscarPorNome,
    }
}