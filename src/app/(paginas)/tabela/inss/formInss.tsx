'use client'
import InputMoeda from "@/components/inputs/inputMoeda";
import InputNumeroDecimal from "@/components/inputs/InputNumeroDecimal";
import ConfirmacaoModal from "@/components/modal/confirmacaoModal";
import { Button, Pane, SelectField } from "evergreen-ui";
import { useEffect, useState } from "react";

interface FormInssProps {
    id?: number;
    setId: () => {};
    ano: number;
    setAno: (value: number) => void;
    faixaMin: number;
    setFaixaMin: (value: number) => {};
    faixaMax: number;
    setFaixaMax: (value: number) => {};
    aliquota: number;
    setAliquota: (value: number) => {};
    salvar: () => {};
    atualizar?: () => {};
    excluir?: (value: number) => {};
    limparFormulario: () => {}
}

export default function FormInss(props: FormInssProps) {
    const {
        id,
        ano, setAno,
        faixaMin, setFaixaMin,
        faixaMax, setFaixaMax,
        aliquota, setAliquota,
        salvar, atualizar, excluir, limparFormulario
    } = props;

    const [anos, setAnos] = useState<Number[]>([]);
    const [modalAberto, setModalAberto] = useState(false);

    useEffect(() => {
        const listaAnos = gerarListaDeAnos();
        setAnos(listaAnos);
    }, []);

    const gerarListaDeAnos = (anoAtual = new Date().getFullYear()) => {
        const anos = [];
        for (let i = anoAtual - 5; i <= anoAtual + 1; i++) {
            anos.push(i);
        }
        return anos;
    }

    return (
        <>
            <ConfirmacaoModal
                textoModal="Confirma exclusão do registro?"
                tituloModal="Excluir aliquota"
                modalAberto={modalAberto}
                onClose={() => setModalAberto(false)}
                onConfirm={() => {
                    if (excluir) {
                        excluir(id!);
                    }
                }}
            />
            <Pane padding={16} background="tint2" borderRadius={3}>
                <input style={{ display: 'none' }} type="number" disabled value={id} />
                <div className="flex gap-4">
                    <SelectField
                        label="Ano Referencia"
                        required
                        value={ano}
                        onChange={e => setAno(+e.target.value)}
                    >
                        <option value="0" selected>
                            Selecione um ano de referência...
                        </option>
                        {anos ? anos.map(
                            (ano) => {
                                return (<option value={ano.toString()} selected>
                                    {ano.toString()}
                                </option>)
                            }
                        ) : null}
                    </SelectField>
                    <InputMoeda
                        setValue={setFaixaMin}
                        value={faixaMin}
                        validationMessage="Campo não pode ficar vazio"
                        label="Faixa mínima"
                        required
                        placeholder="R$ 1.123,45"
                    />
                    <InputMoeda
                        setValue={setFaixaMax}
                        value={faixaMax}
                        validationMessage="Campo não pode ficar vazio"
                        label="Faixa Máxima"
                        required
                        placeholder="R$ 1.123,45"
                    />
                    <InputNumeroDecimal
                        setValue={setAliquota}
                        value={aliquota}
                        validationMessage="Campo não pode ficar vazio"
                        label="Aliquota"
                        required
                        placeholder="0.87"
                    />
                    <div className="flex justify-end gap-2">
                        <Button marginRight={16}
                            onClick={id ? atualizar : salvar}
                            intent="success"
                        >
                            Salvar
                        </Button>
                        <Button marginRight={16}
                            onClick={limparFormulario}
                            intent="none">
                            Limpar
                        </Button>
                        {id ? (<Button marginRight={16}
                            onClick={id && excluir ? () => setModalAberto(true) : undefined}
                            intent="danger">
                            Excluir
                        </Button>) : null}
                    </div>
                </div>
            </Pane>
        </>
    )
}