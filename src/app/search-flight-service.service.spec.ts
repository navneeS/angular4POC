import { TestBed, inject } from '@angular/core/testing';

import { SearchFlightService } from './search-flight-service.service';

xdescribe('SearchFlightServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SearchFlightService]
        });
    });

    it('should be created', inject([SearchFlightService], (service: SearchFlightService) => {
        expect(service).toBeTruthy();
    }));
});
