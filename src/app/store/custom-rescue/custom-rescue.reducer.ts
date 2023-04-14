import { createReducer, on } from "@ngrx/store";
import * as CustomRescueAction from "./custom-rescue.actions";
import { InvestmentStateInterface } from "src/app/store/app.state";

const initialState: InvestmentStateInterface = {
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