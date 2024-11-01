'use client'
import { useFuncionario } from "@/hooks/funcionario/useFuncionario.hook";
import { useEffect } from "react";
import FormFuncionario from "../formFuncionario";

export function FormNovoFuncionario() {

    useEffect(() => {
        listarEmpresas();
    }, []);

    const {
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
        empresas,
        listarEmpresas,
        limparFormulario,
        buscarPorId,
        funcionario
    } = useFuncionario();

    return (
        <FormFuncionario
            nome={nome}
            setNome={setNome}
            salarioString={salarioString}
            setSalarioString={setSalarioString}
            empresaId={empresaId}
            setEmpresaId={setEmpresaId}
            salvar={salvar}
            limparFormulario={limparFormulario}
            empresas={empresas}
        />
    )
}