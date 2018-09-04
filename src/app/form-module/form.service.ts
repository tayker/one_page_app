import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  formDataRegister = {
    firstname: {
      type: 'text',
      placeholder: 'Petro',
      label: 'First Name'
    },
    lastname: {
      type: 'text',
      placeholder: 'Vlaschuk',
      label: 'Last Name'
    },
    phone: {
      type: 'number',
      placeholder: '+38',
      label: 'Phone',
      array: 'phone'
    },
    email: {
      type: 'email',
      placeholder: 'topone@gmail.com',
      label: 'Email'
    },
    gender: {
      type: 'radio',
      value: 'male',
      label: 'Choose your',
      options: [
        { label: 'Female', value: 'female', class: 'radio-item__female' },
        { label: 'Male', value: 'male', class: 'radio-item__male'}
      ]
    },
    country: {
      type: 'select',
      value: 'ua',
      label: 'Country',
      options: [
        { label: 'USA', value: 'usa' },
        { label: 'UA', value: 'ua'}
      ]
    },
    inn: {
      type: 'number',
      placeholder: '1488228',
      label: 'Personal INN',
      dependency: {
        field: 'country',
        value: 'usa'
      },
      array: 'inn'
    },
    passport: {
      type: 'text',
      placeholder: 'KO1488228',
      label: 'Passport ID',
      dependency: {
        field: 'country',
        value: 'ua'
      }
    }
  };
  constructor() { }

  getFormData(form): object{
    switch(form) {
      case('register'): {
        return this.formDataRegister;
      }
      default: {
        break;
      }
    }
  }
}
