import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from "../services/app.service";
import * as AppActions from './app.actions';
import { exhaustMap, map } from "rxjs";

@Injectable()
export class AppEffects {
    fetch$ = createEffect(() => this.actions$.pipe(
        ofType(AppActions.fetch),
        exhaustMap(() => {
            return this.service.fetch().pipe( 
                map((response) => {
                    return AppActions.fetch_success({ payload: response.response })
                })
            )
        })
    ));

    constructor(
        private actions$: Actions,
        private service: AppService,
    ) { }
}