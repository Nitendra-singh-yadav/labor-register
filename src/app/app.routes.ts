import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'sites', loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path: '', loadChildren: () => import('./prelogin/prelogin.module').then(m=>m.PreloginModule)},
    {path: '**', redirectTo: ''}
];
