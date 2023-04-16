import { createReducer, on } from "@ngrx/store";
import { IResponseState } from "./investment-list.state";
import { loadInvestmentList, loadInvestmentListError, loadInvestmentListSuccess } from "./investment-list.actions";

export const initialState: IResponseState = {
    isLoading: false,
    response: {
        status: '',
        data: {
            listaInvestimentos: [],
        }
    }
};

export const investmentListReducer = createReducer(initialState,
    on(loadInvestmentList, (state) => ({
        ...state,
        isLoading: true,
    })),

    on(loadInvestmentListSuccess, (state, { response }) => ({
        ...state,
        response,
        isLoading: false,
    })),

    on(loadInvestmentListError, (state) => ({
        ...state,
        isLoading: false,
    })),
);
