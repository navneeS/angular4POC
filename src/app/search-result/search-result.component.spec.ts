import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { SearchResultComponent } from './search-result.component';
import { SearchFlightService } from '../search-flight-service.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
const searchData = {
    source: 'Delhi',
    destination: 'Mumbai',
    departureDate: 'Mon Apr 23 2018 20:15:39 GMT+0530 (India Standard Time)',
    returnDate: 'Mon Apr 22 2018 20:15:39 GMT+0530 (India Standard Time)',
    noOfPassengers: '1'
};
const flights = [{
    'from': 'Delhi',
    'fromCode': 'DEL',
    'to': 'Mumbai',
    'toCode': 'BOM',
    'departure': '12:00 AM',
    'arrival': '03:00 AM',
    'price': 3000,
    'flightCode': 'AI-101'
}];

describe('SearchResultComponent', () => {
    let component: SearchResultComponent;
    let fixture: ComponentFixture<SearchResultComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            declarations: [SearchResultComponent],
            providers: [SearchFlightService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should set the flights', () => {
        component.searchData = {
            source: 'Delhi',
            destination: 'Mumbai',
            departureDate: 'Mon Apr 23 2018 20:15:39 GMT+0530 (India Standard Time)',
            returnDate: 'Mon Apr 22 2018 20:15:39 GMT+0530 (India Standard Time)',
            noOfPassengers: '1'
        };
        component.flights = [{
            'from': 'Delhi',
            'fromCode': 'DEL',
            'to': 'Mumbai',
            'toCode': 'BOM',
            'departure': '12:00 AM',
            'arrival': '03:00 AM',
            'price': 3000,
            'flightCode': 'AI-101',
        }];
        component.ngAfterContentChecked();
        fixture.whenStable().then(() => {
            expect(component.flights).toBe(flights);
        });
    });
});
