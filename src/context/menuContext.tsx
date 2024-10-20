"use client"
import useBotaoMenu from "@/hooks/useBotaoMenu.hook";
import { createContext, FC, useContext } from "react";

interface MenuContextProps {
    menuAberto: boolean;
    handleMenu: () => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const { menuAberto, handleMenu } = useBotaoMenu();

    return (
        <MenuContext.Provider value={{ menuAberto, handleMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) throw "Contexto não criado!";
    return context;
}