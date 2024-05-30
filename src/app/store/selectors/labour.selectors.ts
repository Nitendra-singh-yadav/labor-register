import { createSelector } from "@ngrx/store";
import { ILabourReducerState } from "../reducers/labour.reducers";

export const getLoading = (state: ILabourReducerState) => state.loading;
export const getLoaded = (state: ILabourReducerState) => state.loaded;
export const getError = (state: ILabourReducerState) => state.error;
export const getEntities = (state: ILabourReducerState) => state.entities;
export const getIds = (state: ILabourReducerState) => state.ids;
export const getLabours = createSelector(getEntities,
    (entites) => {
        const lbrs = [];
        for(const lb in entites){
            lbrs.push(entites[lb]);
        }
        return lbrs;
    }
)