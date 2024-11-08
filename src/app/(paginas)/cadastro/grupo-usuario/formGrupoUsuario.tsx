import InputTexto from "@/components/inputs/inputTexto";
import ConfirmacaoModal from "@/components/modal/confirmacaoModal";
import { Button, Pane } from "evergreen-ui";
import { useState } from "react";
import SelecaoPermissao from "./selecaoPermissao";

type FormGrupoUsuarioProps = {
    id?: number;
    nome: string;
    setNome: (nome: string) => void;
    descricao: string;
    setDescricao: (descricao: string) => void;
    excluir?: (value: number) => void;
    salvar?: () => void;
    atualizar?: () => void;
    limparFormulario?: () => void;
}

const FormGrupoUsuario = (props: FormGrupoUsuarioProps) => {
    const { id, nome, setNome, descricao, setDescricao, excluir, salvar, atualizar, limparFormulario } = props;

    const [modalAberto, setModalAberto] = useState(false);

    return (
        <>
            <ConfirmacaoModal
                textoModal="Confirma exclusão do Grupo de usuário?"
                tituloModal="Excluir Grupo de usuário"
                modalAberto={modalAberto}
                onClose={() => setModalAberto(false)}
                onConfirm={() => {
                    if (excluir) {
                        excluir(id!);
                        setModalAberto(false);
                    }
                }}
            />
            <div className="flex flex-col p-4">
                <Pane className="shadow-md" padding={16} background="tint2" borderRadius={3}>
                    <input style={{ display: 'none' }} type="number" disabled value={id} />
                    <InputTexto
                        label="Nome"
                        placeholder="Informe nome do Grupo."
                        validationMessage="Campo não pode ficar vazio"
                        value={nome}
                        required
                        setValue={setNome}
                    />
                    <InputTexto
                        label="Descrição"
                        placeholder="Descreva o grupo e personas que devem usar o grupo."
                        validationMessage="Campo não pode ficar vazio"
                        value={descricao}
                        required
                        setValue={setDescricao}
                    />
                </Pane>

                <SelecaoPermissao />

                <Pane className="shadow-md" marginTop={10} padding={16} background="tint2" borderRadius={3}>
                    <div className="flex justify-end gap-2">
                        <Button marginRight={16}
                            onClick={id ? atualizar : salvar}
                            intent="success"
                        >
                            Salvar
                        </Button>
                        <Button marginRight={16}
                            onClick={limparFormulario}
                            intent="none">
                            Limpar
                        </Button>
                        {id ? (<Button marginRight={16}
                            onClick={id ? () => setModalAberto(true) : undefined}
                            intent="danger">
                            Excluir
                        </Button>) : null}
                    </div>
                </Pane>
            </div>
        </>
    );
}

export default FormGrupoUsuario;