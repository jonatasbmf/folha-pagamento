import empresa_service from "@/service/module/empresa-service/empresaService";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useEstadoEmpresa } from "./useEstadoEmpresa.hook";

export const useEditarEmpresa = () => {
    const [loading, setLoading] = useState(false);

    const {
        id, setId,
        nome, setNome,
        email, setEmail,
        razaoSocial, setRazaoSocial
    } = useEstadoEmpresa();

    const rota = useRouter();
    const router = usePathname();

    const limparFormCadastro = () => {
        setRazaoSocial("");
        setNome("");
    }

    const voltarPaginaAnterior = () => {
        rota.back();
    };

    const pegarIdDaRota = async () => {
        const rotaFracionada = router.split('/');
        const tamanho = rotaFracionada.length;
        const id = rotaFracionada[tamanho - 1]
        if (id !== undefined) {
            await buscarPorId(+id);
        }
    }

    const buscarPorId = async (id: number) => {
        setLoading(true)

        try {
            const empresaResponse = await empresa_service.buscaPorId(id);
            console.log(empresaResponse)
            if (empresaResponse.status == 200) {
                alert("entrou")
                setId(empresaResponse.data.id)
                setNome(empresaResponse.data.nome);
                setEmail(empresaResponse.data.email);
                setRazaoSocial(empresaResponse.data.razaoSocial)
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    return {
        buscarPorId,
        loading,
        voltarPaginaAnterior,
        nome,
        setNome,
        razaoSocial,
        setRazaoSocial,
        limparFormCadastro,
        email,
        setEmail,
        id,
        setId,
        pegarIdDaRota,
    }
}