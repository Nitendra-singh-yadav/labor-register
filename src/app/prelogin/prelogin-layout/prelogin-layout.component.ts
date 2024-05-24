import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-prelogin-layout',
  templateUrl: './prelogin-layout.component.html',
  styleUrl: './prelogin-layout.component.scss'
})
export class PreloginLayoutComponent {
  size$!: Observable<any>;
  screenClassMap = {
    [Breakpoints.Large]: 'large',
    [Breakpoints.Web]: 'large',
    [Breakpoints.XLarge]: 'large',
    [Breakpoints.WebLandscape]: 'large',
    [Breakpoints.Medium]: 'medium',
    [Breakpoints.WebPortrait]: 'medium'
  };
  constructor(private bpObserver: BreakpointObserver){
    this.size$ = this.bpObserver.observe(Object.keys(this.screenClassMap)).pipe(map((val) => {
      for (const query in this.screenClassMap) {
        if (val.breakpoints[query]) {
          return this.screenClassMap[query];
        }
      }
      return 'small';
    }))
  }
}
