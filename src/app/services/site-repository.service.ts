import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISite } from '../store/actions/site.actions';
import { Store } from '@ngrx/store';
import { getSiteLoadedSelect, RootReducerState } from '../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class SiteRepositoryService {

  constructor(private store: Store<RootReducerState>) { }

  getSiteList(force: boolean): [Observable<boolean>, Observable<boolean>, Observable<ISite[]>]{
    const loading$ = this.store.select(getSiteLoadedSelect);
    return [loading$, error$, sites$]
  }
}
