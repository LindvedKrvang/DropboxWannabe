import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/user';
import {UserService} from '../shared/user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'dbw-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {


  profileForm: FormGroup;
  user: User;
  userSub: Subscription;

  constructor(private fb: FormBuilder,
              private userService: UserService) {
    this.profileForm = fb.group({
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });

    // this.user = {uid: '', username: 'Hello World', email: 'hello@world.com'};
  }

  ngOnInit() {
    this.userSub = this.userService.getUser().subscribe(user => {
      this.user = user;
      this.profileForm.patchValue(user);
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  updateUser() {
    const model = this.profileForm.value;
    model.uid = this.user.uid;
    this.userService.update(model)
      .then(() => {
        console.log('User updated');
      })
      .catch(err => {
        console.log(err.message);
      });
  }
}
