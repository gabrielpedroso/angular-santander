import { createReducer, on } from "@ngrx/store";
import * as CustomRescueAction from "./custom-rescue.actions";
import { InvestmentInterface } from "src/app/models/interfaces/investment.model";

const initialState: InvestmentInterface = {
    nome: '',
    objetivo: '',
    saldoTotal: 0,
    indicadorCarencia: '', 
    acoes: []
}

export const customRescueReducer = createReducer(initialState,
    on(CustomRescueAction.save_investment_success, (state, { payload }) => ({
        ...payload
    })),
);