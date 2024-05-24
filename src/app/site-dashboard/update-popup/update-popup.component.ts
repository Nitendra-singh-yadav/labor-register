import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ILabour } from '../site-labours/site-labours.component';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styleUrl: './update-popup.component.scss'
})
export class UpdatePopupComponent {
  constructor(private dialogRef: MatDialogRef<UpdatePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: ILabour) {
    
  }
}
