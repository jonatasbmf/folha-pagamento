interface Usuario {
    id?: number;
    email: string;
    nome: string;
    senha?: string;
    grupoUsuarioId?: number;
    grupoUsuario?: GrupoUsuario;
}
