import { api_back } from "../api/api";

const login = async (email: string, senha: string) => {
    return await api_back.post('/autenticacao/login', { email, senha });
}

const logout = async (email: string) => {
    const params = { email };

    return await api_back.post('/autenteicacao/logout', { params });
}

const login_service = {
    login,
    logout
}

export default login_service;