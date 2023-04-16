import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InvestmentStateInterface } from 'src/app/store/app.state';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { ErrorModalComponent } from '../error-modal/error-modal.component';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-rescue',
  templateUrl: './custom-rescue.component.html',
  styleUrls: ['./custom-rescue.component.scss']
})
export class CustomRescueComponent implements OnInit {
  customRescue$: Observable<InvestmentStateInterface>;
  displayedColumns: string[] = ['action', 'accumulatedBalance', 'valueToRedeem'];
  investment: InvestmentStateInterface;
  thisIsMyForm;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private store: Store<{ customRescueReducer: InvestmentStateInterface }>
  ) { 
    this.customRescue$ = this.store.select('customRescueReducer');
    this.thisIsMyForm = new FormGroup({
      formArrayName: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.customRescue$.subscribe((state) => this.investment = state);
    this.buildForm();
  }

  buildForm() {
    const controlArray = this.thisIsMyForm.get('formArrayName') as FormArray;

    Object.keys(this.investment.acoes).forEach((i) => {
      controlArray.push(
        this.formBuilder.group({
          id: i,
          action:this.investment.acoes[parseInt(i)].nome,
          accumulatedBalance: this.investment.saldoTotal * (this.investment.acoes[parseInt(i)].percentual / 100),
          valueToRedeem: new FormControl({ value: '', disabled: false })
        })
      )
    });
  }

  openModal() {
    const test = this.thisIsMyForm.value.formArrayName?.filter((value: any) => value.valueToRedeem > value.accumulatedBalance);
    
    if (test?.length) {
      this.dialog.open(ErrorModalComponent, { width: '623px', data: test });
    } else {
      this.dialog.open(SuccessModalComponent, { width: '623px' });
    }
  }

  getSomaTotal() {
    let soma = 0;

    this.thisIsMyForm.value.formArrayName?.forEach((value: any) => {
      soma += Number(value.valueToRedeem);
    })

    return soma;
  }

  mostrar(id: number) {
    let show = false;

    this.thisIsMyForm.value.formArrayName?.forEach((value: any) => {
      if (value.id == id)
        show = value.valueToRedeem > value.accumulatedBalance;
    });

    return show;
  }
}
