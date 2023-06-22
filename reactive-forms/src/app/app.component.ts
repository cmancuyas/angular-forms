import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { forbiddenNameValidator } from 'src/_shared/user-name.validator';
import { PasswordValidator } from 'src/_shared/password.validator';
import { RegistrationService } from 'src/_shared/service/registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;

  ngOnInit(): void {
    // this.loadAPIData();
    this.buildForm();

    // email is required when subscribe is clicked
    this.registrationForm
      .get('subscribe')
      ?.valueChanges.subscribe((checkedValue) => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email?.setValidators(Validators.required);
        } else {
          email?.clearValidators;
        }
        email?.updateValueAndValidity();
      });
  }

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService
  ) {}

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  buildForm() {
    this.registrationForm = this.fb.group(
      {
        userName: [
          'chris',
          [
            Validators.required,
            Validators.minLength(3),
            forbiddenNameValidator(/password/),
          ],
        ],
        password: ['123', Validators.required],
        confirmPassword: ['123', Validators.required],
        email: ['', Validators.required],
        subscribe: [true],
        address: this.fb.group({
          city: [''],
          state: [''],
          postalCode: [''],
        }),
        alternameEmails: this.fb.array([]),
      },
      { validator: PasswordValidator }
    );
  }

  // registrationForm: FormGroup = new FormGroup({
  //   userName: new FormControl('chris'),
  //   password: new FormControl('123'),
  //   confirmPassword: new FormControl('123'),

  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  // });

  loadAPIData() {
    this.registrationForm.setValue({
      userName: 'Kobe',
      password: 'test123',
      confirmPassword: 'test123',
      email: 'kobe@gmail.com',
      subscribe: false,
      address: {
        city: 'Calamba',
        state: 'State',
        postalCode: '4027',
      },
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.registrationService.register(this.registrationForm.value).subscribe(
      (response) => console.log('Success', response),
      (error) => console.log('Error', error)
    );
  }
}
