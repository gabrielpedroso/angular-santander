import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IInvestmentListItemState, IResponseState } from 'src/app/store/investment-list/investment-list.state';
import { Router } from '@angular/router';
import { loadInvestmentList } from 'src/app/store/investment-list/investment-list.actions';
import { saveInvestment } from 'src/app/store/custom-rescue/custom-rescue.actions';
import { getInvestmentList } from 'src/app/store/investment-list/investment-list.selector';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent {
  displayedColumns: string[] = ['name', 'objective', 'currentBalance'];
  investmentList$ = this.store.pipe(select(getInvestmentList));

  constructor(
    public router: Router,
    private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadInvestmentList());
  }

  goToDetail(investment: IInvestmentListItemState) {
    this.store.dispatch(saveInvestment({ payload: investment }));
    this.router.navigate(['teste']);
  }
}
