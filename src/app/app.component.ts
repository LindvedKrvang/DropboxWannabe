import {Component, Input, OnDestroy} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'dbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
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
