import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InvestmentInterface } from 'src/app/models/interfaces/investment.model';

@Component({
  selector: 'app-custom-rescue',
  templateUrl: './custom-rescue.component.html',
  styleUrls: ['./custom-rescue.component.scss']
})
export class CustomRescueComponent implements OnInit {
  customRescue$: Observable<InvestmentInterface>;
  displayedColumns: string[] = ['action', 'accumulatedBalance', 'valueToRedeem'];
  investment: InvestmentInterface;

  constructor(private store: Store<{ customRescueReducer: InvestmentInterface }>) { 
    this.customRescue$ = this.store.select('customRescueReducer');
  }

  ngOnInit(): void {
    this.customRescue$.subscribe((state) => this.investment = state);
  }
}
