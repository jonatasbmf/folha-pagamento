import { useEffect } from "react";
import { useEditarEmpresa } from "../../../../hooks/empresa/useEditarEmpresa.hook";
import FormEmpresa from "../formEmpresa";

export function FormEditarEmpresa() {

    const { nome,
        razaoSocial,
        email,
        setNome,
        setRazaoSocial,
        setEmail,
        limparFormCadastro,
        pegarIdDaRota
    } = useEditarEmpresa();

    useEffect(() => {
        pegarIdDaRota

    }, []);
    alert(nome)
    return (
        <div>
            <FormEmpresa
                nome={nome}
                razaoSocial={razaoSocial}
                email={email}
                setNome={setNome}
                setRazaoSocial={setRazaoSocial}
                setEmail={setEmail}
                limparFormCadastro={limparFormCadastro}
            />
        </div>
    )
}