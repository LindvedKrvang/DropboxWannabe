import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/user';
import {UserService} from '../shared/user.service';
import {Subscription} from 'rxjs/Subscription';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'dbw-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profileForm: FormGroup;
  user: User;
  userSub: Subscription;
  image = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private snack: MatSnackBar) {
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
        this.showSnackbar('Successfully updated profile :)');
      })
      .catch(err => {
        this.showSnackbar('Couldn\'t update profile');
        console.log(err.message);
      });
  }

  unchanged(): boolean {
    const model = this.profileForm.value as User;
    return model.username === this.user.username &&
            model.firstName === this.user.firstName &&
            model.middleName === this.user.middleName &&
            model.lastName === this.user.lastName;
  }

  showSnackbar(msg: string) {
    this.snack.open(msg, null, {duration: 4000});
  }

  changeHoverPic(hovering: boolean) {
    console.log('Profile hovering', hovering);
    if (hovering) {
      this.image = '../../../../assets/upload_picture.svg';
    } else {
      this.image = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    }
  }

  onPicDropped(fileList) {
    if (fileList && fileList.length === 1 && ['image/jpeg', 'image/png'].indexOf(fileList.item(0).type) > -1) {
      console.log('Single file:', fileList.item(0));
    } else {
      this.showSnackbar('Must be a single JPEG or PNG');
    }
  }
}
