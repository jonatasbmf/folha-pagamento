import empresa_service from "@/service/module/empresa-service/empresaService";

const listarTodasEmpresas = async (): Promise<Empresa[] | undefined> => {
    try {
        const buscaEmpresas = await empresa_service.listarTodas();

        if (buscaEmpresas.status === 200) {
            return buscaEmpresas.data;
        }
    } catch (error) {
        console.error(error);
    }
}

export default listarTodasEmpresas;