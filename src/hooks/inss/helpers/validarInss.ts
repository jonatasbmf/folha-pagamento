const validarInss = (ano: number,
    faixaMin: number,
    faixaMax: number,
    aliquota: number
) => {
    const anoValido = ano > 2000;
    const faixaMinValido = faixaMin > 0;
    const faixaMaxValido = faixaMax > 0;
    const aliquotaValido = aliquota > 0;

    return anoValido && faixaMinValido && faixaMaxValido && aliquotaValido
}

export default validarInss;