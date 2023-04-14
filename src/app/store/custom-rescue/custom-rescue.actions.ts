import { createAction, props } from "@ngrx/store";
import { InvestmentStateInterface } from "src/app/store/app.state";

const prefix = '@custom-rescue';
const ACTION_SAVE_INVESTMENT = `${prefix}.SAVE_INVESTMENT`;
const ACTION_SAVE_INVESTMENT_SUCCESS = `${prefix}.SAVE_INVESTMENT_SUCCESS`;

export const save_investment = createAction(ACTION_SAVE_INVESTMENT, props<{ payload: InvestmentStateInterface }>());
export const save_investment_success = createAction(ACTION_SAVE_INVESTMENT_SUCCESS, props<{ payload: InvestmentStateInterface }>());