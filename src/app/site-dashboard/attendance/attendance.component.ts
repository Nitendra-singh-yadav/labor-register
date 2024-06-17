import { Component, OnInit } from '@angular/core';
import { ILabour } from '../site-labours/site-labours.component';
import { select, Store } from '@ngrx/store';
import { getAttendanceListSelect, getCalenderDateListSelect, getCalenderSelectedMonth, RootReducerState } from '../../store/reducers';
import { debounceTime, map, mergeMap, Observable, of } from 'rxjs';
import { calenderActions } from '../../store/actions/calender.actions';
import { ActivatedRoute } from '@angular/router';
import { ILabourAttendance } from '../../store/reducers/calender.reducer';
import { MatDialog } from '@angular/material/dialog';
import { EditAttendanceComponent } from './edit-attendance/edit-attendance.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit{
  labours: ILabourAttendance[] = [];
  labourAttendances: Observable<ILabourAttendance[]>;
  columns = ['name'];
  selectedDate!: Observable<Date>;
  dataSource = [
    {name: 'Nirahu', id: 12, attendance: {
      '2024-06-20': {payment: 1000, status: 'P'}
    }}
  ];
  selectedMonthCols: Observable<string[]>;
  constructor(private store: Store<RootReducerState>, private activatedRoute: ActivatedRoute, private dialog: MatDialog) {
    // const days = this.generateMonthCalander(2024, 5);
    // console.log(days);
    // this.columns = [...this.columns, ...days];
    this.selectedDate = this.store.select(getCalenderSelectedMonth)
    // this.selectedDate.subscribe(sel=>{
    //   console.log('sleceted data', sel);
    // });
    this.selectedMonthCols = this.store.select(getCalenderDateListSelect).pipe(map(el=>[...this.columns, ...el]));
    this.store.dispatch(calenderActions.changeMonth({date: new Date()}));
    // this.columns = [ ...this.columns, this.store.pipe(select(getAttendanceListSelect()))]
    this.labourAttendances = this.store.select(getAttendanceListSelect)
  }

  ngOnInit(): void {
    this.selectedDate.pipe(debounceTime(1000)).subscribe(month => {
      console.log('selectedc date changed');
      
      this.store.dispatch(calenderActions.listAttendance({date: month, siteId: this.activatedRoute.snapshot.paramMap.get('id') || ''}))
    });
  }

  generateMonthCalander(year: number, month: number){
    const noDays = new Date(year, month+1, 0).getDate();
    const dates = Array.from({
      length: noDays},
      (_, i) => new Date(year, month, i+2).toISOString().slice(0,10)
    )
    return dates
  }

  previous(){
    this.store.dispatch(calenderActions.decreaseMonth());
  }

  next(){
    this.store.dispatch(calenderActions.increaseMonth());
  }
  editAttendance(data: ILabourAttendance, day: string){
    this.dialog.open(EditAttendanceComponent, {width: '400px', data: {row: data, day}})
  }
}

// export interface ILabourAttendance{
//   attendance: string[];
//   details?: ILabour
// }

export interface IAttendance{
  id: string;
  date: string;
  payment?: IPayment;
  labourId: ILabour['id'];
  status: EAttendance;
  description?: string;
}

export interface IPayment{
  amount: number;
  description: string;
  date?: string;
}

export enum EAttendance{
  'P',
  'A'
}