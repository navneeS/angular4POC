import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[appDateValidate]',
    providers: [{ provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true }]
})
export class DateValidatorDirective implements Validator { // Creating class implementing Validator interface

    validate(c: FormControl): ValidationErrors {
        let isValid: Boolean = true;
        const todayDate: Date = new Date();
        const flightDate = c.value;
        if (flightDate) {
            const dateOne = new Date(flightDate).setHours(0, 0, 0, 0);
            const dateTwo = new Date().setHours(0, 0, 0, 0);

            if (dateOne >= dateTwo) {
                isValid = true;
            } else {
                isValid = false;
            }
        }
        const message = {
            'departureDate': {
                'message': 'Date must be greater than or same as present day.'
            }
        };
        return isValid ? null : message;
    }
}
