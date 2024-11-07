import empresa_service from "@/service/module/empresaService/empresa.service";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { verificarValidadeFormulario } from "./utils/validacaoFormulario";

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
                setRazaoSocial(empresaResponse.data.razaoSocial)
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const atualizarEmpresa = async () => {
        if (!verificarValidadeFormulario(nome, razaoSocial, email)) {
            toast.error("Preencha corretamente o formulário.")
            return;
        }
        const empresa: Empresa = {
            id: id,
            nome: nome,
            razaoSocial: razaoSocial,
            email: email
        }

        try {
            setLoading(true);
            await empresa_service.atualizarEmpresa(empresa);
            toast.success(`Salvo com sucesso! ${nome}`)
            voltarPaginaAnterior();
        } catch (error) {
            console.error(error);
            toast.error(`[catch] Erro ao atualizar a empresa!`)
        } finally {
            setLoading(false);
        }
    }

    const apagarEmpresa = async (id: number) => {
        try {
            setLoading(true)
            await empresa_service.apagarEmpresa(id);
            toast.warning(`Empresa apagada com sucesso! ${nome}`)
            voltarPaginaAnterior()
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
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
        atualizarEmpresa,
        apagarEmpresa,
    }
}