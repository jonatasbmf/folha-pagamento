import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { Button, Heading, IconComponent, Pane } from "evergreen-ui";

interface CabecalhoPaginaNavegacaoProps {
    labelCabecalho: string;
    acaoBotao: () => void;
    labelBotao: string;
    iconeBotao: IconComponent;
}

const CabecalhoPaginaComNavegacao: React.FC<CabecalhoPaginaNavegacaoProps> = (
    { labelCabecalho, acaoBotao, labelBotao, iconeBotao }
) => {
    const { irParaPagina } = useNavegacao();

    return (
        <div className="mb-5">
            <div className="flex flex-1 mb-3">
                <Heading size={600}>{labelCabecalho}</Heading>
            </div>
            <Pane padding={16} background="tint2" borderRadius={3}>
                <Pane className="flex items-center justify-between gap-4">
                    <Button
                        className="w-36"
                        marginY={8}
                        marginRight={12}
                        iconAfter={iconeBotao}
                        onClick={acaoBotao}>
                        {labelBotao}
                    </Button>
                </Pane>
            </Pane>
        </div>
    );
};


export default CabecalhoPaginaComNavegacao;