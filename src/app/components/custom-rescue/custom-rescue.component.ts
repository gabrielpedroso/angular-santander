import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InvestmentStateInterface } from 'src/app/store/app.state';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Component({
  selector: 'app-custom-rescue',
  templateUrl: './custom-rescue.component.html',
  styleUrls: ['./custom-rescue.component.scss']
})
export class CustomRescueComponent implements OnInit {
  customRescue$: Observable<InvestmentStateInterface>;
  displayedColumns: string[] = ['action', 'accumulatedBalance', 'valueToRedeem'];
  investment: InvestmentStateInterface;

  constructor(
    public dialog: MatDialog,
    private store: Store<{ customRescueReducer: InvestmentStateInterface }>
  ) { 
    this.customRescue$ = this.store.select('customRescueReducer');
  }

  ngOnInit(): void {
    this.customRescue$.subscribe((state) => this.investment = state);
  }

  openSuccessModal() {
    this.dialog.open(SuccessModalComponent, { width: '623px' });
  }

  openErrorModal() {
    this.dialog.open(ErrorModalComponent, { width: '623px' });
  }
}
