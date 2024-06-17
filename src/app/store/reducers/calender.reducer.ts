import { createReducer, on } from "@ngrx/store";
import { attendanceActions, calenderActions } from "../actions/calender.actions";

export interface IAttendanceObject{
    status: string;
    payment: number
}

export interface IAttendanceDay {
    [date: string]: IAttendanceObject
}

export interface ILabourAttendance{
    name: string;
    id: string;
    attendance: IAttendanceDay;
    date?: string;
}

export interface ICalenderState {
    storedState: {
        [month: string]: ILabourAttendance[]
    },
    labourAttendanceList: ILabourAttendance[]
    selectedMonth: Date;
    dateList: string[];
}

const initialState: ICalenderState = {
    labourAttendanceList: [],
    selectedMonth: new Date(),
    dateList: generateMonthCalander(new Date()),
    storedState: {}
}

export interface IAttendanceUpdateObject{
    status: 'P' | 'A';
    payment: string;
    date: string;
    labourId: string;
}

export interface IUpdateAttendance {
    attendance?: IAttendanceUpdateObject
    loading: boolean;
    error: any;
}

const attendanceInitialState: IUpdateAttendance = {
    loading: false,
    error: false
}

export const calenderReducer = createReducer(
    initialState,
    // on(calenderActions.changeMonth, (state, {date})=>{
    //     const newdate = new Date(date);
    //     const dates = generateMonthCalander(newdate);
    //     const newState = {...state, dateList: dates, selectedMonth: date};
    //     const prev_date = state.selectedMonth
    //     const year_month = prev_date.getFullYear() + '' + prev_date.getMonth();
    //     if(state.labourAttendanceList.length){
    //         state.storedState[year_month] = state.labourAttendanceList;
    //     }
    //     if(state.storedState[year_month]){
    //         newState.labourAttendanceList = state.storedState[year_month];
    //     }
    //     newState.selectedMonth = date;
    //     return newState;
    // }),
    on(calenderActions.increaseMonth, (state)=>{
        const date = new Date(state.selectedMonth);
        date.setMonth(date.getMonth() + 1);
        const dates = generateMonthCalander(date);
        const newState = {...state, dateList: dates, selectedMonth: date};
        const prev_date = new Date(state.selectedMonth);
        const year_month = prev_date.getFullYear() + '' + prev_date.getMonth();
        if(state.labourAttendanceList.length){
            newState.storedState = JSON.parse(JSON.stringify(newState.storedState));
            newState.storedState[year_month] = state.labourAttendanceList;
        }
        return newState;
    }),
    on(calenderActions.decreaseMonth, (state)=>{
        const date = new Date(state.selectedMonth);
        date.setMonth(date.getMonth() - 1);
        const dates = generateMonthCalander(date);
        const newState = {...state, dateList: dates, selectedMonth: date};
        const prev_date = new Date(state.selectedMonth);
        const year_month = prev_date.getFullYear() + '' + prev_date.getMonth();
        if(state.labourAttendanceList.length){
            newState.storedState = JSON.parse(JSON.stringify(newState.storedState));
            newState.storedState[year_month] = state.labourAttendanceList;
        }
        return newState;
    }),
    on(calenderActions.listAttendanceSuccess, (state, {attendance})=>{
        const newState = {...state, labourAttendanceList: attendance};
        return newState;
    })
)

export const attendanceReducer = createReducer(
    attendanceInitialState,
    on(attendanceActions.updateAttendance, (state) => {
        console.log('updating attendance');
        return {...state, loading: true}
    }),
    on(attendanceActions.updateAttendanceSuccess, (state, row) =>{
        console.log('update ssuccess');
        return {...state, loading:false, row: row.row};
    }),
    on(attendanceActions.updateAttendanceFailure, (state, row) =>{
        console.log('update failed');
        return {...state, loading: false, error: row.error};
    })
)

function generateMonthCalander(date: Date){
    const year = date.getFullYear();
    const month = date.getMonth();
    const noDays = new Date(year, month + 1, 0).getDate();
    const dates = Array.from({
      length: noDays},
      (_, i) => new Date(year, month, i + 2).toISOString().slice(0,10)
    )
    return dates
  }
