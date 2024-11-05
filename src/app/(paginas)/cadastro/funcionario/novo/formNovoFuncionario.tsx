'use client'
import Loading from "@/components/loading/loading";
import { useFuncionario } from "@/hooks/funcionario/useFuncionario.hook";
import { useEffect } from "react";
import FormFuncionario from "../formFuncionario";

export function FormNovoFuncionario() {

    useEffect(() => {
        listarEmpresas();
    }, []);

    const {
        nome, setNome,
        salarioString, setSalarioString,
        empresaId, setEmpresaId,
        loading,
        salvar,
        empresas,
        listarEmpresas,
        limparFormulario,
    } = useFuncionario();

    return (
        <>
            {loading && <Loading />}
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
        </>
    )
}