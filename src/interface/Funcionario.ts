interface Funcionario {
    id?: number;
    nome: string;
    salario: number;
    empresaId: number;
    empresa?: Empresa;
    deducao: number;
}