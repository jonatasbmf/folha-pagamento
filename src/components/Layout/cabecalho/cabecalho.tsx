import BotaoMenu from "@/components/botaoMenu/botaoMenu";
import BotaoOpcoes from "@/components/botaoMenu/botaoOpcoes";
import { useUserContext } from "@/context/usuarioContext";
import { BankAccountIcon, Text } from "evergreen-ui";

export default function Cabecalho() {
    const { nome } = useUserContext();

    return (
        <div className="flex justify-between items-center min-h-12 bg-blue-900 text-white">
            <div className="flex items-center justify-between gap-5 px-2 w-80">
                <div className="flex items-center gap-4">
                    <BankAccountIcon color="white" size={18} />
                    <Text color='white' >Departamento Pessoal</Text>
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