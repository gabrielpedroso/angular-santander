import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IInvestmentListItemState } from '../investment-list/investment-list.state';

export const getCustomRescueState = createFeatureSelector<IInvestmentListItemState>('customRescueReducer');

export const getCustomRescue = createSelector(
    getCustomRescueState,
    (state: IInvestmentListItemState) => state,
)
