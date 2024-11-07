"use client";
import LoginPage from "@/app/login/page";
import validarToken from "@/components/tokerValidador/utils/validarToken";
import { useUserContext } from "@/context/usuarioContext";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BarraLateral from "../barraLateral/barraLateral";
import Cabecalho from "../cabecalho/cabecalho";
import Rodape from "../rodape/rodape";

const Pagina = ((props: any) => {
    const { logado, setLogado } = useUserContext();

    const path = usePathname();

    useEffect(() => {
        usuarioLogado();
    }, [path]);

    const usuarioLogado = async () => {
        const usuarioLogado = await validarToken();
        if (!usuarioLogado)
            setLogado(false);
        else
            setLogado(true);
    }

    if (!logado) return (<LoginPage />);

    return (
        <div className="flex flex-col h-screen max-h-screen">
            <Cabecalho />
            <div className="flex flex-1">
                <BarraLateral />
                <main className="bg-gray-200 p-2 flex-1">
                    {props.children}
                    <ToastContainer />
                </main>
            </div>
            <Rodape />
        </div>
    );
});

export default Pagina;
