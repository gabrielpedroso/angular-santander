import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent {
  @Input() lable: string = '';
  @Input() color: string = '';
  @Input() type: string = 'button';
  @Output() onClick = new EventEmitter();

  click() {
    this.onClick.emit();
  }
}
