export interface ResponseStateInterface {
    response: AppStateInterface;
}

export interface AppStateInterface {
    status: string;
    data: InvestimentListStateInterface;
}

export interface InvestimentListStateInterface {
    listaInvestimentos: Array<InvestmentStateInterface>;
}

export interface InvestmentStateInterface {
    nome: string;
    objetivo: string;
    saldoTotal: number;
    indicadorCarencia: string;
    acoes: Array<acoestateInterface>;
}

export interface acoestateInterface {
    id: string;
    nome: string;
    percentual: number;
}
