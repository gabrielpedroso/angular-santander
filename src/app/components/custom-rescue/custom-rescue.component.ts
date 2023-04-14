import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InvestmentStateInterface } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-rescue',
  templateUrl: './custom-rescue.component.html',
  styleUrls: ['./custom-rescue.component.scss']
})
export class CustomRescueComponent implements OnInit {
  customRescue$: Observable<InvestmentStateInterface>;
  displayedColumns: string[] = ['action', 'accumulatedBalance', 'valueToRedeem'];
  investment: InvestmentStateInterface;

  constructor(private store: Store<{ customRescueReducer: InvestmentStateInterface }>) { 
    this.customRescue$ = this.store.select('customRescueReducer');
  }

  ngOnInit(): void {
    this.customRescue$.subscribe((state) => this.investment = state);
  }
}
