import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  templateUrl: './app-icon-card.component.html',
  styleUrls: ['./app-icon-card.component.scss']
})
export class AppIconCardComponent {
  @Input() icon: string = '';
  @Input() title: string  = '';
  @Input() text: string  = '';
}
