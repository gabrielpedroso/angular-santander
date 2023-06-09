
export interface IResponseState {
    response: IAppState;
    isLoading: boolean;
}

export interface IAppState {
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
