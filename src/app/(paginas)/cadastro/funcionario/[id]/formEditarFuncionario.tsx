'use client'
import { useFuncionario } from "@/hooks/funcionario/useFuncionario.hook";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import FormFuncionario from "../formFuncionario";

export default function FormEditarFuncionario() {
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
        listarEmpresas,
        empresas,
        limparFormulario,
        buscarPorId,
        funcionario
    } = useFuncionario();

    const param = useParams<{ id: string }>()

    useEffect(() => {
        if (param.id != null || param.id != undefined) {
            buscarPorId(+param.id)
            listarEmpresas();
        }

    }, []);

    return (
        <>
            <FormFuncionario
                id={id}
                nome={nome}
                setNome={setNome}
                salarioString={salarioString}
                setSalarioString={setSalarioString}
                empresaId={empresaId}
                setEmpresaId={setEmpresaId}
                limparFormulario={limparFormulario}
                atualizar={atualizar}
                apagar={apagar}
                empresas={empresas}
            />
        </>
    )
}