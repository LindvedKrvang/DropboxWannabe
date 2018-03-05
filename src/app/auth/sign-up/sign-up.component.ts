import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'dbw-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }

}
