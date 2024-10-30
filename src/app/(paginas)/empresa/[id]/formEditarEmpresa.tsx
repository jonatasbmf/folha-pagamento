import FormEmpresa from "../formEmpresa";
import { useEditarEmpresa } from "./useEditarEmpresa.hook";

export function FormEditarEmpresa() {

    const { nome,
        razaoSocial,
        email,
        setNome,
        setRazaoSocial,
        setEmail,
        limparFormCadastro } = useEditarEmpresa();

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