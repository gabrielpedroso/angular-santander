
export interface IResponseState {
    response: INomeADefinir;
    isLoading: boolean;
}

export interface INomeADefinir {
    status: string;
    data: IInvestmntListState;
}

export interface IInvestmntListState {
    listaInvestimentos: IInvestmentListItemState[];
}

export interface IInvestmentListItemState {
    nome: string;
    objetivo: string;
    saldoTotal: number;
    indicadorCarencia: string;
    acoes: Array<IFinancialStocksState>;
}

export interface IFinancialStocksState {
    id: string;
    nome: string;
    percentual: number;
}
