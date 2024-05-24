import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @ViewChild('drawer') drawer?: MatDrawer;
  navList: any[] = [
    {name: 'Home', path: 'sites'},
    {name: 'Employees', path: 'employees'},
    {name: 'Settings', path: 'settings'},
    {name: 'Analytics', path: 'stats'}
  ];
  constructor(private store: Store<{sidenavStatus: Boolean}>){
    this.store.select('sidenavStatus').subscribe(val => {
      this.toggle();
    })
  }

  toggle(){
    this.drawer?.toggle();
  }

}
