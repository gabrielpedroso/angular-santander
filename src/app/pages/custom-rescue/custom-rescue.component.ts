import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { SuccessModalComponent } from '../../components/success-modal/success-modal.component';
import { ErrorModalComponent } from '../../components/error-modal/error-modal.component';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
  customRescue$ = this.store.pipe(select(getCustomRescue));
  investmentItem: IInvestmentListItemState;
  tableForm: FormGroup = new FormGroup({});

  constructor(
    private store: Store,
    private fb: FormBuilder,
    public router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.customRescue$.subscribe((state) => this.investmentItem = state);

    this.tableForm = this.fb.group({
      investments: this.fb.array([]),
    });

    this.investmentItem.acoes.forEach((investment) => {
      this.investments.push(
        this.fb.group({
          id: investment.id,
          action: investment.nome,
          accumulatedBalance: this.investmentItem.saldoTotal * (investment.percentual / 100),
          valueToRedeem: [''],
        })
      );
    });
  }

  get investments(): FormArray {
    return this.tableForm.get('investments') as FormArray;
  }

  formatMoney(value: number): string {
    return new Intl.NumberFormat('pt-Br', { currency: 'BRL', style: 'currency' }).format(value);
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

  get totalValue(): number {
    let total: number = 0;

    for (const obj in this.investments.value) {
      const { valueToRedeem } = this.investments.value[obj];
      total += Number(valueToRedeem);
    }

    return total;
  }

  showErro(correctId: string): boolean {
    let show = false;

    for (const obj in this.investments.value) {
      const { id, valueToRedeem, accumulatedBalance } = this.investments.value[obj];

      if (id === correctId) {
        return valueToRedeem > accumulatedBalance;
      }
    }

    return show;
  }

  goToInvestmentList() {
    this.router.navigate(['']);
  }

  openModal() {
    const x = this.investments.value.filter((investment: any) => investment.valueToRedeem > investment.accumulatedBalance);

    if (x.length) {
      this.dialog.open(ErrorModalComponent, { width: '623px', data: x });
    } else {
      this.dialog.open(SuccessModalComponent, { width: '623px' });
    }
  }
}
