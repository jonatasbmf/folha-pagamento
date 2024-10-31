
export const validarFuncionario = (
    nome: string,
    salario: number,
    empresaId: number
): boolean => {
    const nomeValido = nome.trim().length >= 5;
    const salarioValido = salario > 0;
    const empresaIdValido = empresaId > 0;

    return nomeValido && salarioValido && empresaIdValido;
};