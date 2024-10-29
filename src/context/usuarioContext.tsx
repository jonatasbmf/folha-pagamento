"use client"
import { createContext, FC, useContext, useState } from "react";

interface UsuarioContextProps {
    nome?: string;
    email?: string;
    setNome?: () => {};
    setEmail?: () => {};
}

const UsuarioContext = createContext<UsuarioContextProps>({});

export const UsuarioProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();

    return (
        <UsuarioContext.Provider value={{ nome, email }}>
            {children}
        </UsuarioContext.Provider>
    );
};

export const useUsuarioContext = () => {
    const context = useContext(UsuarioContext);
    if (!context) throw "Contexto não criado!";
    return context;
}