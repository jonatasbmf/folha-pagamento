import empresa_service from "@/service/module/empresa-service/empresaService";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { verificarValidadeFormulario } from "./helpers/validacaoFormulario";
import { useEstadoEmpresa } from "./useEstadoEmpresa.hook";

export const useNovaEmpresa = () => {
    const [loading, setLoading] = useState(false);
    const rota = useRouter();

    const {
        nome, setNome,
        email, setEmail,
        razaoSocial, setRazaoSocial
    } = useEstadoEmpresa();

    const limparFormCadastro = () => {
        setRazaoSocial("");
        setNome("");
        setEmail("");
    }

    const salvarNovaEmpresa = async () => {

        if (!verificarValidadeFormulario(nome, razaoSocial, email)) {
            toast.error(`Preencha corretamente o formulário!`)
            return;
        }
        const novaEmpresa: Empresa = {
            nome: nome,
            razao_social: razaoSocial,
            email: email
        }

        try {
            setLoading(true)
            await empresa_service.salvarNovaEmpresa(novaEmpresa);

            voltarPaginaAnterior();
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const voltarPaginaAnterior = () => {
        rota.back();
    };


    return {
        loading,
        voltarPaginaAnterior,
        nome,
        setNome,
        razaoSocial,
        setRazaoSocial,
        limparFormCadastro,
        email,
        setEmail,
        salvarNovaEmpresa,
    }
}