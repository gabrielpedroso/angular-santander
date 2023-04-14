import { InvestmentInterface } from "src/app/models/interfaces/investment.model";

export interface ResponseStateInterface {
    response: AppStateInterface;
}

export interface AppStateInterface {
    status: string;
    data: InvestimentListStateInterface;
}

export interface InvestimentListStateInterface {
    listaInvestimentos: Array<InvestmentInterface>;
}
