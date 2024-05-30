import { createReducer, on } from "@ngrx/store";
import { ISite, SitePageActions } from "../actions/site.actions";

export interface ISiteReducerState{
    loading: boolean;
    loaded: boolean;
    error: boolean;
    entities: {[id: string]: any},
    ids: string[];
    selectedSiteId?: ISite['id']
}

export const initialState: ISiteReducerState = {
    loading: false,
    loaded: false,
    error: false,
    entities: {},
    ids: []
}
export const siteReducer = createReducer(initialState,
    on(SitePageActions.addSite, (state, {site})=>{
        return {...state, ...{site}}
    }),
    on(SitePageActions.removeSite, (state, {id})=>{
        const ids = state.ids.filter(thisid => thisid != id);
        const entities = state.entities;
        delete entities[id];
        return {...state, ...{ids}, ...{entities}}
    }),
    on(SitePageActions.listSites, (state, {sites})=>{
        const entities: any = {};
        const ids = [];
        for(const site of sites){
            entities[site.id] = site;
            ids.push(site.id);
        }
        return {...state, ...{entities, ids}, loaded: true, loading: false, error: false}
    })
)