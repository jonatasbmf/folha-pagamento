export default function Rodape() {
    return (
        <div className="flex justify-end items-center max-h-12
        bg-gray-800 border-t border-zinc-600 
        px-6 py-6">
            <div className="text-zinc-400 text-sm">
                Desenvolvido por Joe &copy; {new Date().getFullYear()}
            </div>
        </div>
    )
}