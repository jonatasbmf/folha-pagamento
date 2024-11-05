import { jwtDecode } from 'jwt-decode';

type TokenDecodificado = {
  roles?: string[],
  exp: number
  sub: string;
  nomeUsuario: string;
}

const obterToken = () => {
  return localStorage.getItem('auth_token');
};

const obterDadosUsuario = () => {
  const tokenDecodificado = decodificarToken();

  return {
    nome: tokenDecodificado?.nomeUsuario,
    email: tokenDecodificado?.sub,
    roles: tokenDecodificado?.roles,
  };
};

const gravarToken = (token: string) => {
  localStorage.setItem('auth_token', token);
};

const obterExpiracaoToken = () => {
  const tokenDecodificado = decodificarToken();
  return tokenDecodificado ? tokenDecodificado.exp : null;
};

const tokenEstaExpirado = (): boolean => {
  const expiracao: number = Number(obterExpiracaoToken());

  if (expiracao) {
    const dataExpiracao = new Date(expiracao * 1000);
    return new Date() >= dataExpiracao;
  }

  return true;
};

const validaToken = () => {
  const tokenExpirado = tokenEstaExpirado();

  if (tokenExpirado)
    localStorage.removeItem('auth_token');
}

const decodificarToken = (): TokenDecodificado | null => {
  const jwtToken = obterToken();

  if (jwtToken)
    return jwtDecode(jwtToken);

  return null;
};

const removerToken = () => {
  localStorage.removeItem('auth_token');
}

const jwtTokenServico = {
  obterDadosUsuario,
  tokenEstaExpirado,
  obterToken,
  gravarToken,
  validaToken,
  removerToken
};

export default jwtTokenServico;

