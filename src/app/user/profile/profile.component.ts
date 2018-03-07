import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'dbw-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = fb.group({
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  updateUser() {

  }
}
