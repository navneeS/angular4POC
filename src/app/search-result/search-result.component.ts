import { Component, OnInit, Input, AfterContentChecked, OnDestroy } from '@angular/core';
import { SearchFlightService } from '../search-flight-service.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, AfterContentChecked, OnDestroy {
  flights: any;
  returnFlights: any;
  flightsFound: any = [];
  returnFlightsFound: any = [];
  showFlights: Boolean = false;
  private subscription: Subscription;
  searchData: any = {};
  constructor(private flightService: SearchFlightService) {
    this.subscription = this.flightService.getFlights().subscribe(
      searchData => {
        this.searchData = searchData;
      });
  }

  ngOnInit() {
    this.flightService.getReturnFlights()
      .subscribe(data => {
        this.returnFlights = data.returnFlights;
      });

    this.flightService.getOneWayFlights()
      .subscribe(data => {
        this.flights = data.oneWayFlights;
      });
  }

  ngAfterContentChecked() {
    if (Object.keys(this.searchData).length !== 0) {
      this.flightsFound = [];
      this.returnFlightsFound = [];
      if (this.searchData && this.searchData.returnDate) {
        this.returnFlightsFound = this.returnFlights.filter(
          flights => flights.from === this.searchData.source && flights.to === this.searchData.destination);
        this.showFlights = true;
      } else if (this.searchData && !this.searchData.returnDate) {
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
