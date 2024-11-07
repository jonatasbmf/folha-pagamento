"use client";
import rotas from "@/components/routes/rotas";
import { useMenuContext } from "@/context/menuContext";
import MenuItem from "./menuItem";

export default function BarraLateral() {
    const { menuAberto } = useMenuContext();

    return (
        <div className={`flex flex-col ${menuAberto ? "w-64" : "hidden"} bg-gray-300 border-r border-zinc-200 gap-1 overflow-auto max-h-full`}>
            {rotas.map((route) => (
                <MenuItem
                    key={route.key}
                    path={route.path}
                    icon={route.icon}
                    label={route.label}
                />
            ))}
        </div>
    );
}
