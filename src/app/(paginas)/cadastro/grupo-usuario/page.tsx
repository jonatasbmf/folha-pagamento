'use client'
import CabecalhoPaginaBuscaModalFormulario from "@/components/cabecalhoPagina/cabecalhoPaginaBuscaModalFormulario";
import FormularioModal from "@/components/modal/formularioModal";
import useGrupoUsuario from "@/hooks/grupoUsuario/useGrupoUsuario.hook";
import { PlusIcon, Table, Text } from "evergreen-ui";
import { useEffect, useState } from "react";
import Loading from "react-loading";
import FormGrupoUsuario from "./formGrupoUsuario";

const page = () => {
    const {
        grupoUsuarios,
        listarTodos,
        buscarPorNome,
        limparFormulario,
        loading,
        setTermo,
        termo,
        setNome,
        nome,
        descricao,
        setDescricao,
        id, setId,
        excluir, salvar,
        atualizar,
    } = useGrupoUsuario();

    const [modalFormularioAberto, setModalFormularioAberto] = useState(false);

    useEffect(() => { listarTodos() }, []);

    const salvarGrupoUsuario = async () => {
        await salvar();
        limparFormulario();
        setModalFormularioAberto(false);
        await listarTodos();
    }

    const carregarFormulario = (grupoUsuario: GrupoUsuario) => {
        setId(grupoUsuario.id!);
        setNome(grupoUsuario.nome);
        setDescricao(grupoUsuario.descricao);
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
            <FormularioModal
                modalAberto={modalFormularioAberto}
                onClose={() => setModalFormularioAberto(false)}
                tituloModal="Grupo de Usuários"
                formulario={<FormGrupoUsuario
                    id={id}
                    nome={nome}
                    setNome={setNome}
                    descricao={descricao}
                    setDescricao={setDescricao}
                    excluir={excluirRegistro}
                    salvar={salvarGrupoUsuario}
                    atualizar={atualizar}
                    limparFormulario={limparFormulario}
                />
                }
            />
            <CabecalhoPaginaBuscaModalFormulario
                labelCabecalho="Grupo de Usuários"
                labelBotao="Novo"
                acaoBotao={setModalFormularioAberto}
                iconeBotao={PlusIcon}
                placeHolderBusca="Informe um nome e clique na lupa..."
                loading={loading}
                funcaoDeBusca={buscarPorNome}
                setTermoBusca={setTermo}
                termoBusca={termo}
            />

            <Table className="shadow-md" >
                <Table.Head paddingX={10}>
                    <Table.TextHeaderCell>Nome</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Descrição</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body maxHeight={240}>
                    {grupoUsuarios.length === 0 ? (
                        <Table.Row>
                            <Table.Cell>
                                <Text> Nenhum grupo de usuário encontrado! </Text>
                            </Table.Cell>
                        </Table.Row>
                    ) : (
                        grupoUsuarios.map((grupoUsuario) => (
                            <Table.Row height={40} paddingX={10} key={grupoUsuario.id} isSelectable onSelect={() => carregarFormulario(grupoUsuario)}>
                                <Table.TextCell>{grupoUsuario.nome}</Table.TextCell>
                                <Table.TextCell>{grupoUsuario.descricao}</Table.TextCell>
                            </Table.Row>
                        ))
                    )}
                </Table.Body>
            </Table>
        </div>

    );
}

export default page;