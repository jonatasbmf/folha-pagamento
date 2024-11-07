import { BriefcaseIcon, FolderNewIcon, HomeIcon, InheritedGroupIcon, KeyIcon, ManualIcon, UserIcon } from "evergreen-ui";

const rotas = [
    {
        key: 1,
        path: "/",
        label: "Home",
        icon: HomeIcon
    },
    {
        key: 2,
        path: "/empresa",
        label: "Empresa",
        icon: BriefcaseIcon
    },
    {
        key: 3,
        path: "/cadastro/funcionario",
        label: "Cadastro Funcionarios",
        icon: FolderNewIcon
    },
    {
        key: 4,
        path: "/tabela/inss",
        label: "Tabela Inss",
        icon: ManualIcon

    }, {
        key: 5,
        path: "/tabela/irrf",
        label: "Tabela Irrf",
        icon: ManualIcon
    },
    {
        key: 6,
        path: "/cadastro/grupo-usuario",
        label: "Grupo Usuário",
        icon: InheritedGroupIcon
    },
    {
        key: 7,
        path: "/cadastro/permissao",
        label: "Permissão",
        icon: KeyIcon
    },
    {
        key: 8,
        path: "/cadastro/usuario",
        label: "Usuário",
        icon: UserIcon
    }
];

export default rotas;
