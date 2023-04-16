import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IResponseState } from './investment-list.state';

export const getInvestmentListState = createFeatureSelector<IResponseState>('investmentListReducer');

export const getInvestmentList = createSelector(
    getInvestmentListState,
    (state: IResponseState) => state.response.data.listaInvestimentos,
);
