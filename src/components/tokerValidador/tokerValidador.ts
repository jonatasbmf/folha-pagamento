'use clientt'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import validarToken from './utils/validarToken';

const TokenValidator = () => {

    const rota = useRouter();
    const token = validarToken();
    const validaSituacaoUsuarioLogado = () => {
        if (!token)
            rota.push('/login')
    }

    useEffect(() => {
        const intervalId = setInterval(validaSituacaoUsuarioLogado, 15 * 60 * 1000); // Verifica a cada 15 minutos

        return () => clearInterval(intervalId);
    }, []);

    return null;
};

export default TokenValidator;
