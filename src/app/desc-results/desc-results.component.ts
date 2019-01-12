import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DealService } from '../deal.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'app-desc-results',
  templateUrl: './desc-results.component.html',
  styleUrls: ['./desc-results.component.css']
})
export class DescResultsComponent implements OnInit {

  isLoggedIn: any;
  name: any;
  text : String;
  deals: Array<any>;

  constructor(private route: ActivatedRoute,private dealService: DealService,private http: HttpClient,private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;   
      this.name=this.tokenStorage.getUsername();   
    }
    this.text = this.route.snapshot.paramMap.get("text")  
    this.dealService.getDealsByDesc(this.text).subscribe(data => {      
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].votedusers.length; j++) {
        
          if(data[i].votedusers[j].username === this.name)
          {
            data[i].voted=this.name;
          }
        }}  this.deals = data;
        
    
        
    
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
