import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../shared/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'dbw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  watcher: Subscription;
  showMore = true;
  loginForm: FormGroup;

  constructor(private media: ObservableMedia, private authService: AuthService, private fb: FormBuilder) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else {
        this.loadDashboardContent();
      }
    });

    this.loginForm = this.fb.group({
      email: '',
      password: '',
      repeatPassword: ''
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
    console.log('Button Clicked!');
    this.authService.login(email, password)
      .then(user => {
        console.log('Is logged in');
      })
      .catch(error => {
        console.log(error);
      });
  }

}
