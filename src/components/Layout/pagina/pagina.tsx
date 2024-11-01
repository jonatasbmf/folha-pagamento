"use client";
import { useUserContext } from "@/context/usuarioContext";
import React, { useMemo } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BarraLateral from "../barraLateral/barraLateral";
import Cabecalho from "../cabecalho/cabecalho";
import Rodape from "../rodape/rodape";

const Pagina = React.memo((props: any) => {
    const { logado } = useUserContext();

    if (!logado) return null;

    const cabecalhoMemo = useMemo(() => <Cabecalho />, []);
    const barraLateralMemo = useMemo(() => <BarraLateral />, []);
    const rodapeMemo = useMemo(() => <Rodape />, []);

    return (
        <div className="flex flex-col h-screen max-h-screen">
            {cabecalhoMemo}
            <div className="flex flex-1">
                {barraLateralMemo}
                <main className="bg-gray-200 p-2 flex-1">
                    {props.children}
                    <ToastContainer />
                </main>
            </div>
            {rodapeMemo}
        </div>
    );
});

export default Pagina;