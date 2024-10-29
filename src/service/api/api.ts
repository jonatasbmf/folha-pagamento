import axios from "axios";
import jwtTokenServico from "../jwt/jwtTokenServico";

const baseURL = process.env.NEXT_PUBLIC_URL_BACK;

const api_back = axios.create({
    baseURL: `${baseURL}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

api_back.interceptors.request.use(
    async config => {
        config.headers.Authorization = `bearer ${jwtTokenServico.obterToken()}`;
        return config;
    }
);

export { api_back };
