import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadInvestmentList } from 'src/app/store/investment-list/investment-list.actions';
import { getInvestmentList } from 'src/app/store/investment-list/investment-list.selector';
import { IInvestmentListItemState } from 'src/app/store/investment-list/investment-list.state';

import { saveInvestment } from 'src/app/store/custom-rescue/custom-rescue.actions';

import { MonetaryShortage } from 'src/app/core/enums/monetary-shortage.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'objective', 'currentBalance'];
  investmentList$: Observable<IInvestmentListItemState[]> = this.store.pipe(select(getInvestmentList));

  constructor(
    private store: Store,
    private router: Router,) { }

  ngOnInit(): void {
    this.store.dispatch(loadInvestmentList());
  }

  goToDetail(investment: IInvestmentListItemState) {
    this.store.dispatch(saveInvestment({ payload: investment }));

    if (investment.indicadorCarencia == MonetaryShortage.NO)
      this.router.navigate(['resgate-personalizado']);
  }

  formatMoney(value: number) {
    return new Intl.NumberFormat('pt-Br', { currency: 'BRL', style: 'currency' }).format(value);
  }
}
