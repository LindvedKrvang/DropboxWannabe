import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../shared/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'dbw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  watcher: Subscription;
  showMore = true;
  loginForm: FormGroup;

  constructor(private media: ObservableMedia, private authService: AuthService, private fb: FormBuilder,
              private router: Router, private snack: MatSnackBar) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else {
        this.loadDashboardContent();
      }
    });

    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  loadMobileContent() {
    this.showMore = false;
  }

  loadDashboardContent() {
    this.showMore = true;
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

  loginButtonClicked(email: string, password: string) {
    this.authService.login(email, password)
      .then(user => {
        this.router.navigateByUrl('files');
        this.showSnackBar('You\'re now logged in');
      })
      .catch(error => {
        console.log(error);
        this.showSnackBar(error.message);
      });
  }

  goToSignUp() {
    this.router.navigateByUrl('signUp');
  }

  showSnackBar(msg: string) {
    this.snack.open(msg, null, {duration: 4000});
  }
}
