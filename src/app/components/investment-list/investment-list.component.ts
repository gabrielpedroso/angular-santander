import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ResponseStateInterface } from 'src/app/store/investment-list/investment-list.state';
import * as AppActions from '../../store/investment-list/investment-list.actions';
import * as CustomRescue from '../../store/custom-rescue/custom-rescue.actions';
import { InvestmentStateInterface } from 'src/app/store/app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'objective', 'currentBalance'];
  investment$: Observable<ResponseStateInterface>;
  customRescue$: Observable<InvestmentStateInterface>;
  dataSource: Array<InvestmentStateInterface> = [];

  constructor(
    public router: Router,
    private store: Store<{ 
      investmentListReducer: ResponseStateInterface, 
      customRescueReducer: InvestmentStateInterface 
    }>) { 
    this.investment$ = this.store.select('investmentListReducer');
    this.customRescue$ = this.store.select('customRescueReducer');
  }

  ngOnInit(): void {
    this.store.dispatch(AppActions.fetch());
    this.investment$.subscribe(state => this.dataSource = state.response.data.listaInvestimentos);
  }

  goToDetail(investment: InvestmentStateInterface) {
    this.store.dispatch(CustomRescue.save_investment({ payload: investment }));
    this.router.navigate(['teste']);
  }
}
