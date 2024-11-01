const converterMoedaStringParaFloat = (moeda: string): number => {
    return parseFloat(moeda.replace(/[^\d,-]/g, '').replace(',', '.'));
}

const converterFloatParaMoedaString = (valor: number): string => {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

export {
    converterFloatParaMoedaString, converterMoedaStringParaFloat
};
