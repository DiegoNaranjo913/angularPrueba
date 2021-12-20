import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  diferenteCero(control: FormControl): ValidationErrors | null {
    const valor = control.value;
    if (valor === 0) {
      return {
        noCero: true
      }
    }
    return null;
  }

}
