import { createSelector } from "@ngrx/store";
import { ISiteReducerState } from "../reducers/site.reducers";

export const getLoading = (state: ISiteReducerState) => state.loading;
export const getLoaded = (state: ISiteReducerState) => state.loaded;
export const getError = (state: ISiteReducerState) => state.error;
export const getEntities = (state: ISiteReducerState) => state.entities;
export const getIds = (state: ISiteReducerState) => state.ids;
export const getSites = createSelector(getEntities,
    (entites) => {
        const sites = [];
        for(const site in entites){
            sites.push(entites[site]);
        }
        return sites;
    }
)