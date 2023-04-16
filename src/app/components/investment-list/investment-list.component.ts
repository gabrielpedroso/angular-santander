import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IInvestmentListItemState, IResponseState } from 'src/app/store/investment-list/investment-list.state';
import { Router } from '@angular/router';
import { loadInvestmentList } from 'src/app/store/investment-list/investment-list.actions';
import { saveInvestment } from 'src/app/store/custom-rescue/custom-rescue.actions';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'objective', 'currentBalance'];
  investment$: Observable<IResponseState>;
  customRescue$: Observable<IInvestmentListItemState>;
  dataSource: Array<IInvestmentListItemState> = [];

  constructor(
    public router: Router,
    private store: Store<{ 
      investmentListReducer: IResponseState, 
      customRescueReducer: IInvestmentListItemState 
    }>) { 
    this.investment$ = this.store.select('investmentListReducer');
    this.customRescue$ = this.store.select('customRescueReducer');
  }

  ngOnInit(): void {
    this.store.dispatch(loadInvestmentList());
    this.investment$.subscribe(state => this.dataSource = state.response.data.listaInvestimentos);
  }

  goToDetail(investment: IInvestmentListItemState) {
    this.store.dispatch(saveInvestment({ payload: investment }));
    this.router.navigate(['teste']);
  }
}
