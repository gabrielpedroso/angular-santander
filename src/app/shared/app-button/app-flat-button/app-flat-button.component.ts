import { Component } from '@angular/core';
import { AppButtonComponent } from '../app-button.component';

@Component({
  selector: 'app-flat-button',
  templateUrl: './app-flat-button.component.html',
  styleUrls: [
    '../app-button.component.scss',
    './app-flat-button.component.scss',
  ]
})
export class AppFlatButtonComponent extends AppButtonComponent { }
