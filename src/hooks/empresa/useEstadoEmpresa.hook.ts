import { useState } from "react";

export const useEstadoEmpresa = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [razaoSocial, setRazaoSocial] = useState<string>('');

    return {
        id, setId,
        nome, setNome,
        email, setEmail,
        razaoSocial, setRazaoSocial
    }
}