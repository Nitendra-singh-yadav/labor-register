import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { sidenavReducer } from './store/reducers/userinteraction.reducers';
import { rootReducer } from './store/reducers';
import { provideEffects } from '@ngrx/effects';
import { AttendanceEffects } from './store/effects/attendance.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch()), provideClientHydration(), provideAnimationsAsync(),
    provideStore({ sidenavStatus: sidenavReducer, ...rootReducer }), provideEffects(AttendanceEffects), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
