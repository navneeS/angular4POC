import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PriceSliderComponent } from './price-slider.component';
import { SearchFlightService } from '../search-flight-service.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
describe('PriceSliderComponent', () => {
  let component: PriceSliderComponent;
  let fixture: ComponentFixture<PriceSliderComponent>;
  const priceSlider = 1000;
  const mockService = {
    setRate() { },
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [PriceSliderComponent],
      providers: [SearchFlightService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set the rate on slider change', () => {
    component.onSliderChange();
  //  spyOn(mockService, 'setRate').and.callThrough();
  //  expect(mockService.setRate).toHaveBeenCalled();
  });
});
