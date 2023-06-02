import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './app-title.component.html',
  styleUrls: ['./app-title.component.scss']
})
export class AppTitleComponent {
  @Input() text: string = '';
}
