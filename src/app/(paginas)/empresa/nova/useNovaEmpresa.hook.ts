import empresa_service from "@/service/module/empresa-service/empresaService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useNovaEmpresa = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [razaoSocial, setRazaoSocial] = useState("");
    const [loading, setLoading] = useState(false);

    const rota = useRouter();

    const limparFormCadastro = () => {
        setRazaoSocial("");
        setNome("");
    }

    const salvarNovaEmpresa = async () => {
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