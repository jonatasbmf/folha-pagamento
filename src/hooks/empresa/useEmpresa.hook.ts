import { useState } from "react";
import { toast } from "react-toastify";
import buscarPorRazaoSocial from "./utils/buscarEmpresaPorRazaoSocial";
import listarTodasEmpresas from "./utils/listarTodasEmpresas";

export const useEmpresa = () => {
    const [empresa, setEmpresa] = useState("");
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [loading, setLoading] = useState(false);

    const listarEmpresas = async (): Promise<void> => {
        setLoading(true)
        try {
            const resposta = await listarTodasEmpresas();

            if (resposta === undefined)
                toast.info("Não foi possivel listar todas empresas.")

            setEmpresas(resposta!);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    };

    const buscarPorNome = async () => {
        setLoading(true)
        try {
            const resposta = await buscarPorRazaoSocial(empresa);

            if (resposta === undefined)
                toast.info("Não foi possivel localizar a empresa informada.");

            setEmpresas(resposta!);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    return {
        empresas,
        empresa,
        setEmpresa,
        buscarPorNome,
        loading,
        listarEmpresas
    }
}