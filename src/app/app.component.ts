import {Component, Input} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'dbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNav = true;
  mode = 'side';

  watcher: Subscription;

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'xs') {
        this.loadMobileContent();
      } else {
        this.loadDashboardContent();
      }
    });
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
    console.log('Show is now: ' + this.showNav);
  }
}
