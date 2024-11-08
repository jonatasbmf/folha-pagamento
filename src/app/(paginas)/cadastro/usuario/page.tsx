'use client';
import CabecalhoPaginaBuscaModalFormulario from "@/components/cabecalhoPagina/cabecalhoPaginaBuscaModalFormulario";
import Loading from "@/components/loading/loading";
import FormularioModal from "@/components/modal/formularioModal";
import useUsuario from "@/hooks/usuario/useUsuario.hook";
import { PlusIcon, Table } from "evergreen-ui";
import { useEffect, useState } from "react";
import FormUsuario from "./formUsuario";

export default function UsuarioPage() {
    const {
        id, setId,
        nome, setNome,
        email, setEmail,
        senha, setSenha,
        usuarios,
        termo, setTermo,
        loading,
        grupoUsuarioId, setGrupoUsuarioId,
        salvar,
        atualizar,
        excluir,
        buscarPorEmail,
        buscarPorNome,
        listarTodos,
        limparFormulario,
    } = useUsuario();

    useEffect(() => { listarTodos() }, []);

    const [modalFormularioAberto, setModalFormularioAberto] = useState(false);

    const salvarRegistro = async () => {
        await salvar();
        limparFormulario();
        setModalFormularioAberto(false);
        await listarTodos();
    }

    const carregarFormulario = (usuario: Usuario) => {
        setId(usuario.id!);
        setNome(usuario.nome);
        setEmail(usuario.email);
        setSenha(usuario.senha);
        setGrupoUsuarioId(usuario.grupoUsuarioId!);
        setModalFormularioAberto(true);
    }

    const excluirRegistro = async () => {
        await excluir(id);
        limparFormulario();
        setModalFormularioAberto(false);
        await listarTodos();
    }

    return (
        <div>
            {loading && <Loading />}

            <CabecalhoPaginaBuscaModalFormulario
                labelCabecalho={"Usuários"}
                acaoBotao={() => {
                    limparFormulario();
                    setModalFormularioAberto(true)
                }}
                iconeBotao={PlusIcon}
                labelBotao={"Novo Usuário"}
                placeHolderBusca={"Informe um nome e clique na lupa para buscar..."}
                termoBusca={termo}
                setTermoBusca={setTermo}
                funcaoDeBusca={buscarPorNome}
                loading={false}
            />

            <FormularioModal
                modalAberto={modalFormularioAberto}
                onClose={() => setModalFormularioAberto(false)}
                tituloModal={"Cadastro/Edição de Usuário"}
                formulario={<FormUsuario
                    id={id}
                    nome={nome}
                    email={email}
                    senha={senha}
                    setNome={setNome}
                    setEmail={setEmail}
                    setSenha={setSenha}
                    salvar={salvarRegistro}
                    atualizar={atualizar}
                    excluir={excluirRegistro}
                    limparFormulario={limparFormulario}
                    setGrupoUsuarioId={setGrupoUsuarioId}
                />}
            />

            <Table className="shadow-md" >
                <Table.Head>
                    <Table.TextHeaderCell>
                        Nome
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                        Email
                    </Table.TextHeaderCell>
                    <Table.TextHeaderCell>
                        Grupo Usuario
                    </Table.TextHeaderCell>
                </Table.Head>
                <Table.Body>
                    {
                        usuarios.length === 0 ? (
                            <Table.Row>
                                <Table.TextCell>Nenhum usuário encontrado.</Table.TextCell>
                            </Table.Row>) :
                            usuarios.map(usuario => (
                                <Table.Row key={usuario.id} height={40} paddingX={10} isSelectable onSelect={() => carregarFormulario(usuario)}>
                                    <Table.TextCell>{usuario.nome}</Table.TextCell>
                                    <Table.TextCell>{usuario.email}</Table.TextCell>
                                    <Table.TextCell>{usuario.grupoUsuario?.nome}</Table.TextCell>
                                </Table.Row>
                            ))
                    }
                </Table.Body>
            </Table>
        </div >
    );
}