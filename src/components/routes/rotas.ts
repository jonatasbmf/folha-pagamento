import { IconAsset, IconBuildingCommunity, IconHome, IconKeyboard } from "@tabler/icons-react";

const rotas = [
    {
        key: 1,
        path: "/",
        label: "Home",
        icon: IconHome
    },
    {
        key: 2,
        path: "/empresa",
        label: "Empresa",
        icon: IconBuildingCommunity
    },
    {
        key: 3,
        path: "/cadastro/funcionario",
        label: "Cadastro Funcionarios",
        icon: IconKeyboard
    },
    {
        key: 4,
        path: "/tabela/inss",
        label: "Tabela Inss",
        icon: IconKeyboard

    }, {
        key: 5,
        path: "/tabela/irrf",
        label: "Tabela Irrf",
        icon: IconKeyboard
    },
    {
        key: 6,
        path: "#",
        label: "Configurações",
        icon: IconAsset
    }
];

export default rotas;
