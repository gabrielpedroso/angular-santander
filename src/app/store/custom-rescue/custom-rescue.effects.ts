import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { saveInvestment, saveInvestmentSuccess } from "./custom-rescue.actions";

@Injectable()
export class CustomRescueEffects {
    save$ = createEffect(() => this.actions$.pipe(
        ofType(saveInvestment),
        pipe(
            map(({ payload }) => {
                return saveInvestmentSuccess({ payload })
            }),
        )
    ));

    constructor(private actions$: Actions) { }
}