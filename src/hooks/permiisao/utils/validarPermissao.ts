const validarPermissao = (nome: string, descricao: string): boolean => {
    const nomeValido = nome.trim().length > 5;
    const descricaoValido = descricao.trim().length > 10;

    return nomeValido && descricaoValido;
}

export default validarPermissao;