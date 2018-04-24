import { Component, OnInit, Input, AfterContentChecked, DoCheck, OnDestroy } from '@angular/core';
import { SearchFlightService } from '../search-flight-service.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, AfterContentChecked, DoCheck, OnDestroy {
  flights: any;
  flightsFound: any = [];
  showFlights: Boolean = false;
  serverError: String = '';
  private subscription: Subscription;
  searchData: any = {};
  constructor(private flightService: SearchFlightService) {
    this.subscription = this.flightService.getFlights().subscribe(
      searchData => {
        this.searchData = searchData;
      });
  }

  ngOnInit() {
    this.flightService.getAllFlights()
    .subscribe(data => {
      this.flights = data.Flights;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        this.serverError = 'The server encountered an error processing the request. Please try again, Sorry for the trouble.';
      }
    });
  }

  ngDoCheck() {
    if (Object.keys(this.searchData).length === 0) {
      this.showFlights = false;
    }
  }

  ngAfterContentChecked() {
    if (Object.keys(this.searchData).length !== 0) {
      this.flightsFound = [];
      if (this.searchData && this.flights) {
        this.flightsFound = this.flights.filter(
          flights => flights.from === this.searchData.source && flights.to === this.searchData.destination);
        this.showFlights = true;
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
