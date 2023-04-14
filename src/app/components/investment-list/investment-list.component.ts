import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ResponseStateInterface } from 'src/app/store/investment-list/investment-list.state';
import * as AppActions from '../../store/investment-list/investment-list.actions';
import * as CustomRescue from '../../store/custom-rescue/custom-rescue.actions';
import { InvestmentInterface } from 'src/app/models/interfaces/Investment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'objective', 'currentBalance'];
  investment$: Observable<ResponseStateInterface>;
  customRescue$: Observable<InvestmentInterface>;
  dataSource: Array<InvestmentInterface> = [];

  constructor(
    public router: Router,
    private store: Store<{ 
      investmentListReducer: ResponseStateInterface, 
      customRescueReducer: InvestmentInterface 
    }>) { 
    this.investment$ = this.store.select('investmentListReducer');
    this.customRescue$ = this.store.select('customRescueReducer');
  }

  ngOnInit(): void {
    this.store.dispatch(AppActions.fetch());
    this.investment$.subscribe(state => this.dataSource = state.response.data.listaInvestimentos);
  }

  goToDetail(investment: InvestmentInterface) {
    this.store.dispatch(CustomRescue.save_investment({ payload: investment }));
    this.router.navigate(['teste']);
  }
}
