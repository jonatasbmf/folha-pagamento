import { IconProps } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

interface MenuItemProps {
    icon: React.ComponentType<IconProps>;
    label: string;
    active: boolean;
    subMenu?: React.ReactNode;
    path?: string;
}

export default function MenuItem(props: MenuItemProps) {
    const IconComponent = props.icon;
    return (
        <div className="cursor-pointer">
            <Link href={props.path ?? "#"} className="flex items-center gap-2 bg-gray-200 h-9 py-2">
                <div className={`h-9 w-2 ${props.active ? `bg-green-500` : `bg-gray-500`} rounded-l-md`} />
                <IconComponent size={24} />
                <span>{props.label}</span>
            </Link>
            {props.subMenu && (
                <div>
                    {props.subMenu}
                </div>
            )}
        </div>
    );
}
