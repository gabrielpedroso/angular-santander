import { createReducer, on } from "@ngrx/store";
import { ResponseStateInterface } from "./app.state";
import * as AppActions from './app.actions';

export const initialState: ResponseStateInterface = {
    response: {
        status: '',
        data: {
            listaInvestimentos: []
        }
    }
};

export const appReducer = createReducer(initialState,
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

