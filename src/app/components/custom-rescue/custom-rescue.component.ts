import { Component } from '@angular/core';

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
export class CustomRescueComponent {
  displayedColumns: string[] = ['action', 'accumulatedBalance', 'valueToRedeem'];
  dataSource = MOCK;
}
