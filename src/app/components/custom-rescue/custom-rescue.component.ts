import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InvestmentInterface } from 'src/app/models/interfaces/Investment.model';
import * as CustomRescueAction from '../../store/custom-rescue/custom-rescue.actions';

const MOCK =  [
  {
    id: "1",
    nome: "Banco do Brasil (BBAS3)",
    percentual: 28.1
  },
  {
    id: "2",
    nome: "Vale (VALE3)",
    percentual: 20.71
  },
  {
    id: "3",
    nome: "Petrobras (PETR4)",
    percentual: 21.63
  },
  {
    id: "4",
    nome: "Cemig (CMIG3)",
    percentual: 12.41
  },
  {
    id: "5",
    nome: "Oi (OIBR3)",
    percentual: 17.15
  }
]

@Component({
  selector: 'app-custom-rescue',
  templateUrl: './custom-rescue.component.html',
  styleUrls: ['./custom-rescue.component.scss']
})
export class CustomRescueComponent implements OnInit {
  customRescue$: Observable<InvestmentInterface>;
  displayedColumns: string[] = ['action', 'accumulatedBalance', 'valueToRedeem'];
  dataSource = MOCK;
  investment: InvestmentInterface = {
    acoes: [],
    indicadorCarencia: '',
    nome: '',
    objetivo: '',
    saldoTotal: 0,
  };

  constructor(private store: Store<{ customRescueReducer: InvestmentInterface }>) { 
    this.customRescue$ = this.store.select('customRescueReducer');
    
  }

  ngOnInit(): void {
    this.customRescue$.subscribe(state => this.investment = state);
  }
}
