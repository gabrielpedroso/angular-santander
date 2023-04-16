import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from "../../services/app.service";
import { exhaustMap, catchError, map } from "rxjs";
import { loadInvestmentList, loadInvestmentListError, loadInvestmentListSuccess } from "./investment-list.actions";

@Injectable()
export class InvestmentListEffects {
    fetch$ = createEffect(() => this.actions$.pipe(
        ofType(loadInvestmentList),
        exhaustMap(() => {
            return this.service.fetch().pipe( 
                map((result) => {
                    return loadInvestmentListSuccess({ response: result.response })
                }),
            )
        })
    ));

    constructor(
        private actions$: Actions,
        private service: AppService,
    ) { }
}