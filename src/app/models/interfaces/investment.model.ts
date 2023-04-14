export interface InvestmentInterface {
    nome: string;
    objetivo: string;
    saldoTotal: number;
    indicadorCarencia: string;
    acoes: Array<actionInterface>;
}

export interface actionInterface {
    id: string;
    nome: string;
    percentual: number;
}