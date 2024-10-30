import empresa_service from "@/service/module/empresa-service/empresaService";
import { toaster } from "evergreen-ui";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const useEditarEmpresa = () => {
    const [loading, setLoading] = useState(false);

    const [nome, setNome] = useState<string>("");
    const [id, setId] = useState<number>(0);
    const [razaoSocial, setRazaoSocial] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const rota = useRouter();
    const router = usePathname();

    const limparFormCadastro = () => {
        setRazaoSocial("");
        setNome("");
        setEmail("");
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

            if (empresaResponse.status == 200) {
                setId(empresaResponse.data.id)
                setNome(empresaResponse.data.nome);
                setEmail(empresaResponse.data.email);
                setRazaoSocial(empresaResponse.data.razao_social)
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const atualizarEmpresa = async () => {

        if (!formularioValido()) {
            toaster.danger("Existem campos que não foram preenchidos")
            return;
        }

        var empresa: Empresa = {
            id: id,
            nome: nome,
            razao_social: razaoSocial,
            email: email
        }

        try {
            setLoading(true);
            await empresa_service.atualizarEmpresa(empresa);
            toaster.success("Atualizado com sucesso!")
            voltarPaginaAnterior();
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }

    const formularioValido = (): boolean => {
        if (!nome || nome.trim().length < 3) return false;
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
        if (!razaoSocial || razaoSocial.trim().length < 3) return false;
        return true;
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
        atualizarEmpresa,
        formularioValido
    }
}