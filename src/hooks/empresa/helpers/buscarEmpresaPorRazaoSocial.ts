import empresa_service from "@/service/module/empresaService/empresaService";

const buscarPorRazaoSocial = async (razaoSocial: string): Promise<Empresa[] | undefined> => {
    try {
        const buscarEmpresas = await empresa_service.buscarPorNome(razaoSocial);

        if (buscarEmpresas.status === 200)
            return buscarEmpresas.data;

    } catch (error) {
        console.error(error);
    }
}

export default buscarPorRazaoSocial;