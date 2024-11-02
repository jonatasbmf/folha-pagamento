'use client'
import { useRouter } from "next/navigation";

export const useNavegacao = () => {
    const rota = useRouter();

    const voltarPaginaAnterior = () => {
        rota.back();
    };

    const irParaPagina = (endpoint: string) => {
        rota.push(endpoint);
    }

    return {
        voltarPaginaAnterior,
        irParaPagina
    };
};