import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent {
  constructor(
    public dialogRef: MatDialogRef<SuccessModalComponent>,
    public router: Router,
  ) { }

  close() {
    this.dialogRef.close();
  }

  goToInvestmentList() {
    this.router.navigate(['']);
    this.close();
  }
}
