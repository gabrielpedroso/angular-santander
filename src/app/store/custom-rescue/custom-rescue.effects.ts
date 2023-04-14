import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CustomRescueActions from './custom-rescue.actions';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomRescueEffects {
    save$ = createEffect(() => this.actions$.pipe(
        ofType(CustomRescueActions.save_investment),
        pipe(
            map(({ payload }) => {
                return CustomRescueActions.save_investment_success({ payload })
            })
        )
    ));

    constructor(private actions$: Actions) { }
}