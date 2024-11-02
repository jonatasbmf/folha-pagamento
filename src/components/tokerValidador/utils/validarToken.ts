import jwtTokenServico from "@/service/jwt/jwtTokenServico";

const validarToken = async (): Promise<string | null> => {
    console.time('validação do token'); // Inicia o cronômetro
    try {
        jwtTokenServico.validaToken();
        const token = jwtTokenServico.obterToken();
        console.timeEnd('validação do token'); // Termina o cronômetro e imprime o tempo
        return token;
    } catch (error) {
        console.timeEnd('validação do token'); // Termina o cronômetro em caso de erro também
        return null;
    }
};

export default validarToken;