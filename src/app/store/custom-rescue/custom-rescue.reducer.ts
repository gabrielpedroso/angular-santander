import { createReducer, on } from "@ngrx/store";
import { IInvestmentListItemState } from "../investment-list/investment-list.state";
import { saveInvestment, saveInvestmentError, saveInvestmentSuccess } from "./custom-rescue.actions";

const initialState: IInvestmentListItemState = {
    nome: '',
    objetivo: '',
    saldoTotal: 0,
    indicadorCarencia: '', 
    acoes: [],
}

export const customRescueReducer = createReducer(initialState,
    on(saveInvestment, (state) => ({
        ...state,
    })),

    on(saveInvestmentSuccess, (state, { payload }) => ({
        ...state,
        ...payload,
    })),

    on(saveInvestmentError, (state) => ({
        ...state,
    })),
);