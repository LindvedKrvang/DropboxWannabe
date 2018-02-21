import {Component, Input} from '@angular/core';

@Component({
  selector: 'dbw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  showNav = true;

  toggleNav() {
    this.showNav = !this.showNav;
  }
}
