import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sales-hunter-front';
}
export class SidenavModeExample {
  showSidenav = false;

  closeSidenav() {
    this.showSidenav = false;
  }

  openSidenav() {
    this.showSidenav = true;
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
