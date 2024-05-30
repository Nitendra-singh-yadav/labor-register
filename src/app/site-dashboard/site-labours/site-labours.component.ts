import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettlePopupComponent } from '../settle-popup/settle-popup.component';
import { UpdatePopupComponent } from '../update-popup/update-popup.component';
import { AddLabourComponent } from '../add-labour/add-labour.component';

@Component({
  selector: 'app-site-labours',
  templateUrl: './site-labours.component.html',
  styleUrl: './site-labours.component.scss'
})
export class SiteLaboursComponent {
  labours: ILabour[] = [
    {id: '1', name: 'nirahu', siteName: 'site 1', siteId: '12', balanceAmount: 100, registerdOn: new Date().toISOString(), 
      lastPaid: new Date().toISOString(), settledTill: new Date().toISOString(), isActive: false, 
      registeredByName: 'Nit', registeredBy: '435', registeredFromSite: 'Home', lastPaidAmount: 500, totalPaid: 2000
    }
  ]
  displayedColumns: string[] = [
    'name', 'currentSiteName', 'settledTill', 'lastPaid', 'lastPaidAmount', 'totalPaid', 'balanceAmount', 'actions'
  ]

  constructor(private dialog: MatDialog) {
    
  }

  confirmSettle(row: ILabour){
    const ref = this.dialog.open(SettlePopupComponent, {data: row, width: '300px'});
    ref.afterClosed().subscribe(data=>{
      console.log(data);
      
    })
  }
  
  updatePopUp(row: ILabour){
    this.dialog.open(UpdatePopupComponent, {maxWidth: '500px', minWidth: '300px', data: row}).afterClosed()
    .subscribe(d=>{
      console.log(d);
      
    })
  }

  addLabour(){
    this.dialog.open(AddLabourComponent, {width: '500px'}).afterClosed()
    .subscribe(data=>{

    });
  }
}

export interface ILabour{
  id: string;
  name: string;
  siteId: string;
  balanceAmount: number;
  registerdOn: string;
  lastPaid: string;
  settledTill: string;
  isActive: Boolean;
  registeredFromSite: string;
  registeredBy: string;
  registeredByName: string;
  siteName: string;
  lastPaidAmount: number,
  totalPaid: number
}
