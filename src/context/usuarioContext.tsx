"use client";
import jwtTokenServico from "@/service/jwt/jwtTokenServico";
import { useRouter } from 'next/navigation';
import { createContext, FC, useContext, useEffect, useState } from "react";

interface UserContextProps {
    logado: boolean;
    nome: string;
    email: string;
    setLogado: (logado: boolean) => void;
    setNome: (nome: string) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [logado, setLogado] = useState(false);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter();

    useEffect(() => {
        const authToken = localStorage.getItem('auth_token');
        if (authToken) {
            jwtTokenServico.validaToken();
            const usuario = jwtTokenServico.obterDadosUsuario();
            setLogado(true);
            setNome(usuario.nome || "");
            setEmail(usuario.email || "");
        } else {
            router.push('/login');
        }
    }, [router]);

    return (
        <UserContext.Provider value={{ logado, nome, email, setLogado, setNome }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("Contexto não criado!");
    return context;
};