import { converterMoedaStringParaFloat } from "@/helpers/conversorMoeda";
import { Inss } from "@/interface/Inss";
import inssService from "@/service/module/inssService/inssService";
import { useState } from "react";
import { toast } from "react-toastify";
import validarInss from "./helpers/validarInss";

const useInss = () => {
    const [id, setId] = useState(0);
    const [ano, setAno] = useState(0);
    const [faixaMin, setFaixaMin] = useState(0);
    const [faixaMinString, setFaixaMinString] = useState('');
    const [faixaMax, setFaixaMax] = useState(0);
    const [faixaMaxString, setFaixaMaxString] = useState('');
    const [aliquota, setAliquota] = useState(0);
    const [aliquotaString, setAliquotaString] = useState('');
    const [listaInss, setListaInss] = useState<Inss[]>([]);
    const [listaAno, setListaAno] = useState<AnoDto[]>([]);
    const [loading, setLoading] = useState(false);
    const [termo, setTermo] = useState('');

    const inserir = async () => {
        var inssNovo = {
            ano,
            faixaMax: converterMoedaStringParaFloat(faixaMaxString),
            faixaMin: converterMoedaStringParaFloat(faixaMinString),
            aliquota: converterMoedaStringParaFloat(aliquotaString)
        }

        if (!validarInss(ano, faixaMin, faixaMax, aliquota)) {
            toast.error("[validação] Não foi possível gravar o INSS.");
            return;
        }

        try {
            setLoading(true);
            await inssService.inserir(inssNovo);
            toast.success("Inss salvo com sucesso!");
            limparFormulario();
        } catch (error) {
            console.error(error);
            toast.error("[catch] Não foi possível gravar o INSS. Verifique o log.");
        } finally {
            setLoading(false);
        }
    }

    const atualizar = async () => {
        var inssAtualizar = {
            id,
            ano,
            faixaMax: converterMoedaStringParaFloat(faixaMaxString),
            faixaMin: converterMoedaStringParaFloat(faixaMinString),
            aliquota: converterMoedaStringParaFloat(aliquotaString)
        }

        if (!validarInss(ano, faixaMin, faixaMax, aliquota)) {
            toast.error("[validação] Não foi possível atualizar o INSS.");
            return;
        }

        try {
            setLoading(true);
            await inssService.atualizar(inssAtualizar);
            toast.success("Inss atualizado com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao atualizar o INSS. Verifique o log.");
        } finally {
            setLoading(false);
        }
    }

    const excluir = async (id: number) => {
        try {
            setLoading(true);
            await inssService.excluir(id);
            toast.warn("Registro excluido com sucesso.");
            limparFormulario();
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao excluir Inss. Verifique o log.")
        } finally {
            setLoading(false);
        }
    }

    const buscarPorId = async (id: number) => {
        try {
            setLoading(true);
            const inssResponse = await inssService.buscarPorId(id);
            if (inssResponse.status === 200) {
                const inss = inssResponse.data;
                setId(inss.id);
                setAno(inss.ano);
                setFaixaMin(inss.faixaMin);
                setFaixaMax(inss.faixaMax);
                setAliquota(inss.aliquota);
            }
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao buscar Inss por id. Verifique o log.")
        } finally {
            setLoading(false);
        }
    }

    const buscarPorAno = async (ano: number) => {
        try {
            setLoading(true);
            const inssResponse = await inssService.buscarPorAno(ano);
            if (inssResponse.status === 200) {
                setListaInss(inssResponse.data);
            }
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao buscar Inss por ano. Verifique o log.")
        } finally {
            setLoading(false);
        }
    }

    const buscarAnoDistinto = async () => {
        try {
            setLoading(true);
            const inssResponse = await inssService.buscarPorAnoDistinto();
            if (inssResponse.status === 200) {
                setListaAno(inssResponse.data);
            }
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao buscar Inss por anos distintos. Verifique o log.")
        } finally {
            setLoading(false);
        }
    }

    const listaTodos = async () => {
        try {
            setLoading(true);
            const inssResponse = await inssService.listarTodos();
            if (inssResponse.status === 200) {
                setListaInss(inssResponse.data);
            }
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao buscar Inss por anos distintos. Verifique o log.")
        } finally {
            setLoading(false);
        }
    }

    const filtrarPorAno = async () => {
        setLoading(true);
        await buscarAnoDistinto();
        const resultadoFiltro = listaAno.filter(ano => ano.ano === Number(termo));
        setListaAno(resultadoFiltro);
        setLoading(false);
    }

    const limparFormulario = async () => {
        setId(0);
        setAno(0);
        setFaixaMin(0);
        setFaixaMax(0);
        setAliquota(0);
        setFaixaMinString('');
        setFaixaMaxString('');
        setAliquotaString('');
    }

    return {
        id, setId,
        ano, setAno,
        faixaMin, setFaixaMin,
        faixaMax, setFaixaMax,
        faixaMinString, setFaixaMinString,
        faixaMaxString, setFaixaMaxString,
        aliquota, setAliquota,
        aliquotaString, setAliquotaString,
        listaInss, setListaInss,
        listaAno, setListaAno,
        termo, setTermo,
        loading,
        inserir,
        atualizar,
        excluir,
        buscarPorId,
        buscarPorAno,
        buscarAnoDistinto,
        listaTodos,
        filtrarPorAno,
        limparFormulario
    }
}

export default useInss;