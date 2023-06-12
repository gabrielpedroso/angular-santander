import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { SuccessModalComponent } from '../../components/success-modal/success-modal.component';
import { ErrorModalComponent } from '../../components/error-modal/error-modal.component';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IInvestmentListItemState } from 'src/app/store/investment-list/investment-list.state';
import { getCustomRescue } from 'src/app/store/custom-rescue/custom-rescue.selector';
import { Router } from '@angular/router';

import { IInformationCard } from 'src/app/features/information-card/information-card';

@Component({
  selector: 'app-custom-rescue',
  templateUrl: './custom-rescue.component.html',
  styleUrls: ['./custom-rescue.component.scss']
})
export class CustomRescueComponent implements OnInit {
  displayedColumns: string[] = ['action', 'accumulatedBalance', 'valueToRedeem'];
  customRescue$ = this.store.pipe(select(getCustomRescue));
  thisIsMyForm = new FormGroup({
    formArrayName: this.formBuilder.array([])
  });
  investmentItem: IInvestmentListItemState;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private store: Store,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.customRescue$.subscribe((state) => this.investmentItem = state);
    this.buildForm();
  }

  buildForm() {
    const controlArray = this.thisIsMyForm.get('formArrayName') as FormArray;

    Object.keys(this.investmentItem.acoes).forEach((i) => {
      controlArray.push(
        this.formBuilder.group({
          id: i,
          action:this.investmentItem.acoes[parseInt(i)].nome,
          accumulatedBalance: this.investmentItem.saldoTotal * (this.investmentItem.acoes[parseInt(i)].percentual / 100),
          valueToRedeem: new FormControl({ value: null, disabled: false })
        })
      )
    });
  }

  openModal() {
    const Investmentarray = this.thisIsMyForm.value.formArrayName?.filter((value: any) => value.valueToRedeem > value.accumulatedBalance);

    if (Investmentarray?.length) {
      this.dialog.open(ErrorModalComponent, { width: '623px', data: Investmentarray });
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

  formatMoney(value: number): string {
    return new Intl.NumberFormat('pt-Br', { currency: 'BRL', style: 'currency' }).format(value);
  }

  get hasValue() {
    return this.getSomaTotal() > 0;
  }

  goToInvestmentList() {
    this.router.navigate(['']);
  }

  get dataCard(): IInformationCard[] {
    const items: IInformationCard[] = [
      {
        icon: 'fa-user',
        title: 'Nome',
        text: this.investmentItem.nome,
      },
      {
        icon: 'fa-chart-line',
        title: 'Objetivo',
        text: this.investmentItem.objetivo,
      },
      {
        icon: 'fa-dollar-sign',
        title: 'Saldo Total',
        text: this.formatMoney(this.investmentItem.saldoTotal),
      },
    ];

    return items;
  }
}
