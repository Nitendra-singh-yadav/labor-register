import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { sidenavAction } from './store/actions/userinteraction.actions';
import { combineLatest, concatMap, delay, interval, map, of, Subject, take, takeUntil, takeWhile, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'labour-register';
  constructor(private store: Store){

  }
  ngOnInit(): void {
    // const ar = [1,2,3,4,5]
    // const s = new Subject();
    // const o1 = of(...[1,2,3,4,5])
    // .pipe(delay(1000));
    // interval(1000).pipe(takeUntil(s), map(v=>ar[v])).subscribe(v=>console.log(v));
    // const o2 = of(...[6,7,8,9,0]).pipe(map(v=>of(v).pipe(delay(1000))));
    // o2.subscribe(v=>console.log(v))
    // combineLatest([o1,o2]).subscribe(data=>{
    //   console.log(data);
    
    // })
  }
  toggleSidenav(){
    this.store.dispatch(sidenavAction());
  }
}
