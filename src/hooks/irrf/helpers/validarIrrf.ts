const validarIrrf = (ano: number,
    faixaMin: number,
    faixaMax: number,
    aliquota: number,
    deducao: number,
) => {
    const anoValido = ano > 2000;
    const faixaMinValido = faixaMin >= 0;
    const faixaMaxValido = faixaMax >= 0;
    const aliquotaValido = aliquota >= 0;
    const deducaoValido = deducao >= 0;

    return anoValido && faixaMinValido && faixaMaxValido && aliquotaValido && deducaoValido
}

export default validarIrrf;