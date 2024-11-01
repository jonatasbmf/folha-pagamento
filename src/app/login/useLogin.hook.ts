"use client";

import { useUserContext } from "@/context/usuarioContext";
import jwtTokenServico from "@/service/jwt/jwtTokenServico";
import login_service from "@/service/module/login-service/loginService";
import { useRouter } from 'next/navigation';
import { useState } from "react";

interface retornoApi {
    statusCode: number,
    message: string,
    data: any
}

export const useLogin = () => {
    const [erroLogin, setErroLogin] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { setLogado } = useUserContext();

    const login = async () => {
        try {
            const res = await login_service.login(email, password);
            const resposta: retornoApi = res.data;
            if (resposta.statusCode === 200) {
                jwtTokenServico.gravarToken(resposta.data.auth_token);
                setErroLogin(null);
                setLogado(true);
                router.push('/');
            } else {
                setErroLogin(resposta.message || "Erro ao tentar fazer login. Por favor, tente novamente.");
            }

            router.refresh();
        } catch (err) {
            setErroLogin("Usuário ou senha inválidos. Por favor, verifique suas credenciais.");
        }
    };

    return {
        login,
        email,
        setEmail,
        password,
        setPassword,
        erroLogin
    }
}