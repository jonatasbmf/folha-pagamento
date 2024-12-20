const converterMoedaStringParaFloat = (moeda: string): number => {
    return parseFloat(moeda.replace(/[^\d,-]/g, '').replace(',', '.'));
}

const converterFloatParaMoedaString = (valor: any): string => {
    const numero = parseFloat(valor);
    if (isNaN(numero)) {
        return '';
    }
    return `R$ ${numero.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}

export {
    converterFloatParaMoedaString, converterMoedaStringParaFloat
};
