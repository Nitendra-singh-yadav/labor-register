import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.scss'
})
export class SitesComponent {
  sites = [
    {id: 1, name: 'Home', address: 'lko', currentDebt: 1000},
    {id: 2, name: 'Bank', address: 'lko', currentDebt: 1300},
    {id: 3, name: 'Complex', address: 'lko', currentDebt: 200},
    {id: 4, name: 'Home 2', address: 'lko', currentDebt: 14000}
  ]
  constructor(private router: Router) {
    
  }
  goToSite(site: any){
    this.router.navigate(['sites',site.id])
  }
}
