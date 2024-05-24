import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites/sites.component';
import { SiteComponent } from './site/site.component';
import { NewSiteComponent } from './new-site/new-site.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LayoutComponent } from './layout/layout.component';
import { MatRippleModule } from '@angular/material/core';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: SitesComponent},
      {path: ':siteId', loadChildren: ()=>import('./../site-dashboard/site-dashboard.module').then(m=>m.SiteDashboardModule)},
      {path: '**', redirectTo: ''}
    ]
  }
]

@NgModule({
  declarations: [
    SitesComponent,
    SiteComponent,
    NewSiteComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule
  ]
})
export class DashboardModule { }
