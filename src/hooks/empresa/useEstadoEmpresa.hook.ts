import { useState } from "react";

export const useEstadoEmpresa = () => {
    const [id, setId] = useState(0);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [razaoSocial, setRazaoSocial] = useState("");

    return {
        id, setId,
        nome, setNome,
        email, setEmail,
        razaoSocial, setRazaoSocial
    }
}