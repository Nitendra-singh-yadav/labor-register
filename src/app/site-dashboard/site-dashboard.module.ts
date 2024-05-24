import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHomeComponent } from './site-home/site-home.component';
import { SiteLaboursComponent } from './site-labours/site-labours.component';
import { AddLabourComponent } from './add-labour/add-labour.component';
import { PaymentsComponent } from './payments/payments.component';
import { SettlementComponent } from './settlement/settlement.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { SettlePopupComponent } from './settle-popup/settle-popup.component';
import { UpdatePopupComponent } from './update-popup/update-popup.component';

const routes: Routes = [
  {path: 'labours', component: SiteLaboursComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: '', component: SiteHomeComponent},
  {path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    SiteHomeComponent,
    SiteLaboursComponent,
    AddLabourComponent,
    PaymentsComponent,
    SettlementComponent,
    SettlePopupComponent,
    UpdatePopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class SiteDashboardModule { }
