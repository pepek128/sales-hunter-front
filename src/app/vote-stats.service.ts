import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VoteStatsService {

  constructor(private http: HttpClient) { }

  getAllStats(): Observable<any> {
    return this.http.get('//localhost:8080/votes');
  }
}
