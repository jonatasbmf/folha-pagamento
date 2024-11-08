"use client"
import { Alert } from "evergreen-ui";
import { useLogin } from "./useLogin.hook";

export default function LoginPage() {
    var { login, email, setEmail, password, setPassword, erroLogin } = useLogin();


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={e => e.preventDefault()}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Senha
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            onClick={login}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Entrar
                        </button>
                        {/* <a
                            href="#"
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        >
                            Esqueceu a senha?
                        </a> */}
                    </div>

                    {erroLogin &&
                        <Alert intent="danger"
                            title={erroLogin} />}
                </form>
            </div>
        </div>
    );
}
