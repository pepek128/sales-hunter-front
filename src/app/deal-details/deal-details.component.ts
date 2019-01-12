import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DealService } from '../deal.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.css']
})
export class DealDetailsComponent implements OnInit {
  id : String;
  name:any;
  username: any;
  deal: Array<any>;
  isLoggedIn: any;

  constructor(private route: ActivatedRoute,private dealService: DealService,private http: HttpClient,private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;     
      this.name=this.tokenStorage.getUsername(); 
    }  
    this.id = this.route.snapshot.paramMap.get("id")
    this.dealService.getDeal(this.id).subscribe(data => {     
        for (var j = 0; j < data.votedusers.length; j++) {
        
          if(data.votedusers[j].username === this.name)
          {
            data.voted=this.name;
          
        }}


      this.deal = data;
    });
  }
  plusScore(deal) {
    
    let url = "http://localhost:8080/deal";
  


   
    deal.score = deal.score + 1;
    deal.voted=this.tokenStorage.getUsername();   
   

    this.http.put(url, deal).subscribe(
      res => {

      },
      err => {
        alert("Błąd dodawania okazji");
      }
    );
    

  }
  minusScore(deal) {
    let url = "http://localhost:8080/deal";
    
    
  
    deal.score = deal.score - 1;
    deal.voted=this.tokenStorage.getUsername();    
    this.http.put(url, deal).subscribe(
      res => {

      },
      err => {
        alert("Błąd dodawania okazji");
      }
    );

    
  }
}