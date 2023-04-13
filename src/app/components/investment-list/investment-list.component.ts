import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InvestmentStateInterface, ResponseStateInterface } from 'src/app/store/app.state';
import * as AppActions from '../../store/app.actions';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'objective', 'currentBalance'];
  investment$: Observable<ResponseStateInterface>;
  dataSource: Array<InvestmentStateInterface> = [];

  constructor(private store: Store<{ app: ResponseStateInterface }>) { 
    this.investment$ = this.store.select('app');
  }

  ngOnInit(): void {
    this.store.dispatch(AppActions.fetch());
    this.investment$.subscribe(state => this.dataSource = state.response.data.listaInvestimentos);
  }
}
