import { Component, Input } from '@angular/core';
import { IInformationCard } from './information-card';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})
export class InformationCardComponent {
  @Input() items: IInformationCard[] = [];

  get style() {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${this.items.length}, ${100 / this.items.length}%)`,
    };
  }
}
