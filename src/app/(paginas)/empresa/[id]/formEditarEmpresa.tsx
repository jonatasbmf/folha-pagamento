import Loading from "@/components/loading/loading";
import { useEffect } from "react";
import { useEditarEmpresa } from "../../../../hooks/empresa/useEditarEmpresa.hook";
import FormEmpresa from "../formEmpresa";

export function FormEditarEmpresa() {

    const {
        loading,
        id,
        nome,
        razaoSocial,
        email,
        setNome,
        setRazaoSocial,
        setEmail,
        limparFormCadastro,
        pegarIdDaRota,
        atualizarEmpresa,
        apagarEmpresa
    } = useEditarEmpresa();

    useEffect(() => {
        pegarIdDaRota();
    }, []);

    return (
        <div>
            {loading && <Loading />}
            <FormEmpresa
                id={id}
                nome={nome}
                razaoSocial={razaoSocial}
                email={email}
                setNome={setNome}
                setRazaoSocial={setRazaoSocial}
                setEmail={setEmail}
                limparFormCadastro={limparFormCadastro}
                atualizarEmpresa={atualizarEmpresa}
                apagarEmpresa={apagarEmpresa}
            />
        </div>
    )
}