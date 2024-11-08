import { Button, Group, Heading, IconButton, IconComponent, Pane, SearchIcon, Spinner, TextInput } from "evergreen-ui";
import { SetStateAction } from "react";

interface CabecalhoPaginaBuscaModalFormularioProps {
    labelCabecalho: string;
    acaoBotao: (value: boolean) => void;
    iconeBotao: IconComponent;
    labelBotao: string;
    placeHolderBusca: string;
    termoBusca: string;
    setTermoBusca: (value: SetStateAction<string>) => void;
    funcaoDeBusca: () => void;
    loading: boolean;
}

const CabecalhoPaginaBuscaModalFormulario: React.FC<CabecalhoPaginaBuscaModalFormularioProps> = (
    { labelCabecalho, acaoBotao, iconeBotao, labelBotao, placeHolderBusca,
        termoBusca, setTermoBusca, funcaoDeBusca, loading }
) => {

    return (
        <div className="mb-5">
            <div className="flex flex-1 mb-3">
                <Heading size={600}>{labelCabecalho}</Heading>
            </div>
            <Pane className="shadow-md" padding={16} background="tint2" borderRadius={3}>
                <Pane className="flex items-center justify-between gap-4">
                    <Button
                        className="w-36"
                        marginY={8}
                        marginRight={12}
                        iconAfter={iconeBotao}
                        onClick={() => acaoBotao(true)}>
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


export default CabecalhoPaginaBuscaModalFormulario;