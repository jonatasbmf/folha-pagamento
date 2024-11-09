'use client'
import InputTexto from "@/components/inputs/inputTexto";
import ConfirmacaoModal from "@/components/modal/confirmacaoModal";
import useGrupoUsuario from "@/hooks/grupoUsuario/useGrupoUsuario.hook";
import { Button, Pane, SelectField } from "evergreen-ui";
import { useEffect, useState } from "react";

interface FormUsuarioProps {
    id?: number;
    nome: string;
    email: string;
    senha: string;
    grupoUsuarioId?: number;
    setGrupoUsuarioId: (grupoUsuarioId: number) => void;
    setNome: (nome: string) => void;
    setEmail: (email: string) => void;
    setSenha: (senha: string) => void;
    salvar?: () => void;
    atualizar?: () => void;
    excluir?: (value: number) => void;
    limparFormulario: () => void;
}

const FormUsuario = (props: FormUsuarioProps) => {
    const {
        id, nome, email,
        senha, grupoUsuarioId, setNome,
        setEmail, setSenha, setGrupoUsuarioId,
        limparFormulario, salvar, atualizar, excluir
    } = props;

    const { listarTodos, grupoUsuarios } = useGrupoUsuario();
    const [modalAberto, setModalAberto] = useState(false);
    const [senhaConmfirmacao, setSenhaConfirmacao] = useState<string>('');
    const [senhaInvalida, setSenhaInvalida] = useState<boolean>(false);

    useEffect(() => {
        listarTodos();
    }, []);

    useEffect(() => {
        if ((!id || id == 0) && senhaConmfirmacao !== senha) {
            setSenhaInvalida(true);
        }
        else {
            setSenhaInvalida(false);
        }
    }, [senhaConmfirmacao, id]);

    return (
        <div>
            <ConfirmacaoModal
                textoModal="Confirma exclusão do Usuário?"
                tituloModal="Excluir usuário"
                modalAberto={modalAberto}
                onClose={() => setModalAberto(false)}
                onConfirm={() => {
                    if (excluir && id) {
                        excluir(id);
                        setModalAberto(false);
                    }
                }} />
            <div className="flex flex-col p-4">
                <Pane className="shadow-md" padding={16} background="tint2" borderRadius={3}>
                    <input style={{ display: 'none' }} type="number" disabled value={id} />
                    <InputTexto
                        label="Nome"
                        placeholder="Informe nome do usuairo."
                        validationMessage="Campo não pode ficar vazio"
                        value={nome}
                        setValue={setNome} />
                    <InputTexto
                        email={true}
                        label="E-mail"
                        placeholder="Informe e-mail do usuairo."
                        validationMessage="Campo não pode ficar vazio"
                        value={email}
                        required
                        setValue={setEmail} />
                    {id !== undefined && id > 0 ? null : (
                        <>
                            <InputTexto
                                password={true}
                                label="Senha"
                                placeholder="Senha deverá conter 1 caractere maiúsculo, 1 caractere especial, 1 numero e no minimo 6 caracteres de comprimento."
                                validationMessage="Campo não pode ficar vazio"
                                value={senha}
                                required
                                setValue={setSenha} />
                            <InputTexto
                                password={true}
                                label="Confirme a senha"
                                placeholder="Senha deverá conter 1 caractere maiúsculo, 1 caractere especial, 1 numero e no minimo 6 caracteres de comprimento."
                                validationMessage="Campo não pode ficar vazio"
                                value={senhaConmfirmacao}
                                required
                                setValue={setSenhaConfirmacao} />
                        </>

                    )}
                    <SelectField
                        label="Grupo de Usuário"
                        required
                        value={grupoUsuarioId}
                        onChange={e => setGrupoUsuarioId(+e.target.value)}
                    >
                        <option value='0' >
                            Selecione uma empresa
                        </option>
                        {grupoUsuarios ? grupoUsuarios.map(
                            (grupoUsuario) => {
                                return (<option key={grupoUsuario.id} value={grupoUsuario.id} >
                                    {grupoUsuario.nome}
                                </option>)
                            }
                        ) : null}
                    </SelectField>
                </Pane>

                <Pane className="shadow-md" marginTop={10} padding={16} background="tint2" borderRadius={3}>
                    <div className="flex justify-end gap-2">
                        <Button
                            disabled={senhaInvalida}
                            marginRight={16}
                            onClick={id ? atualizar : salvar}
                            intent="success"
                        >
                            Salvar
                        </Button>
                        <Button
                            marginRight={16}
                            onClick={limparFormulario}
                            intent="none">
                            Limpar
                        </Button>
                        {id ? (<Button
                            marginRight={16}
                            onClick={id ? () => setModalAberto(true) : undefined}
                            intent="danger">
                            Excluir
                        </Button>) : null}
                    </div>
                </Pane>
            </div>
        </div>
    );
}
export default FormUsuario;