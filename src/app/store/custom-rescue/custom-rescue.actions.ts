import { createAction, props } from "@ngrx/store";
import { IInvestmentListItemState } from "../investment-list/investment-list.state";

export const saveInvestment = createAction('[Investment] Save Investment', props<{ payload: IInvestmentListItemState }>());
export const saveInvestmentSuccess = createAction('[Investment] Save Investment Success', props<{ payload: IInvestmentListItemState }>());
export const saveInvestmentError = createAction('[Investment] Save Investment Error');
