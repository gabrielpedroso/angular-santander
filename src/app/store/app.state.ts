export interface InvestmentStateInterface {
    nome: string;
    objetivo: string;
    saldoTotal: number;
    indicadorCarencia: string;
    acoes: Array<FinancialStocksStateInterface>;
}

export interface FinancialStocksStateInterface {
    id: string;
    nome: string;
    percentual: number;
}