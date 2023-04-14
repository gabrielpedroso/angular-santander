import { createAction, props } from "@ngrx/store";
import { AppStateInterface } from "./investment-list.state";

const prefix = '@investment-list';
const ACTION_FETCH = `${prefix}.FETCH`;
const ACTION_FETCH_SUCCESS = `${prefix}.FETCH_SUCCESS`;

export const fetch = createAction(ACTION_FETCH);
export const fetch_success = createAction(ACTION_FETCH_SUCCESS, props<{ payload: AppStateInterface }>());

