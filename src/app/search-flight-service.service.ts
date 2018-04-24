import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchFlightService {
  private flightSearch = new Subject<any>();
  private flightRate = new Subject<any>();
  constructor(private http: Http) { }

  setFlights(state: any) {
    this.flightSearch.next(state);
  }

  getFlights(): Observable<any> {
    return this.flightSearch.asObservable();
  }

  setRate(state: any) {
    this.flightRate.next(state);
  }

  getRate(): Observable<any> {
    return this.flightRate.asObservable();
  }
  public getAllFlights(): Observable<any> {
    return this.http.get('/api/FlightsData')
      .map((res: any) => {
        return res.json();
      });
  }
}
