import { createReducer, on } from "@ngrx/store";
import { labourActionGroup } from "../actions/labour.actions";
import { ILabour } from "../../site-dashboard/site-labours/site-labours.component";

export interface ILabourReducerState{
    loading: boolean;
    loaded: boolean;
    error: boolean;
    entities: {[id: string]: ILabour};
    ids: string[]
}

export const initialState: ILabourReducerState = {
    entities: {},
    error: false,
    ids: [],
    loaded: false,
    loading: false
}

export const labourReducer = createReducer(initialState, 
    on(labourActionGroup.addLabour, (state, {labour}) =>{
        return {...state, ...{...state.entities,[labour.id]: labour}}
    }),
    on(labourActionGroup.removeLabour, (state, {id}) =>{
        const ids = state.ids.filter(thisid => thisid != id);
        const entities = state.entities;
        delete entities[id];
        return {...state, ids, entities};
    }),
    on(labourActionGroup.listLabour, (state, {labours}) =>{
        const existingEntities = state.entities;
        for(const lb of labours){
            existingEntities[lb.id] = lb;
        }
        return {...state, ...{entities: existingEntities, ids: Object.keys(existingEntities)}, loaded: true, loading: false, error: false}
    })
)
