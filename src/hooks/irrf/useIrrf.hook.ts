import { converterMoedaStringParaFloat } from "@/helpers/conversorMoeda";
import irrfService from "@/service/module/irrfService/irrf.service";
import { useState } from "react";
import { toast } from "react-toastify";
import validarIrrf from "./utils/validarIrrf";

const useIrrf = () => {
    const [id, setId] = useState(0);
    const [ano, setAno] = useState(0);
    const [faixaMin, setFaixaMin] = useState(0);
    const [faixaMinString, setFaixaMinString] = useState('');
    const [faixaMax, setFaixaMax] = useState(0);
    const [faixaMaxString, setFaixaMaxString] = useState('');
    const [aliquota, setAliquota] = useState(0);
    const [deducao, setDeducao] = useState(0);
    const [deducaoString, setDeducaoString] = useState('');
    const [aliquotaString, setAliquotaString] = useState('');
    const [listaIrrf, setListaIrrf] = useState<Irrf[]>([]);
    const [listaAno, setListaAno] = useState<AnoDto[]>([]);
    const [loading, setLoading] = useState(false);
    const [termo, setTermo] = useState('');

    const inserir = async () => {
        const irrfNovo = {
            ano,
            faixaMax: converterMoedaStringParaFloat(faixaMaxString),
            faixaMin: converterMoedaStringParaFloat(faixaMinString),
            aliquota: converterMoedaStringParaFloat(aliquotaString),
            deducao: converterMoedaStringParaFloat(deducaoString)
        }

        if (!validarIrrf(ano, faixaMin, faixaMax, aliquota, deducao)) {
            toast.error("[validação] Não foi possível gravar o IRRF.");
            return;
        }

        try {
            setLoading(true);
            await irrfService.inserir(irrfNovo);
            toast.success("IRRF salvo com sucesso!");
            limparFormulario();
        } catch (error) {
            console.error(error);
            toast.error("[catch] Não foi possível gravar o IRRF. Verifique o log.");
        } finally {
            setLoading(false);
        }
    }

    const atualizar = async () => {
        const irrfAtualizar = {
            id,
            ano,
            faixaMax: converterMoedaStringParaFloat(faixaMaxString),
            faixaMin: converterMoedaStringParaFloat(faixaMinString),
            aliquota: converterMoedaStringParaFloat(aliquotaString),
            deducao: converterMoedaStringParaFloat(deducaoString)
        }

        if (!validarIrrf(ano, faixaMin, faixaMax, aliquota, deducao)) {
            toast.error("[validação] Não foi possível atualizar o IRRF.");
            return;
        }

        try {
            setLoading(true);
            await irrfService.atualizar(irrfAtualizar);
            toast.success("IRRF atualizado com sucesso!");
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao atualizar o IRRF. Verifique o log.");
        } finally {
            setLoading(false);
        }
    }

    const excluir = async (id: number) => {
        try {
            setLoading(true);
            await irrfService.excluir(id);
            toast.warn("Registro excluido com sucesso.");
            limparFormulario();
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao excluir IRRF. Verifique o log.")
        } finally {
            setLoading(false);
        }
    }

    const buscarPorId = async (id: number) => {
        try {
            setLoading(true);
            const irrfResponse = await irrfService.buscarPorId(id);
            if (irrfResponse.status === 200) {
                const irrf = irrfResponse.data;
                setId(irrf.id);
                setAno(irrf.ano);
                setFaixaMin(irrf.faixaMin);
                setFaixaMax(irrf.faixaMax);
                setAliquota(irrf.aliquota);
                setDeducao(irrf.deducao);
            }
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao buscar IRRF por id. Verifique o log.")
        } finally {
            setLoading(false);
        }
    }

    const buscarPorAno = async (ano: number) => {
        try {
            setLoading(true);
            const irrfResponse = await irrfService.buscarPorAno(ano);
            if (irrfResponse.status === 200) {
                setListaIrrf(irrfResponse.data);
            }
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao buscar IRRF por ano. Verifique o log.")
        } finally {
            setLoading(false);
        }
    }

    const buscarAnoDistinto = async () => {
        try {
            setLoading(true);
            const irrfResponse = await irrfService.buscarPorAnoDistinto();
            if (irrfResponse.status === 200) {
                setListaAno(irrfResponse.data);
            }
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao buscar IRRF por anos distintos. Verifique o log.")
        } finally {
            setLoading(false);
        }
    }

    const listaTodos = async () => {
        try {
            setLoading(true);
            const irrfResponse = await irrfService.listarTodos();
            if (irrfResponse.status === 200) {
                setListaIrrf(irrfResponse.data);
            }
        } catch (error) {
            console.error(error);
            toast.error("[catch] Erro ao buscar IRRF por anos distintos. Verifique o log.")
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
        setDeducao(0);
        setDeducaoString('');
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
        deducao, setDeducao,
        deducaoString, setDeducaoString,
        listaIrrf, setListaIrrf,
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

export default useIrrf;