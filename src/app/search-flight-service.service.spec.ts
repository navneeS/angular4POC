import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { SearchFlightService } from './search-flight-service.service';

describe('SearchFlightServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [SearchFlightService]
        });
    });

    it('should be created', inject([SearchFlightService], (service: SearchFlightService) => {
        expect(service).toBeTruthy();
    }));
});
