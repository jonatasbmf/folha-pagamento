"use client";
import { MenuProvider } from "@/context/menuContext";
import { UserProvider, useUserContext } from "@/context/usuarioContext";
import React, { useMemo } from "react";
import BarraLateral from "../barraLateral/barraLateral";
import Cabecalho from "../cabecalho/cabecalho";
import Rodape from "../rodape/rodape";

const PaginaInterna = React.memo((props: any) => {
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
                </main>
            </div>
            {rodapeMemo}
        </div>
    );
});

const Pagina = (props: any) => {
    return (
        <UserProvider>
            <MenuProvider>
                <PaginaInterna {...props} />
            </MenuProvider >
        </UserProvider>
    );
};

export default Pagina;