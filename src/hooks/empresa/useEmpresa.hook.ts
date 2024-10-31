import empresa_service from "@/service/module/empresa-service/empresaService";
import { useEffect, useState } from "react";

export const useEmpresa = () => {
    const [empresa, setEmpresa] = useState("");
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        listarEmpresas();
    }, []);


    const listarEmpresas = async () => {
        setLoading(true)
        try {
            const buscaEmpresas = await empresa_service.listarTodas();
            if (buscaEmpresas.status === 200) {
                setEmpresas(buscaEmpresas.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    };

    const buscarPorNome = async () => {
        setLoading(true)
        try {
            const buscoPorNome = await empresa_service.buscarPorNome(empresa);
            if (buscoPorNome.status == 200)
                setEmpresas(buscoPorNome.data);
        } catch (error) {
            console.log(error);
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
    }
}