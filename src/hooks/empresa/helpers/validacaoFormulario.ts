export const verificarValidadeFormulario = (
    nome: string,
    razaoSocial: string,
    email: string
): boolean => {
    const nomeValido = nome.trim().length >= 3;
    const razaoSocialValido = razaoSocial.trim().length >= 3;
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return nomeValido && razaoSocialValido && emailValido;
};