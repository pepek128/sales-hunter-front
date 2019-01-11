import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;
 
  constructor(private tokenStorage: TokenStorageService) { }
  title = 'sales-hunter-front';


  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } 
        this.authority = 'user';
        return true;
      });
    }
  }
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
