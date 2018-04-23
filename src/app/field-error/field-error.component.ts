import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss']
})
export class FieldErrorComponent {

  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'departureDate': (params) => params.message,
    'returnDate': (params) => params.message,
  };

  @Input()
  flightControl: any;

  showErrors(): boolean {
    return this.flightControl &&
      this.flightControl.errors;
  }

  errors(): string[] {
    return Object.keys(this.flightControl.errors)
      .map(field => this.getMessage(field, this.flightControl.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return FieldErrorComponent.errorMessages[type](params);
  }
}
