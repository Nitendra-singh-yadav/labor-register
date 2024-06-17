import { ICalenderState, IUpdateAttendance } from "../reducers/calender.reducer";

export const getDateList = (state: ICalenderState) => {
    console.log('333333333333', state);
    
    return state.dateList};
export const getAttendanceList = (state: ICalenderState) => {
    console.log('222222222222', state);

    return state.labourAttendanceList;
};
export const getSelectedMonth = (state: ICalenderState) => state.selectedMonth;
export const getCalenderStoredState = (state: ICalenderState) => state.storedState;

export const getAttendanceUpdateLoading = (state: IUpdateAttendance) => state.loading;
export const getAttendanceUpdateError = (state: IUpdateAttendance) => state.error;
