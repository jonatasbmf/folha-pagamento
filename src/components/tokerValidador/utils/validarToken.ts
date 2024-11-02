import jwtTokenServico from "@/service/jwt/jwtTokenServico";

const validarToken = async (): Promise<string | null> => {
    try {
        jwtTokenServico.validaToken();
        var token = jwtTokenServico.obterToken();
        return token;
    } catch (error) {
        return null;
    }
};

export default validarToken;