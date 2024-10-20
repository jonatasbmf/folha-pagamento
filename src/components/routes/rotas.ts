import { IconAsset, IconBuildingCommunity, IconHome, IconKeyboard } from "@tabler/icons-react";

const rotas = [
    {
        key: 1,
        path: "/",
        label: "Home",
        icon: IconHome,
        active: false
    },
    {
        key: 2,
        path: "/empresa",
        label: "Empresa",
        icon: IconBuildingCommunity,
        active: false
    },
    {
        key: 3,
        path: "#",
        label: "Cadastro",
        icon: IconKeyboard,
        active: false,
        subMenu: [
            { key: 1, path: "/cadastro/funcionario", label: "Funcionarios" }
        ]
    },
    {
        key: 4,
        path: "#",
        label: "Tabela",
        icon: IconKeyboard,
        active: false,
        subMenu: [
            { key: 1, path: "/tabela/inss", label: "INSS" },
            { key: 2, path: "/tabela/irrf", label: "IRRF" }
        ]
    },
    {
        key: 5,
        path: "#",
        label: "Configurações",
        icon: IconAsset,
        active: false,
        subMenu: [
            { key: 1, path: "/cadastro/tabela/inss", label: "Usuários" }
        ]
    }
];

export default rotas;
