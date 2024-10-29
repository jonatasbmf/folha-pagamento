"use client";
import { MenuProvider } from "@/context/menuContext";
import { UserProvider, useUserContext } from "@/context/usuarioContext";
import BarraLateral from "../barraLateral/barraLateral";
import Cabecalho from "../cabecalho/cabecalho";
import Rodape from "../rodape/rodape";

export default function Pagina(props: any) {
    return (
        <UserProvider>
            <PaginaInterna {...props} />
        </UserProvider>
    );
}

function PaginaInterna(props: any) {
    const { logado } = useUserContext();

    if (!logado) return null;

    return (
        <MenuProvider>
            <div className="flex flex-col h-screen max-h-screen">
                <Cabecalho />
                <div className="flex flex-1">
                    <BarraLateral />
                    <main className="bg-gray-200 p-2 flex-1">
                        {props.children}
                    </main>
                </div>
                <Rodape />
            </div>
        </MenuProvider>
    );
}