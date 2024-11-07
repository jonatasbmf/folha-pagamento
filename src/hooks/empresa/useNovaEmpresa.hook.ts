import empresa_service from "@/service/module/empresaService/empresa.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEstadoEmpresa } from "./useEstadoEmpresa.hook";
import { verificarValidadeFormulario } from "./utils/validacaoFormulario";

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
            razaoSocial: razaoSocial,
            email: email
        }

        try {
            setLoading(true)
            await empresa_service.salvarNovaEmpresa(novaEmpresa);
            toast.success(`Empresa salva com sucesso!`);
            voltarPaginaAnterior();
        } catch (error) {
            console.log(error)
            toast.error(`[catch] Erro ao tentar gravar Empresa!`)
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