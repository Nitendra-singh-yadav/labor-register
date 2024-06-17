import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IAttendanceUpdateObject, ILabourAttendance, IUpdateAttendance } from "../reducers/calender.reducer";

export const calenderActions = createActionGroup({
    source: 'calender',
    events: {
        'change month': props<{date: Date}>(),
        'increase month': emptyProps(),
        'decrease month': emptyProps(),
        'calender': props<{days: any[]}>(),
        'List attendance': props<{date: Date, siteId: string}>(),
        'List attendance failed': props<{error: any}>(),
        'List attendance success': props<{attendance: any[]}>()
    }
})

export const attendanceActions = createActionGroup({
    source: 'attendance', 
    events: {
        'update attendance': props<{row: IAttendanceUpdateObject}>(),
        'update attendance success': props<{row: IAttendanceUpdateObject}>(),
        'update attendance failure': props<{error: any}>(),
        'mark bulk attendance': props<{date: Date, ids: string[]}>(),
        'mark bulk attendance success': props<{date: Date, ids: string[]}>(),
        'mark bulk attendance failure': props<{error: any}>()
    }
})