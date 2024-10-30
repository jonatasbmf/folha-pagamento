import { useNovaEmpresa } from "../../../../hooks/empresa/useNovaEmpresa.hook";
import FormEmpresa from "../formEmpresa";

export function FormNovaEmpresa() {
    const { nome,
        razaoSocial,
        email,
        setNome,
        setRazaoSocial,
        setEmail,
        salvarNovaEmpresa,
        limparFormCadastro
    } = useNovaEmpresa()

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