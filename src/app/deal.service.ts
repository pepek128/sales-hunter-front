import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';

@Injectable()
export class DealService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/deals');
  }

  getDeal(id:String): Observable<any> {
    return this.http.get('//localhost:8080/deals/'+id)
    




  }

}