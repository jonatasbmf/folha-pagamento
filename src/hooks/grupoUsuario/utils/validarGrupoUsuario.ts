const validarGrupoUsuario = (nome: string, descricao: string) => {
    const nomeValido = nome.trim().length > 3;
    const descricaoValido = descricao.trim().length > 10;

    return nomeValido && descricaoValido;
}

export default validarGrupoUsuario;