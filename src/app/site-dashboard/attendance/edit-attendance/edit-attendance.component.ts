import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ILabourAttendance, IUpdateAttendance } from '../../../store/reducers/calender.reducer';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { getAttendanceUpdateErrorSelect, getAttendanceUpdateLoadingSelect, RootReducerState } from '../../../store/reducers';
import { Observable } from 'rxjs';
import { attendanceActions } from '../../../store/actions/calender.actions';

@Component({
  selector: 'app-edit-attendance',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './edit-attendance.component.html',
  styleUrl: './edit-attendance.component.scss'
})
export class EditAttendanceComponent {
  attendanceForm!: FormGroup
  loading?: Observable<boolean>;
  error: Observable<string>;
  constructor(public dialogRef: MatDialogRef<EditAttendanceComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {row: ILabourAttendance, day: string},
    private fb: FormBuilder,
    private store: Store<RootReducerState>
  ) {
    console.log(data);
      this.loading = this.store.select(getAttendanceUpdateLoadingSelect);
      this.error = this.store.select(getAttendanceUpdateErrorSelect);
      this.attendanceForm = this.fb.group({
        labourId: [data.row.id],
        date: [data.day, [Validators.required]],
        payment: [data.row.attendance[data.day]?.payment],
        status: [data.row.attendance[data.day]?.status || 'A', [Validators.required]]
      })
      
  }

  update(){
    this.store.dispatch(attendanceActions.updateAttendance({row: this.attendanceForm.value}));
  }
}
