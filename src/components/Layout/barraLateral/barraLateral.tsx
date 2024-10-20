"use client";
import rotas from "@/components/routes/rotas";
import { useMenuContext } from "@/context/menuContext";
import { usePathname } from "next/navigation";
import MenuItem from "./menuItem";
import SubMenuItem from "./subMenu";

export default function BarraLateral() {
    const { menuAberto } = useMenuContext();
    const pathname = usePathname()

    const caminhoAtivo = (nomeMenu: string): boolean => {
        if (nomeMenu === "Home" && pathname == '/')
            return true
        return pathname.includes(nomeMenu.toLowerCase())
    }

    return (
        <div className={`flex flex-col p-1 ${menuAberto ? "w-80" : "hidden"} bg-gray-300 border-r border-zinc-200 gap-1 overflow-auto max-h-full`}>
            {rotas.map((route) => (
                <MenuItem
                    key={route.key}
                    path={route.path}
                    icon={route.icon}
                    label={route.label}
                    active={caminhoAtivo(route.label)}
                    subMenu={route.subMenu && route.subMenu.map((subItem) => (
                        <SubMenuItem key={subItem.key} path={subItem.path} label={subItem.label} />
                    ))}
                />
            ))}
        </div>
    );
}
