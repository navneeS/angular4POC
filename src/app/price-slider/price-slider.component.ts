import { Component, OnInit } from '@angular/core';
import { SearchFlightService } from '../search-flight-service.service';

@Component({
  selector: 'app-price-slider',
  templateUrl: './price-slider.component.html',
  styleUrls: ['./price-slider.component.scss']
})
export class PriceSliderComponent implements OnInit {
  priceSlider: any;
  constructor(private flightService: SearchFlightService) { }

  ngOnInit() {
  }
  onSliderChange() {
    this.flightService.setRate(this.priceSlider);
  }
}
