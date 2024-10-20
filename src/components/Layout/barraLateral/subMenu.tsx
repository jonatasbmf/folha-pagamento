import Link from "next/link";

interface SubMenuItemProps {
    label: string;
    path: string;
}

export default function SubMenuItem(props: SubMenuItemProps) {
    return (
        <Link href={props.path} className="flex pt-1">
            <div className="h-9 w-3 bg-none"></div>
            <div className={`h-9 w-2 bg-gray-400 rounded-l-md`} />
            <div className="flex flex-1 items-center pl-4 bg-gray-200 h-9 cursor-pointer" >
                <span>{props.label}</span>
            </div>
        </Link>

    );
}