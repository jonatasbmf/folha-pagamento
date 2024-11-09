import { converterFloatParaMoedaString, converterMoedaStringParaFloat } from "@/helpers/conversorMoeda";
import funcionario_service from "@/service/module/funcionarioService/funcionario.service";
import { useState } from "react";
import { toast } from "react-toastify";
import listarTodasEmpresas from "../empresa/utils/listarTodasEmpresas";
import { useNavegacao } from "../useNavegacao.hook";
import { validarFuncionario } from "./utils/validacaoFuncionario";

export const useFuncionario = () => {
    const [id, setId] = useState<number>(0);
    const [nome, setNome] = useState<string>('');
    const [salario, setSalario] = useState<number>(0);
    const [salarioString, setSalarioString] = useState<string>('');
    const [empresaId, setEmpresaId] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
    const [funcionario, setFuncionario] = useState<Funcionario>();
    const [termo, setTermo] = useState<string>('');
    const [empresas, setEmpresas] = useState<Empresa[]>([])

    const { voltarPaginaAnterior } = useNavegacao();

    const salvar = async () => {
        const novoFuncionario = {
            nome,
            salario: converterMoedaStringParaFloat(salarioString),
            empresaId
        }

        if (!validarFuncionario(novoFuncionario.nome, novoFuncionario.salario, novoFuncionario.empresaId)) {
            toast.error("Não foi possível salvar um novo funcionário");
            return;
        }

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
            salario: converterMoedaStringParaFloat(salarioString),
            empresaId
        }

        if (!validarFuncionario(atualizarFuncionario.nome, atualizarFuncionario.salario, atualizarFuncionario.empresaId)) {
            toast.error("Não foi possível salvar um novo funcionário");
            return;
        }

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

    const apagar = async (id: number) => {
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

    const listarEmpresas = async () => {
        try {
            setLoading(true);

            const empresasResponse = await listarTodasEmpresas();
            if (empresasResponse === undefined)
                toast.info("Não foi possivel listar as empresas.")

            setEmpresas(empresasResponse!);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);

        }
    }

    const limparFormulario = () => {
        setNome("")
        setSalario(0);
        setEmpresaId(0);
    }

    const buscarPorId = async (id: number) => {
        try {
            setLoading(true);
            const funcionarioResponse = await funcionario_service.buscaPorId(id);
            listarEmpresas();

            if (funcionarioResponse.status !== 200) {
                toast.error("Nâo foi possivel buscar funcionário.")
            }
            const funcionario = funcionarioResponse.data;
            setNome(funcionario.nome);
            setId(funcionario.id);
            setEmpresaId(funcionario.empresaId);
            setSalarioString(converterFloatParaMoedaString(funcionario.salario));
        } catch (error) {
            console.error(error);
            toast.error("Nâo foi possivel buscar funcionário.")
        }
        finally {
            setLoading(false);
        }
    }

    return {
        id, setId,
        nome, setNome,
        salario, setSalario,
        salarioString, setSalarioString,
        empresaId, setEmpresaId,
        funcionarios, setFuncionarios,
        termo, setTermo,
        loading,
        salvar,
        atualizar,
        apagar,
        listarTodos,
        buscarPorNome,
        listarEmpresas,
        empresas,
        limparFormulario,
        buscarPorId,
        funcionario, setFuncionario
    }
}