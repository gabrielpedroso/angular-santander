import { InvestmentStateInterface } from "src/app/store/app.state";

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
