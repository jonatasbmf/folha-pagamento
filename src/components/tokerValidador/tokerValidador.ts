'use clientt'
import { useUserContext } from '@/context/usuarioContext';
import jwtTokenServico from '@/service/jwt/jwtTokenServico';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const TokenValidator = () => {
    const { setLogado } = useUserContext();

    const router = useRouter();

    const validarToken = async () => {
        try {
            jwtTokenServico.validaToken();
            var token = jwtTokenServico.obterToken();
            if (token === null) {
                setLogado(false);
                router.push('/login');
            }
        } catch (error) {
            setLogado(false);
            router.push('/login');
        }
    };

    useEffect(() => {
        const intervalId = setInterval(validarToken, 15 * 60 * 1000); // Verifica a cada 15 minutos

        return () => clearInterval(intervalId);
    }, []);

    return null;
};

export default TokenValidator;
