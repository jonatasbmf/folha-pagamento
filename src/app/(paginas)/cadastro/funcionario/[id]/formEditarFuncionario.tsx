'use client'
import Loading from "@/components/loading/loading";
import { useFuncionario } from "@/hooks/funcionario/useFuncionario.hook";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import FormFuncionario from "../formFuncionario";

export default function FormEditarFuncionario() {
    const {
        id,
        nome, setNome,
        salarioString, setSalarioString,
        empresaId, setEmpresaId,
        loading,
        atualizar,
        apagar,
        listarEmpresas,
        empresas,
        limparFormulario,
        buscarPorId,
        deducao, setDeducao
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
            {loading && <Loading />}
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
                deducao={deducao}
                setDeducao={setDeducao}
            />
        </>
    )
}