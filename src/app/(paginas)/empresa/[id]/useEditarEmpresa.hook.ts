import empresa_service from "@/service/module/empresa-service/empresaService";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const useEditarEmpresa = () => {
    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [razaoSocial, setRazaoSocial] = useState("");

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
            const buscaPorId = await empresa_service.buscaPorId(id);
            if (buscaPorId.status == 200) {
                setNome(buscaPorId.data.nome);
                setEmail(buscaPorId.data.email);
                setRazaoSocial(buscaPorId.data.razaoSocial)
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
        pegarIdDaRota,
    }
}