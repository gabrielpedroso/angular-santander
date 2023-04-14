import { createReducer, on } from "@ngrx/store";
import { ResponseStateInterface } from "./investment-list.state";
import * as AppActions from './investment-list.actions';

export const initialState: ResponseStateInterface = {
    response: {
        status: '',
        data: {
            listaInvestimentos: []
        }
    }
};

export const investmentListReducer = createReducer(initialState,
    on(AppActions.fetch, () => ({
        ...initialState,
    })),

    on(AppActions.fetch_success, (state, { payload }) => ({
        ...state,
        response: {
            status: payload.status,
            data: payload.data,
        }
    })),
);
