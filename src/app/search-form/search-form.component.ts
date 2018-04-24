import { Component } from '@angular/core';
import { SearchFlightService } from '../search-flight-service.service';
import { Flight } from './flight';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  passengers = [1, 2, 3, 4, 5];
  constructor(private flightService: SearchFlightService) { }
  showReturn: Boolean = true;
  submitted: Boolean = false;
  errMsg: String = '';
  dateErrorMsg: String = '';
  locationErrorMsg: String = '';
  protected cities = ['Ahmedabad', 'Bengaluru', 'Chennai', 'Delhi', 'Mumbai', 'Pune'];
  flight: Flight = {
    source: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    noOfPassengers: ''
  };
  oneWayClick() {
    this.flight.returnDate = '';
    this.showReturn = false;
    this.submitted = false;
    this.flightService.setFlights({});
  }
  returnClick() {
    this.showReturn = true;
    this.submitted = false;
    this.flightService.setFlights({});
  }
  OnValueChange() {
    this.flightService.setFlights({});
    this.submitted = false;
  }
  onSubmit(searchForm) {
    this.dateErrorMsg = '';
    this.locationErrorMsg = '';
    const dateOne = new Date(searchForm.form.value.departureDate).setHours(0, 0, 0, 0);
    const dateTwo = new Date(searchForm.form.value.returnDate).setHours(0, 0, 0, 0);
    if (dateTwo < dateOne) {
      this.flightService.setFlights({});
      this.dateErrorMsg = 'Return date should be greater than or same as departure date';
      return;
    }
    if (searchForm.form.value.source && searchForm.form.value.destination
      && searchForm.form.value.source === searchForm.form.value.destination) {
      this.flightService.setFlights({});
      this.locationErrorMsg = 'Source and Destination cannot be same.';
      return;
    }
    this.submitted = true;
    if (searchForm.valid && this.submitted === true) {
      this.errMsg = '';
      this.flightService.setFlights(this.flight);
    } else {
      this.errMsg = 'Please fill all the required details.';
    }
  }

}
