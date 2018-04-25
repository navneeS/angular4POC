import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { FieldErrorComponent } from '../field-error/field-error.component';
import { SearchFlightService } from '../search-flight-service.service';
import { By } from '@angular/platform-browser';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, Ng2CompleterModule],
      declarations: [SearchFormComponent, FieldErrorComponent],
      providers: [SearchFlightService]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide and show return date onclick of one way and return tabs', () => {
    component.oneWayClick();
    expect(component.showReturn).toEqual(false);
    component.returnClick();
    expect(component.showReturn).toEqual(true);
  });

  it('should hide flights if any value in form changes', () => {
    component.OnValueChange();
    expect(component.submitted).toEqual(false);
  });

  it('should show error message when departure date is greater than return date', () => {
    const flight = {
      form: {
        value: {
          source: 'Delhi',
          destination: 'Mumbai',
          departureDate: 'Mon Apr 23 2018 20:15:39 GMT+0530 (India Standard Time)',
          returnDate: 'Mon Apr 22 2018 20:15:39 GMT+0530 (India Standard Time)',
          noOfPassengers: '1'
        }
      }
    };
    component.onSubmit(flight);
    setTimeout(() => {
      expect(component.dateErrorMsg).toBeTruthy();
    }, 3000);
  });

  it('should show error message when source and destination are same', () => {
    const flight = {
      form: {
        value: {
          source: 'Delhi',
          destination: 'Delhi',
          departureDate: 'Mon Apr 23 2018 20:15:39 GMT+0530 (India Standard Time)',
          returnDate: 'Mon Apr 24 2018 20:15:39 GMT+0530 (India Standard Time)',
          noOfPassengers: '1'
        }
      }
    };
    component.onSubmit(flight);
    setTimeout(() => {
      expect(component.locationErrorMsg).toBeTruthy();
    }, 3000);
  });

  it('should show submit the form when valid', () => {
    const flight = {
      valid: true,
      form: {
        value: {
          source: 'Delhi',
          destination: 'Mumbai',
          departureDate: 'Mon Apr 23 2018 20:15:39 GMT+0530 (India Standard Time)',
          returnDate: 'Mon Apr 24 2018 20:15:39 GMT+0530 (India Standard Time)',
          noOfPassengers: '1'
        }
      }
    };
    component.onSubmit(flight);
    setTimeout(() => {
      expect(component.errMsg).toBeFalsy();
    }, 3000);
  });

  it('should show error message  when form is invalid', () => {
    const flight = {
      valid: false,
      form: {
        value: {
          source: 'Delhi',
          destination: 'Mumbai',
          departureDate: 'Mon Apr 23 2018 20:15:39 GMT+0530 (India Standard Time)',
          returnDate: 'Mon Apr 24 2018 20:15:39 GMT+0530 (India Standard Time)',
          noOfPassengers: '1'
        }
      }
    };
    component.onSubmit(flight);
    setTimeout(() => {
      expect(component.errMsg).toBeTruthy();
    }, 3000);
  });
});
