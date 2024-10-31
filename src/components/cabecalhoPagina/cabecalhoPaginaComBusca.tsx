import { useNavegacao } from "@/hooks/useNavegacao.hook";
import { Button, Group, Heading, IconButton, IconComponent, Pane, SearchIcon, Spinner, TextInput } from "evergreen-ui";
import { SetStateAction } from "react";

interface CabecalhoPaginaComBuscaProps {
    labelCabecalho: string;
    endPointBotao: string;
    iconeBotao: IconComponent;
    labelBotao: string;
    placeHolderBusca: string;
    termoBusca: string;
    setTermoBusca: (value: SetStateAction<string>) => void;
    funcaoDeBusca: () => void;

    loading: boolean;
}

const CabecalhoPaginaComBusca: React.FC<CabecalhoPaginaComBuscaProps> = (
    { labelCabecalho, endPointBotao, iconeBotao, labelBotao, placeHolderBusca,
        termoBusca, setTermoBusca, funcaoDeBusca, loading }
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
                        onClick={() => irParaPagina(endPointBotao)}>
                        {labelBotao}
                    </Button>
                    <Group>
                        <TextInput
                            disabled={loading}
                            value={termoBusca}
                            onChange={(e: { target: { value: SetStateAction<string> } }) =>
                                setTermoBusca(e.target.value)
                            }
                            placeholder={placeHolderBusca} />
                        <IconButton
                            disabled={loading}
                            icon={loading ? Spinner : SearchIcon}
                            onClick={funcaoDeBusca} />
                    </Group>
                </Pane>
            </Pane>
        </div>
    );
};


export default CabecalhoPaginaComBusca;