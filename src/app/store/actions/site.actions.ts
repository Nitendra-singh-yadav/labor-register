import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ILabour } from "../../site-dashboard/site-labours/site-labours.component";

export interface ISite {
    id: string;
    address: string;
    name: string;
    budget?: number;
    labours?: ILabour[];
}

export const SitePageActions = createActionGroup({
    source: 'Sites',
    events:{
        'add site': props<{site: ISite}>(),
        'add site success': props<{site: ISite}>(),
        'add site failure': props<{site: ISite}>(),
        'remove site': props<{id: string}>(),
        'remove site success': props<{id: string}>(),
        'remove site failure': props<{id: string}>(),
        'list sites': props<{sites: ISite[]}>(),
        'list sites success': props<{sites: ISite[]}>(),
        'list sites error': props<{error: any}>(),
        'site selected': props<{siteId: string}>(),
    }
})