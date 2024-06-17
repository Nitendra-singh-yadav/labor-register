import { createActionGroup, props } from "@ngrx/store";
import { ILabour } from "../../site-dashboard/site-labours/site-labours.component";

export const labourActionGroup = createActionGroup({
    source: 'Labour',
    events: {
        'List Labour': props<{labours: ILabour[]}>(),
        'List Labour Success': props<{labours: ILabour[]}>(),
        'List Labour Failure': props<{error: any}>(),
        'Add Labour': props<{labour: ILabour}>(),
        'Add Labour success': props<{labour: ILabour}>(),
        'Add Labour failure': props<{labour: ILabour}>(),
        'Remove Labour': props<{id: string}>(),
        'Remove Labour success': props<{id: string}>(),
        'Remove Labour failure': props<{id: string}>()
    }
});