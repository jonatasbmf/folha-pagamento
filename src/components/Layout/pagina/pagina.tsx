"use client"
import { MenuProvider } from "@/context/menuContext";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import BarraLateral from "../barraLateral/barraLateral";
import Cabecalho from "../cabecalho/cabecalho";
import Rodape from "../rodape/rodape";

export default function Pagina(props: any) {
    const [logado, setLogado] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const authToken = localStorage.getItem('auth_token');
        if (authToken) {
            setLogado(true);
        } else {
            router.push('/login');
        }
    }, [router]);

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
