import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchFlightService {
  private flightSearch = new Subject<any>();
  constructor(private http: Http) { }

  setFlights(state: any) {
    this.flightSearch.next(state);
  }

  getFlights(): Observable<any> {
    return this.flightSearch.asObservable();
  }

  public getReturnFlights(): Observable<any> {
    return this.http.get('/api/returnFlightsData')
      .map((res: any) => {
        return res.json();
      });
  }

  public getOneWayFlights(): Observable<any> {
    return this.http.get('/api/oneWayFlightsData')
      .map((res: any) => {
        return res.json();
      });
  }

}
