import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { PriceSliderComponent } from './price-slider/price-slider.component';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { FieldErrorComponent } from './field-error/field-error.component';
import { SearchFlightService } from './search-flight-service.service';
describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, Ng2CompleterModule],
            declarations: [
                AppComponent, SearchFormComponent, SearchResultComponent, PriceSliderComponent, FieldErrorComponent
            ],
            providers: [SearchFlightService]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
