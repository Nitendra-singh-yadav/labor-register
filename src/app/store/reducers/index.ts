import * as fromSite from './site.reducers'
import * as fromSiteSelector from './../selectors/site.selectors'

import * as fromLabour from './labour.reducers'
import * as fromLabourSelector from './../selectors/labour.selectors'
import { ActionReducerMap, createSelector } from '@ngrx/store'

export interface RootReducerState{
    sites: fromSite.ISiteReducerState,
    labours: fromLabour.ILabourReducerState
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
    labours: fromLabour.labourReducer,
    sites: fromSite.siteReducer
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
