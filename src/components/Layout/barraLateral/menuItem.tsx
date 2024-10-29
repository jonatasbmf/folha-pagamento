import { IconProps } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

interface MenuItemProps {
    icon: React.ComponentType<IconProps>;
    label: string;
    path?: string;
}

export default function MenuItem(props: MenuItemProps) {
    const IconComponent = props.icon;
    return (
        <div className="cursor-pointer rounded hover:bg-gray-400 hover:shadow-lg ">
            <Link href={props.path ?? "#"} className="flex items-center gap-2 h-9 py-2">
                <IconComponent size={24} />
                <span>{props.label}</span>
            </Link>
        </div>
    );
}
