import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from './auth/shared/auth.service';

@Component({
  selector: 'dbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  showNav = true;
  mode = 'side';
  watcher: Subscription;
  constructor(media: ObservableMedia, private authService: AuthService) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else {
        this.loadDashboardContent();
      }
    });
  }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(isLogged => {
      this.showNav = isLogged;
    });
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

  loadMobileContent() {
    this.mode = 'over';
    this.showNav = false;
  }

  loadDashboardContent() {
    this.mode = 'side';
    this.showNav = true;
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }
}
