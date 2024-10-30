"use client"
import { useMenuContext } from "@/context/menuContext";
import { MenuIcon, MenuOpenIcon } from "evergreen-ui";

export default function BotaoMenu() {
    const { menuAberto, handleMenu } = useMenuContext();

    return (
        <button className="w-10 h-10" onClick={handleMenu}>
            {menuAberto ?
                <MenuIcon />
                :
                <MenuOpenIcon />
            }
        </button>

    )
}