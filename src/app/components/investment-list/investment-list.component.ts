import { Component } from '@angular/core';

export interface Investment {
  name: string;
  objective: string;
  currentBalance: number
};

const ELEMENT_DATA: Investment[] = [
  { name: 'INVESTIMENTO 1', objective: 'Minha Aposentadoria', currentBalance: 39321.29 },
  { name: 'INVESTIMENTO 1', objective: 'Minha Aposentadoria', currentBalance: 39321.29 },
  { name: 'INVESTIMENTO 1', objective: 'Minha Aposentadoria', currentBalance: 39321.29 },
  { name: 'INVESTIMENTO 1', objective: 'Minha Aposentadoria', currentBalance: 39321.29 },
];

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})
export class InvestmentListComponent {
  displayedColumns: string[] = ['name', 'objective', 'currentBalance'];
  dataSource = ELEMENT_DATA;
}
