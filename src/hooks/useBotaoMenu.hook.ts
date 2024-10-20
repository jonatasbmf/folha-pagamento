import { useState } from "react";

const useBotaoMenu = () => {
    const [menuAberto, setMenuAberto] = useState(true);

    const handleMenu = () => {
        setMenuAberto(prev => !prev);
    }

    return {
        menuAberto,
        handleMenu
    }
};

export default useBotaoMenu;