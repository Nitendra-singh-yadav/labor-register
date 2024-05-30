import { Component } from '@angular/core';
import { ILabour } from '../site-labours/site-labours.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent {
  labours: ILabourAttendance[] = [];
  constructor() {
    console.log(this.generateMonthCalander(2024, 4));
    
  }


  generateMonthCalander(year: number, month: number){
    const noDays = new Date(year, month+1, 0).getDate();
    const dates = Array.from({
      length: noDays},
      (_, i) => new Date(year, month, i+1).toISOString()
    )
    return dates
  }
}

export interface ILabourAttendance{
  attendance: string[];
  details?: ILabour
}

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