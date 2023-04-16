import { createAction, props } from "@ngrx/store";
import { INomeADefinir } from "./investment-list.state";

export const loadInvestmentList = createAction('[Investment List] Load Investment List');
export const loadInvestmentListSuccess = createAction('[Investment List] Load Investment List Success', props<{ response: INomeADefinir }>());
export const loadInvestmentListError = createAction('[Investment List] Load Investment List Error');
