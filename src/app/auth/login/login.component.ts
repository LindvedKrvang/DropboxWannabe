import {Component, OnDestroy, OnInit} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';
import {LoginService} from '../shared/loginService';

@Component({
  selector: 'dbw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  watcher: Subscription;
  showMore = true;

  constructor(private media: ObservableMedia, private loginService: LoginService) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else {
        this.loadDashboardContent();
      }
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
    console.log('Logging in...');
    this.loginService.login(email, password);
  }

}
