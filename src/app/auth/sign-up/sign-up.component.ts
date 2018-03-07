import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {matchPassword} from '../shared/custom-validators';
import {SignUpService} from '../shared/sign-up.service';
import {MatSnackBar} from '@angular/material';
import {User} from '../shared/user';

@Component({
  selector: 'dbw-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;


  minCharacters = 'Must be at least 6 characters';

  constructor(private router: Router, private fb: FormBuilder,
              private signUpService: SignUpService,
              private snack: MatSnackBar) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, matchPassword()]]
    });
  }

  signUp() {
    console.log('SignUp clicked');
    const model = this.signUpForm.value as User;
    this.signUpService.signUp(model)
      .then(user => {
        console.log('Created new user');
        this.router.navigateByUrl('files');
        this.snack.open('You\'re signed up', '', {duration: 2000});
      })
      .catch(err => {
        console.log('No user created');
        console.log(err);
      });
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get repeatPassword() {
    return this.signUpForm.get('repeatPassword');
  }

  getEmailError(): string {
    return this.email.errors.required ? 'Email required' :
      this.email.errors.email ? 'Must be an email' : '';
  }

  getPasswordError(): string {
    return this.password.errors.required ? 'Password required' :
      this.password.errors.minlength ? this.minCharacters : '';
  }

  getRepeatPasswordError(): string {
    return this.repeatPassword.errors.required ? 'Repeat Password required' :
      this.repeatPassword.errors.noMatch ? 'Must match the password' : '';
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }

}
