import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchFlightService } from './search-flight-service.service';
import { DateValidatorDirective } from './validators/date-validator.directive';
import { Ng2CompleterModule } from 'ng2-completer';
import { FieldErrorComponent } from './field-error/field-error.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchResultComponent,
    DateValidatorDirective,
    FieldErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2CompleterModule
  ],
  providers: [SearchFlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
