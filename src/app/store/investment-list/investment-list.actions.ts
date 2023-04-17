import { createAction, props } from "@ngrx/store";
import { IAppState } from "./investment-list.state";

export const loadInvestmentList = createAction('[Investment List] Load Investment List');
export const loadInvestmentListSuccess = createAction('[Investment List] Load Investment List Success', props<{ response: IAppState }>());
export const loadInvestmentListError = createAction('[Investment List] Load Investment List Error');
