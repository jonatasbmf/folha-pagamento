import BotaoMenu from "@/components/botaoMenu/botaoMenu";
import BotaoOpcoes from "@/components/botaoMenu/botaoOpcoes";
import { useUserContext } from "@/context/usuarioContext";
import { IconBrandCashapp } from "@tabler/icons-react";

export default function Cabecalho() {
    const { nome } = useUserContext();

    return (
        <div className="flex justify-between items-center min-h-12 bg-blue-900 text-white">
            <div className="flex items-center justify-between gap-5 px-2 w-80">
                <div className="flex items-center gap-4">
                    <IconBrandCashapp />
                    Departamento Pessoal
                </div>
                <div className="flex items-center justify-center">
                    <BotaoMenu />
                </div>
            </div>
            <div className="flex items-center gap-5 px-3">
                <div>{nome ?? nome}</div>
                <div className="px-3">
                    <BotaoOpcoes />
                </div>
            </div>
        </div >
    )
}