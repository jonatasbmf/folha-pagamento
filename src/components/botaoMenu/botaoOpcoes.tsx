'use client'
import jwtTokenServico from "@/service/jwt/jwtTokenServico";
import { Menu, PeopleIcon, Popover, Position, TrashIcon } from "evergreen-ui";
import { useRouter } from "next/navigation";

export default function BotaoOpcoes() {
    const rota = useRouter();

    const logout = () => {
        jwtTokenServico.removerToken();
        rota.push('/');
    }

    return (
        <Popover
            position={Position.BOTTOM_LEFT}
            content={
                <Menu>
                    <Menu.Group title="Perfil">
                        <Menu.Item icon={PeopleIcon}>
                            Perfil...
                        </Menu.Item>
                    </Menu.Group>
                    <Menu.Divider />
                    <Menu.Group title="Logout   ">
                        <Menu.Item icon={TrashIcon} intent="danger" onClick={() => logout()}>
                            Logout
                        </Menu.Item>
                    </Menu.Group>
                </Menu>
            }
        >
            <PeopleIcon />
        </Popover>
    )
}