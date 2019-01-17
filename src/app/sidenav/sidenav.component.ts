import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from '../auth/token-storage.service';
import { DealService } from '../deal.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  deals:any;
  info: any;
  isLoggedIn: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,private token: TokenStorageService,private dealService: DealService) {}
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.dealService.getRecommended(this.info.username).subscribe(data => {      
       this.deals = data;     
    
        
    
    });
   
    
  }
  logout() {    
    this.token.signOut();
    window.location.reload();
  }
details(deal){
  window.location.href="/deals/"+deal.dealID;

}
}
