import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[hinvEmailvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailvalidatorDirective,
      multi: true
    }
  ],
  standalone: true
})
export class EmailvalidatorDirective implements Validator {

  constructor() { console.log('hinvEmailvalidator] constructor'); }

  validate(control: AbstractControl) : ValidationErrors | null {
    const value = control.value as string;
    console.log('hinvEmailvalidator]');
    if(!value?.includes("@")) {
      return { invalidEmail:true}
    }
    return null;        
  }

}
