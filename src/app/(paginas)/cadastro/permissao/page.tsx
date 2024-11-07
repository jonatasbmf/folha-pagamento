'use client';

import CabecalhoPaginaBuscaModalFormulario from "@/components/cabecalhoPagina/cabecalhoPaginaBuscaModalFormulario";
import Loading from "@/components/loading/loading";
import FormularioModal from "@/components/modal/formularioModal";
import usePermissao from "@/hooks/permiisao/usePermissao.hook";
import { PlusIcon, Table, Text } from "evergreen-ui";
import { useEffect, useState } from "react";
import FormPermissao from "./fomrPermissao";

export default function PermissaoPage() {
    const {
        id, setId,
        nome, setNome,
        descricao, setDescricao,
        termo, setTermo,
        permissoes,
        loading,
        limparFormulario,
        salvar,
        atualizar,
        excluir,
        obterPorNome,
        listarTodas
    } = usePermissao();

    const [modalFormularioAberto, setModalFormularioAberto] = useState(false);
    useEffect(() => {
        listarTodas();
    }, []);

    const salvarPermissao = async () => {
        await salvar();
        limparFormulario();
        setModalFormularioAberto(false);
        await listarTodas();
    }

    const carregarFormulario = (permissao: Permissao) => {
        setId(permissao.id!);
        setNome(permissao.nome);
        setDescricao(permissao.descricao);
        setModalFormularioAberto(true);
    }

    const excluirRegistro = async () => {
        await excluir(id);
        limparFormulario();
        setModalFormularioAberto(false);
        await listarTodas();
    }

    return (
        <div>
            {loading ?? <Loading />}

            <FormularioModal
                modalAberto={modalFormularioAberto}
                onClose={() => setModalFormularioAberto(false)}
                tituloModal="Grupo de Usuários"
                formulario={<FormPermissao
                    id={id}
                    nome={nome}
                    setNome={setNome}
                    descricao={descricao}
                    setDescricao={setDescricao}
                    excluir={excluirRegistro}
                    salvar={salvarPermissao}
                    atualizar={atualizar}
                    limparFormulario={limparFormulario}
                />}
            />

            <CabecalhoPaginaBuscaModalFormulario
                labelCabecalho='Permissões e Recursos'
                acaoBotao={setModalFormularioAberto}
                iconeBotao={PlusIcon}
                labelBotao={'Nova(o)'}
                placeHolderBusca={"Informe o nome da permissão e clique na lupa!"}
                termoBusca={termo}
                setTermoBusca={setTermo}
                funcaoDeBusca={obterPorNome}
                loading={loading}
            />

            <Table>
                <Table.Head>
                    <Table.TextHeaderCell>Nome</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Descrição</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body height={240}>
                    {Array.isArray(permissoes) && permissoes.length === 0 ?
                        (
                            <Table.Row>
                                <Table.Cell>
                                    <Text> Nenhum grupo de usuário encontrado! </Text>
                                </Table.Cell>
                            </Table.Row>
                        ) : (
                            permissoes.map((permissao) => (
                                <Table.Row height={40} paddingX={10} key={permissao.id} isSelectable onSelect={() => carregarFormulario(permissao)}>
                                    <Table.TextCell>{permissao.nome}</Table.TextCell>
                                    <Table.TextCell>{permissao.descricao}</Table.TextCell>
                                </Table.Row>
                            ))
                        )}
                </Table.Body>
            </Table>
        </div>
    );
}