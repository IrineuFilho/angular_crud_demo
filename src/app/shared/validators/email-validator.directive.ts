import {AbstractControl, ValidatorFn} from '@angular/forms';

export function EmailValidator(email: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const regexp = email.test(control.value);
    return regexp ? null : {emailInvalid: {value: control.value}};
  };
}
