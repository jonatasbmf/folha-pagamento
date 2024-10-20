"use client"
import { useMenuContext } from "@/context/menuContext";
import { IconLayoutSidebarRightCollapse, IconMenu } from "@tabler/icons-react";

export default function BotaoMenu() {
    const { menuAberto, handleMenu } = useMenuContext();

    return (
        <button className="w-10 h-10" onClick={handleMenu}>
            {menuAberto ?
                <IconMenu />
                :
                <IconLayoutSidebarRightCollapse />
            }
        </button>

    )
}