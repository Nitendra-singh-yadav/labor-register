import { createReducer, on } from "@ngrx/store";
import { sidenavAction } from "../actions/userinteraction.actions";

export const initialState: boolean = false;
export const sidenavReducer = createReducer(initialState,
    on(sidenavAction, (state) => !state)
);