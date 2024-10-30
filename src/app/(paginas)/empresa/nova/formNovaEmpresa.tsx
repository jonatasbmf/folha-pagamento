import FormEmpresa from "../formEmpresa";
import { useNovaEmpresa } from "./useNovaEmpresa.hook";

export function FormNovaEmpresa() {
    const { nome,
        razaoSocial,
        email,
        setNome,
        setRazaoSocial,
        setEmail,
        salvarNovaEmpresa,
        limparFormCadastro } = useNovaEmpresa()

    return (
        <div>
            <FormEmpresa
                nome={nome}
                razaoSocial={razaoSocial}
                email={email}
                setNome={setNome}
                setRazaoSocial={setRazaoSocial}
                setEmail={setEmail}
                salvarNovaEmpresa={salvarNovaEmpresa}
                limparFormCadastro={limparFormCadastro}
            />
        </div>
    )
}