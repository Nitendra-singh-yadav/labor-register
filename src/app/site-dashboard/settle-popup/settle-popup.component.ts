import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ILabour } from '../site-labours/site-labours.component';

@Component({
  selector: 'app-settle-popup',
  templateUrl: './settle-popup.component.html',
  styleUrl: './settle-popup.component.scss'
})
export class SettlePopupComponent {
  constructor(private dialogRef: MatDialogRef<SettlePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: ILabour) {
    
  }
}
