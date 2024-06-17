import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {attendanceActions, calenderActions} from '../actions/calender.actions';
import { catchError, concatMap, debounceTime, map, mergeMap, of, withLatestFrom } from "rxjs";
import { ApiService } from "../../services/api.service";
import { Store } from "@ngrx/store";
import { getCalenderStoredStateSelect, RootReducerState } from "../reducers";

@Injectable()
export class AttendanceEffects {
    constructor(private actions$: Actions, private api: ApiService, private store: Store<RootReducerState>) {}

    listAttendance$ = createEffect(()=> this.actions$.pipe(
        ofType(calenderActions.listAttendance),
        debounceTime(1000),
        withLatestFrom(this.store.select(getCalenderStoredStateSelect)),
        mergeMap(([action, storedState])=>{
            const date = new Date(action.date)
            const year = date.getFullYear();
            const month =date.getMonth();
            const year_month = year + '' + month;
            if(storedState[year_month]){
                console.log('not calling api');
                
               return of(calenderActions.listAttendanceSuccess({attendance: JSON.parse(JSON.stringify(storedState[year_month]))}))
            }
            console.log('calling api');
            
            return of([{name: 'Nirahu', id: 12, attendance: {
                '2024-06-20': {payment: 1000, status: 'P'}
              }}])//this.api.getAttendance(action.siteId, action.date)
            .pipe(
                map(attendances => {
                    return calenderActions.listAttendanceSuccess({attendance: attendances})}),
                catchError(error=>{
                    return of(calenderActions.listAttendanceFailed(error))})
            )
        })
    ));

    updateAttendance$ = createEffect(()=> this.actions$.pipe(
        ofType(attendanceActions.updateAttendance),
        // debounceTime(1000),
        concatMap((action)=>{
            const date = new Date(action.row.date)
           
            
            return of({success: true})//this.api.getAttendance(action.siteId, action.date)
            .pipe(
                map(data => {
                    return attendanceActions.updateAttendanceSuccess({row: action.row})}),
                catchError(error=>{
                    return of(attendanceActions.updateAttendanceFailure(error))})
            )
        })
    ));
    // markAttendance = createEffect(() => this.actions$.pipe(
    //     // ofType(calenderActions.)
    // ))


}