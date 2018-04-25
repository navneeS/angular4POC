import { Component } from '@angular/core';
import { SearchFlightService } from '../search-flight-service.service';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.scss']
})
export class PriceSliderComponent {
  priceSlider = 10000;
  constructor(private flightService: SearchFlightService) { }

  onSliderChange() {
    this.flightService.setRate(this.priceSlider);
  }
}
