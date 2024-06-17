import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpService) { }

  getAllSites(){
    
  }

  getAttendance(siteId: string, date = new Date()){
    return this.http.get(`${siteId}/attendance`, {date});
  }
  
}
