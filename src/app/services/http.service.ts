import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  get(path: string, params?: {[param: string]: any}): Observable<any>{
    return this.http.get(`${this.apiUrl}/${path}`, {
      params
    })
  }

  post(path: string, params: {[param: string]: any}){
    this.http.get(`${this.apiUrl}/${path}`, {
      params
    })
  }


}
