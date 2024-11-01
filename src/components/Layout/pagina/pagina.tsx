"use client";
import LoginPage from "@/app/login/page";
import TokenValidator from "@/components/tokerValidador/tokerValidador";
import { useUserContext } from "@/context/usuarioContext";
import React from "react";
import { ToastContainer } from "react-toastify";
import BarraLateral from "../barraLateral/barraLateral";
import Cabecalho from "../cabecalho/cabecalho";
import Rodape from "../rodape/rodape";

const Pagina = React.memo((props: any) => {
    const { logado } = useUserContext();

    if (!logado) return <LoginPage />;

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
            <TokenValidator />
        </div>
    );
});

export default Pagina;
