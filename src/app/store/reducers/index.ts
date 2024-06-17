import * as fromSite from './site.reducers'
import * as fromSiteSelector from './../selectors/site.selectors'

import * as fromLabour from './labour.reducers'
import * as fromLabourSelector from './../selectors/labour.selectors'

import * as fromCalender from './calender.reducer'
import * as fromCalenderSelector from './../selectors/calender.selector'
import { ActionReducerMap, createSelector } from '@ngrx/store'

export interface RootReducerState{
    sites: fromSite.ISiteReducerState,
    labours: fromLabour.ILabourReducerState,
    calender: fromCalender.ICalenderState
    attendanceUpdate: fromCalender.IUpdateAttendance
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    labours: fromLabour.labourReducer,
    sites: fromSite.siteReducer,
    calender: fromCalender.calenderReducer,
    attendanceUpdate: fromCalender.attendanceReducer
}

export const getSiteState = (state: RootReducerState) => state.sites;

export const getSiteLoadedSelect = createSelector(getSiteState, fromSiteSelector.getLoaded);
export const getSiteLoadingSelect = createSelector(getSiteState, fromSiteSelector.getLoading);
export const getSiteErrorSelect = createSelector(getSiteState, fromSiteSelector.getError);
export const getSiteEntitiesSelect = createSelector(getSiteState, fromSiteSelector.getEntities);
export const getSitesSelect = createSelector(getSiteState, fromSiteSelector.getSites);


export const getLabourState = (state: RootReducerState) => state.labours;

export const getLabourLoadedSelect = createSelector(getLabourState, fromLabourSelector.getLoaded);
export const getLabourLoadingSelect = createSelector(getLabourState, fromLabourSelector.getLoading);
export const getLabourErrorSelect = createSelector(getLabourState, fromLabourSelector.getError);
export const getLabourEntitiesSelect = createSelector(getLabourState, fromLabourSelector.getEntities);
export const getLaboursSelect = createSelector(getLabourState, fromLabourSelector.getLabours);

export const getCalenderState = (state: RootReducerState) => state.calender;

export const getCalenderSelectedMonth = createSelector(getCalenderState, fromCalenderSelector.getSelectedMonth);
export const getAttendanceListSelect = createSelector(getCalenderState, fromCalenderSelector.getAttendanceList);
export const getCalenderDateListSelect = createSelector(getCalenderState, fromCalenderSelector.getDateList);
export const getCalenderStoredStateSelect = createSelector(getCalenderState, fromCalenderSelector.getCalenderStoredState);


export const getAttendanceState = (state: RootReducerState) => state.attendanceUpdate;

export const getAttendanceUpdateLoadingSelect = createSelector(getAttendanceState, fromCalenderSelector.getAttendanceUpdateLoading);
export const getAttendanceUpdateErrorSelect = createSelector(getAttendanceState, fromCalenderSelector.getAttendanceUpdateError);
